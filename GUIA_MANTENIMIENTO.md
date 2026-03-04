# 🛠️ PAM v2.0 - Guía de Mantenimiento del Sistema

Este documento está dirigido a desarrolladores y administradores del sistema PAM. Describe la arquitectura actual, cómo actualizar datos y preparar el proyecto para futuras fases (ej. integración de un backend).

---

## 🏗️ 1. Arquitectura Frontend (React + Vite)
El proyecto v2.0 es una SPA (Single Page Application) construida con las siguientes tecnologías clave:
*   **Framework:** React 18.
*   **Build Tool:** Vite (rápido y optimizado para ESM).
*   **Estilos:** Tailwind CSS (vía CDN en `index.html`) + CSS mínimo (`index.css`).
*   **Enrutador:** `react-router-dom` (usando `HashRouter` para compatibilidad web/estática).
*   **Iconos y Fuentes:** Material Symbols Outlined y Google Fonts (Inter, Outfit).
*   **Control de Estado:** Context API (`AuthContext`) y LocalStorage para persistencia temporal (mocking).

---

## 📂 2. Estructura de Directorios

El código principal reside en `src/`:
*   `/components`: Componentes reutilizables de UI (Navbar, Sidebar, Chatbot, PrivateRoute).
*   `/context`: Contextos globales (AuthContext) para manejar el estado de autenticación.
*   `/data`: **Capa de Datos Centralizada** (`producers.ts`). Única fuente de verdad actual.
*   `/features`: Módulos de la aplicación agrupados por contexto.
    *   `/about`: Página "Nosotros".
    *   `/auth`: Login y Registro.
    *   `/certifications`: Catálogo de certificaciones.
    *   `/dashboard`: Vistas protegidas (Dashboard, Orders).
    *   `/directory`: Vistas públicas (Producers, ProducerDetail).
    *   `/landing`: Página principal del sitio.
    *   `/support`: Página de soporte técnico.

*Nota:* En v2.0 se eliminó la antigua carpeta estática `/pages/` por contener código muerto.

---

## 🔄 3. Actualización de Datos (Mock Backend)

Actualmente la aplicación no cuenta con una conexión a Base de Datos en la nube. Los datos de los productores son servidos localmente.

### A. Para agregar o modificar agricultores verificados:
1.  Abre el archivo `src/data/producers.ts`.
2.  Busca la constante `producersData`.
3.  Modifica los objetos JSON existentes o agrega uno nuevo asegurándote de seguir la interfaz `Producer`.
```javascript
{
    id: 7,
    name: "Nuevo Productor",
    location: "Morelia, Michoacán",
    image: "URL de la imagen",
    statusText: "Disponible",
    statusColor: "text-green-700 bg-white border-green-100",
    indicatorColor: "bg-green-500",
    product: "Limón Persa",
    category: "limon", // Usado en los filtros
    tags: ["SENASICA", "Exportación"],
    years: "2 Años",
    rating: 4.8,
    availabilityText: "Alta",
    availabilityColor: "text-green-600",
    availabilityValue: "immediate", // 'immediate', 'upcoming', 'year_round', 'none'
    certifications: ["SENASICA"],
}
```
4.  La plataforma global (Landing, Directorio, Landing, etc.) se actualizará automáticamente con esta información sin necesidad de tocar componentes individuales.

## 🔑 4. Gestión de Variables de Entorno (Chatbot / Gemini)
El Chatbot funciona con la Inteligencia Artificial Google Gemini (`@google/genai`).

1.  La Key debe estar en el archivo raíz `.env`.
2.  Dado que Vite compila el proyecto completo, la variable debe llevar el prefijo `VITE_`.
```properties
VITE_GEMINI_API_KEY="AIzaSy...Tu_Clave_Aqui"
```
3.  Si la variable no se proporciona, el Chatbot iniciará grácilmente un **Modo Offline** utilizando respuestas predeterminadas en `Chatbot.tsx`. Esto evita una caída completa (Crash) del sistema.

---

## 🚀 5. Preparación para Fase 3 (Desarrollo Backend Real)

Para transición a producción con PostgreSQL / MongoDB / Firebase:

1.  **Directorio Data:** Sustituir la lógica de importación en `producers.ts` por hooks `useEffect` o React Query `useQuery` haciendo una petición `fetch('API_URL/producers')`.
2.  **Rutas Privadas:** Reemplazar `AuthContext` actual (que usa LocalStorage) por JWT Tokens, Firebase Auth o NextAuth. Las cookies se vuelven imperativas.
3.  **Gestor de Cultivos:** En vez de hacer push a `localStorage`, hacer peticiones REST o GraphQL mutables. En `Dashboard.tsx`, limpiar los arreglos hardcodeados.
4.  **Imágenes:** Cambiar los strings en crudo de Google por URLs desde un Bucket en S3 o Cloudinary.
5.  **Órdenes y Leads:** Migrar `Orders.tsx` de sus arrays estáticos a Endpoints transaccionales.

## 🔧 6. Comandos Recurrentes de Desarrollo

**Instalar dependencias necesarias tras clonar repo:**
```bash
npm install
```
**Servidor Local (Desarrollo con Hot-Reload):**
```bash
npm run dev
```
**Construir versión de Producción (dist):**
```bash
npm run build
```
Opcional, pre-visualizar cómo queda la build final de producción:
```bash
npm run preview
```
---
*Fin del Documento Técnico.*
