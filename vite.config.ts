import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    plugins: [
        react(),
        {
            name: 'netlify-functions-mock',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url?.startsWith('/.netlify/functions/') && req.method === 'POST') {
                        const functionName = req.url.replace('/.netlify/functions/', '');
                        let body = '';
                        req.on('data', chunk => { body += chunk; });
                        req.on('end', async () => {
                            try {
                                const funcPath = path.resolve(__dirname, `netlify/functions/${functionName}.js`);
                                // Append timestamp to bypass ESM module cache
                                const moduleUrl = `file://${funcPath}?update=${Date.now()}`;
                                const { handler } = await import(moduleUrl);
                                const event = { httpMethod: 'POST', body };
                                const result = await handler(event);
                                
                                res.statusCode = result.statusCode || 200;
                                res.setHeader('Content-Type', 'application/json');
                                if (result.headers) {
                                    for (let key in result.headers) {
                                        res.setHeader(key, result.headers[key]);
                                    }
                                }
                                res.end(result.body);
                            } catch (error) {
                                console.error(`Error emulating function ${functionName}:`, error);
                                res.statusCode = 500;
                                res.end(JSON.stringify({ error: 'Internal Dev Server Error' }));
                            }
                        });
                        return; // Detener la cadena, nosotros respondimos
                    }
                    next();
                });
            }
        }
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
        }
    }
});
