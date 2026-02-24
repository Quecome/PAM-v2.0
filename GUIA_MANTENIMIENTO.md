# 🔧 Guía de Mantenimiento y Desarrollo — PAM v2.0

> **Audiencia:** Desarrolladores y mantenedores del proyecto  
> **Última actualización:** v2.0.1 — Febrero 2026

---

## Entorno de Desarrollo

### Requisitos del Sistema

| Herramienta | Versión Mínima | Instalar (Arch/Garuda) |
|-------------|---------------|----------------------|
| Node.js | 18.x+ | `sudo pacman -S nodejs` |
| npm | 9.x+ | Incluido con Node |
| Git | 2.x+ | `sudo pacman -S git` |

### Setup inicial

```bash
git clone <url-repositorio>
cd PAM-v2.0
npm install
cp .env.example .env       # o crear .env manualmente
# Editar .env con tu GEMINI_API_KEY
npm run dev                # http://localhost:3000
```

---

## Arquitectura de Archivos Clave

### Punto de entrada
```
index.html  →  <script type="module" src="/index.tsx">
index.tsx   →  ReactDOM.createRoot  →  <App />
App.tsx     →  AuthProvider > HashRouter > Routes > [PrivateRoute] > Pages
```

> ⚠️ **No agregar `importmap` a `index.html`.** El proyecto usa Vite para resolver módulos desde `node_modules`. Un importmap CDN causará página en blanco.

### Flujo de autenticación
```
AuthContext.tsx  →  login(role, name, phone)  →  localStorage['pam_auth']
PrivateRoute.tsx →  useAuth().isLoggedIn      →  redirect /login si false
Login.tsx        →  useAuth().login()         →  navigate(from || '/dashboard')
Sidebar.tsx      →  useAuth().logout()        →  limpia storage + navigate('/')
```

### Persistencia de datos
| Clave localStorage | Contenido | Dónde se gestiona |
|-------------------|-----------|-------------------|
| `pam_auth` | `{ isLoggedIn, userRole, userName, userPhone }` | `AuthContext.tsx` |
| `pam_crops` | `Crop[]` — array de cultivos del productor | `Dashboard.tsx` |

---

## Agregar una Nueva Pantalla / Feature

1. **Crear componente** en `features/[nombre-modulo]/[Nombre].tsx`
2. **Registrar ruta** en `App.tsx`:
   ```tsx
   // Ruta pública:
   <Route path="/nueva-ruta" element={<NuevoComponente />} />
   
   // Ruta protegida:
   <Route path="/privada" element={<PrivateRoute><NuevoComponente /></PrivateRoute>} />
   ```
3. **Agregar link** en `Navbar.tsx` (público) o `Sidebar.tsx` (dashboard)
4. Si el componente necesita datos de productores, importar desde `data/producers.ts`

---

## Modificar el Tema Visual

El tema de colores PAM se define en `index.html` dentro del bloque `tailwind.config`:

```javascript
colors: {
  "primary": "#8a8e39",          // Verde olivo PAM — botones principales
  "primary-hover": "#6e722d",    // Hover de primary
  "pam-green": "#388E3C",        // Verde fuerte — sidebar, chatbot
  "pam-green-dark": "#2E7D32",   // Hover de pam-green
  "background-light": "#f7f8f6", // Fondo general claro
  "earth": "#D7CCC8",            // Beige tierra — Certifications Hero
  "gold-accent": "#D4AF37",      // Dorado — separadores de certificaciones
}
```

> Cambios en `tailwind.config` dentro de `index.html` requieren recarga completa del navegador (no HMR).

---

## Gestión del Chatbot (Google Gemini)

### Cambiar el modelo de IA
En `components/Chatbot.tsx` línea ~32:
```typescript
model: 'gemini-3-pro-preview',  // Cambiar aquí
```

### Modificar el System Prompt
En `components/Chatbot.tsx` línea ~34:
```typescript
systemInstruction: "Eres el asistente virtual experto de PAM...",
```
El prompt define la personalidad, dominio de conocimiento y tono del chatbot.

### La API Key
- Almacenada en `.env` como `GEMINI_API_KEY`
- Inyectada en build-time por Vite (`vite.config.ts` → `define`)
- Accesible en runtime como `process.env.API_KEY`
- **Nunca** commitear el `.env` al repositorio

---

## Reemplazar Mock Data con API Real

