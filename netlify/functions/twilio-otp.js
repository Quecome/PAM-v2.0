import crypto from 'crypto';
import https from 'https';

const SECRET = process.env.OTP_SECRET || 'pam-secret-2026-very-secure';
const TWILIO_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_FROM = process.env.TWILIO_PHONE_NUMBER;

export const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Not Allowed' };
    }

    let body;
    try {
        body = JSON.parse(event.body || '{}');
    } catch {
        return { statusCode: 400, body: JSON.stringify({ error: 'Body inválido' }) };
    }

    const { action, phone, code, hash } = body;

    if (!action || !phone) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Faltan parámetros' }) };
    }

    // ── Enviar OTP ──
    if (action === 'send') {
        // Generar 6 dígitos aleatorios
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const messageBody = `PAM: Tu código de verificación es ${otp}. No lo compartas con nadie.`;

        const data = new URLSearchParams();
        data.append('To', phone);
        data.append('From', TWILIO_FROM);
        data.append('Body', messageBody);

        const auth = Buffer.from(`${TWILIO_SID}:${TWILIO_TOKEN}`).toString('base64');

        try {
            // Promesa para envolver la petición HTTPS a Twilio (no fetch para mantenerlo nativo en funciones raw Node 18+)
            const responseData = await new Promise((resolve, reject) => {
                const req = https.request({
                    hostname: 'api.twilio.com',
                    port: 443,
                    path: `/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`,
                    method: 'POST',
                    headers: {
                        'Authorization': `Basic ${auth}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Length': Buffer.byteLength(data.toString())
                    }
                }, res => {
                    let d = '';
                    res.on('data', chunk => d += chunk);
                    res.on('end', () => resolve({ status: res.statusCode, data: d }));
                });
                req.on('error', reject);
                req.write(data.toString());
                req.end();
            });

            if (responseData.status !== 201) {
                console.error("Twilio Error:", responseData.data);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: 'No se pudo enviar el SMS. Verifica el número destination.' })
                };
            }

            // Crear un hash HMAC para verificar el código en el siguiente paso sin guardarlo en base de datos
            const verifyHash = crypto.createHmac('sha256', SECRET).update(`${phone}:${otp}`).digest('hex');

            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ success: true, hash: verifyHash })
            };

        } catch (err) {
            console.error('Error enviando SMS:', err);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Error interno del servidor SMS' })
            };
        }
    }

    // ── Verificar OTP ──
    if (action === 'verify') {
        if (!code || !hash) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Faltan código o hash' }) };
        }

        const expectedHash = crypto.createHmac('sha256', SECRET).update(`${phone}:${code}`).digest('hex');

        if (expectedHash === hash) {
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ success: true })
            };
        } else {
            return {
                statusCode: 401,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ success: false, error: 'Código incorrecto' })
            };
        }
    }

    return { statusCode: 400, body: JSON.stringify({ error: 'Acción desconocida' }) };
};
