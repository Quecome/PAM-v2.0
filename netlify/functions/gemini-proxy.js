// netlify/functions/gemini-proxy.js
import { GoogleGenAI } from '@google/genai';

export const handler = async (event) => {
    // Solo POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // Verificar que la key existe en el servidor
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return {
            statusCode: 503,
            body: JSON.stringify({ error: 'Servicio no disponible' }),
        };
    }

    let body;
    try {
        body = JSON.parse(event.body || '{}');
    } catch {
        return { statusCode: 400, body: JSON.stringify({ error: 'Body inválido' }) };
    }

    const { message, history = [] } = body;
    if (!message) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Falta el mensaje' }) };
    }

    try {
        const ai = new GoogleGenAI({ apiKey });

        const chat = ai.chats.create({
            model: 'gemini-2.0-flash',
            config: {
                systemInstruction:
                    'Eres el asistente virtual experto de PAM (Productores Agroalimentarios de Michoacán). ' +
                    'Tu objetivo es ayudar a productores a gestionar sus cultivos y a compradores a encontrar productos de alta calidad ' +
                    '(aguacate, berries, limón, mango). Eres amable, profesional y conoces sobre certificaciones agrícolas ' +
                    '(SENASICA, GlobalG.A.P), temporadas de cosecha en Michoacán y buenas prácticas agrícolas. ' +
                    'Responde de manera concisa y útil.',
            },
            history: history.map((m) => ({
                role: m.role,
                parts: [{ text: m.text }],
            })),
        });

        const result = await chat.sendMessage({ message });
        const responseText = result.text || '';

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ response: responseText }),
        };
    } catch (err) {
        console.error('Error Gemini proxy:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error del asistente virtual' }),
        };
    }
};