Actualmente los datos de productores viven en `data/producers.ts`. Para conectar a un backend real:

### Paso 1: Crear un hook de datos
```typescript
// hooks/useProducers.ts
import { useState, useEffect } from 'react';
import type { Producer } from '../data/producers';

export const useProducers = () => {
  const [producers, setProducers] = useState<Producer[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/producers')
      .then(r => r.json())
      .then(data => { setProducers(data); setLoading(false); });
  }, []);
  
  return { producers, loading };
};
```

### Paso 2: Reemplazar en los componentes
```tsx
// Antes (mock):
import { producersData } from '../../data/producers';

// Después (API):
import { useProducers } from '../../hooks/useProducers';
const { producers, loading } = useProducers();
```

No es necesario cambiar la interfaz `Producer` — está definida en `data/producers.ts` y puede mantenerse como contrato de tipo.

---

## Agregar Protección de Rutas Adicionales

```tsx
// En App.tsx — envolver cualquier ruta con PrivateRoute:
<Route path="/nueva-privada" element={
  <PrivateRoute>
    <NuevoComponente />
  </PrivateRoute>
} />
```

Para rutas solo para un rol específico (ej. solo compradores), extender `PrivateRoute.tsx`:
```typescript
interface Props { children: React.ReactNode; requiredRole?: 'producer' | 'buyer'; }

// Agregar dentro de PrivateRoute:
if (requiredRole && userRole !== requiredRole) {
  return <Navigate to="/unauthorized" replace />;
}
```

---

## Build de Producción

```bash
npm run build       # genera /dist
npm run preview     # sirve /dist localmente para verificar
```

El directorio `dist/` contiene todos los assets estáticos. Al usar HashRouter, puede desplegarse en:
- **GitHub Pages** — subiendo `dist/` directamente
- **Netlify / Vercel** — apuntando al directorio `dist/`
- **S3 / GCS** — como sitio estático con redirección de 404 a `index.html`
- **Servidor Apache/Nginx** — servir `index.html` para todas las rutas

### Configuración Nginx (producción)
```nginx
location / {
  root /var/www/pam;
  try_files $uri $uri/ /index.html;  # SPA fallback
}
```

---

## Solución de Problemas Comunes

| Problema | Causa | Solución |
|----------|-------|---------|
| **Página en blanco al arrancar** | `importmap` CDN en `index.html` | Eliminar el bloque `<script type="importmap">` |
| **"node: command not found"** | Node.js no instalado | `sudo pacman -S nodejs npm` |
| **Chatbot no responde** | `GEMINI_API_KEY` no configurada | Crear/verificar archivo `.env` en la raíz |
| **Dashboard vacío al refresh** | localStorage desactivado en navegador | Verificar configuración de privacidad del browser |
| **Rutas `/dashboard` redirigen a login** | Sesión expirada o localStorage limpiado | Iniciar sesión nuevamente con cualquier teléfono de 10 dígitos |
| **Estilos Tailwind no aplican** | CDN bloqueado por red corporativa | Verificar conectividad o instalar Tailwind localmente |
| **HMR no actualiza** | Puerto 3000 bloqueado | Cambiar `port` en `vite.config.ts` |

---

## Estructura de la Base de Datos (Futura)

Para la migración a backend, la estructura recomendada de tablas:

```sql
-- Usuarios (productores y compradores)
users (id, phone, name, role, location, verified_level, created_at)

-- Productores
producers (id, user_id, bio, hectares_total, years_active, verified)

-- Cultivos
crops (id, producer_id, name, location, hectares, tonnage, status, harvest_date)

-- Certificaciones de productores
producer_certifications (id, producer_id, cert_type, valid_until, document_url)

-- Leads / Solicitudes de contacto
leads (id, producer_id, buyer_id, product, quantity, message, status, created_at)
```

---

## Variables de Entorno

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | API Key de Google Gemini para el chatbot | Solo para chatbot |

Agregar nuevas variables de entorno:
1. Agregar al archivo `.env`: `NUEVA_VAR=valor`
2. Registrar en `vite.config.ts` dentro de `define`:
   ```ts
   'process.env.NUEVA_VAR': JSON.stringify(env.NUEVA_VAR)
   ```
3. Usar en componentes: `process.env.NUEVA_VAR`

---

*© 2024 PAM — Para uso interno del equipo de desarrollo*
