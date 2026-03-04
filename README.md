<p align="center">
  <img src="https://img.shields.io/badge/Estado-En%20Desarrollo%20Activo-green?style=for-the-badge" alt="Estado: En Desarrollo Activo"/>
  <img src="https://img.shields.io/badge/Versión-2.0.1-blue?style=for-the-badge" alt="Versión 2.0.1"/>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19"/>
  <img src="https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6"/>
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.8"/>
  <img src="https://img.shields.io/badge/Gemini_AI-Integrado-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI"/>
  <img src="https://img.shields.io/badge/Proyecto-Competencia%20Gubernamental-red?style=for-the-badge" alt="Competencia"/>
</p>

<h1 align="center">🌿 PAM — Productores Agroalimentarios de Michoacán</h1>

<p align="center">
  <strong>Plataforma digital que conecta productores agrícolas verificados de Michoacán directamente con compradores reales.<br/>Sin intermediarios · Sin comisiones · Trato justo y directo</strong>
</p>

> **Aviso Legal:** Este proyecto fue desarrollado con fines de participación en convocatoria de competencia gubernamental. En caso de resultar ganador, la propiedad intelectual y todos los derechos se transferirán al Gobierno de México conforme a las bases de la convocatoria. Desarrollado con recursos propios y dedicación al campo michoacano.

---

## 📋 Tabla de Contenidos

1. [Descripción Ejecutiva](#-descripción-ejecutiva)
2. [Arquitectura del Sistema](#-arquitectura-del-sistema)
3. [Estructura del Proyecto](#-estructura-del-proyecto)
4. [Stack Tecnológico](#-stack-tecnológico)
5. [Funcionalidades Detalladas](#-funcionalidades-detalladas)
6. [Flujo de Datos y Estado](#-flujo-de-datos-y-estado)
7. [Mapa de Rutas](#-mapa-de-rutas)
8. [Protocolos de Seguridad](#-protocolos-de-seguridad)
9. [Guía de Instalación](#-guía-de-instalación)
10. [Variables de Entorno](#-variables-de-entorno)
11. [Mejoras Implementadas (v2.0.1)](#-mejoras-implementadas-v201)
12. [Hoja de Ruta](#-hoja-de-ruta)
13. [Contribución y Licencia](#-contribución-y-licencia)

---

## 🎯 Descripción

### El Problema

El sector agrícola de Michoacán —líder mundial en producción de aguacate, berries, limón y mango— enfrenta una crisis estructural de intermediación. Los productores pierden hasta el **60% del valor** de su cosecha frente a intermediarios ("coyotes"), carecen de herramientas digitales de gestión agrícola, y los compradores no disponen de mecanismos para verificar la legitimidad y certificaciones de sus proveedores.

### La Solución

PAM actúa como un **directorio verificado de confianza** que:

- ✅ Conecta **productores certificados** directamente con **compradores reales** (supermercados, fraccionistas, exportadoras)
- ✅ Proporciona un **Dashboard de gestión agrícola** con persistencia local de datos
- ✅ Integra un **chatbot de IA** (Google Gemini) especializado en agronomía michoacana con streaming
- ✅ **No procesa pagos** — el modelo de negocio prioriza la conexión y confianza

### Propuesta de Valor

| Para el **Productor** | Para el **Comprador** |
|---|---|
| Panel CRUD de cultivos con persistencia | Acceso a productores verificados |
| Perfil público con capacidad productiva | Filtros por cultivo, certificación y disponibilidad |
| Gestión de leads/interesados | Trato directo sin comisiones |
| Asistente IA agronómico en tiempo real | Información educativa de certificaciones |

---

## 🏗 Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENTE (Browser)                   │
│                                                         │
│  ┌────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │  Vite 6    │  │   React 19 SPA  │  │ TailwindCSS │  │
│  │ (dev/build)│  │   TypeScript    │  │    (CDN)    │  │
│  └─────┬──────┘  └────────┬────────┘  └─────────────┘  │
│        │                  │                             │
│        │   ┌──────────────┴───────────────┐             │
│        │   │     React Router v7          │             │
│        │   │     HashRouter + Routes      │             │
│        │   └──────────────┬───────────────┘             │
│        │                  │                             │
│  ┌─────┴──────────────────┴──────────────────────┐     │
│  │         AuthContext (React Context API)         │     │
│  │  isLoggedIn · userRole · login() · logout()     │     │
│  │  PrivateRoute (protege /dashboard, /orders)     │     │
│  └──────────────────────────────────────────────── ┘    │
│                          │                              │
│  ┌──────────────────────────────────────────────────┐   │
│  │              MÓDULOS DE FEATURES                  │   │
│  │  landing · auth · dashboard · directory          │   │
│  │  certifications · about · support                │   │
│  └──────────────────────────────────────────────────┘   │
│                          │                              │
│  ┌─────────────┐  ┌──────┴──────┐  ┌────────────────┐  │
│  │  localStorage│  │  useState   │  │  Chatbot (FAB) │  │
│  │  (Crops +   │  │  (UI state) │  │  Google Gemini │─┼─────▶ API
│  │   Auth)     │  │             │  │  Streaming     │  │
│  └─────────────┘  └─────────────┘  └────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

> **Estado actual v2.0.1:** SPA con datos simulados (mock data centralizado en `/data/`). Autenticación con `localStorage`. La única integración externa activa es el **Chatbot con Google Gemini API**.

---

## 📂 Estructura del Proyecto

```
PAM-v2.0/
├── index.html              # Punto de entrada HTML. TailwindCSS (CDN), Fonts,
│                           # Material Symbols, Vite entry point script.
├── index.tsx               # Bootstrap React — monta <App /> en #root con StrictMode
├── App.tsx                 # Router raíz. AuthProvider envuelve toda la app.
│                           # Routes con PrivateRoute en /dashboard y /orders.
├── package.json            # Dependencias y scripts (dev/build/preview)
├── vite.config.ts          # Puerto 3000, inyección GEMINI_API_KEY, alias @/
├── tsconfig.json           # ES2022, JSX react-jsx, path aliases
│
├── context/                # 🔐 ESTADO GLOBAL
│   └── AuthContext.tsx     #    AuthProvider + useAuth hook. Gestiona sesión
│                           #    con localStorage (isLoggedIn, userRole, userName).
│
├── components/             # 🧩 COMPONENTES COMPARTIDOS
│   ├── Chatbot.tsx         #    Chatbot flotante con Google Gemini (streaming).
│   │                       #    System prompt especializado en agronomía michoacana.
│   ├── Navbar.tsx          #    Barra navegación sticky (responsiva, hamburguesa).
│   ├── Sidebar.tsx         #    Panel lateral del productor. Logout real con useAuth.
│   └── PrivateRoute.tsx    #    HOC protector de rutas. Redirige a /login si no auth.
│
├── data/                   # 📦 DATOS CENTRALIZADOS (Fuente Única de Verdad)
│   └── producers.ts        #    Mock data de productores + utilidad normalizeText.
│                           #    Preparado para reemplazar con fetch('/api/producers').
│
├── features/               # 📦 MÓDULOS POR DOMINIO
│   ├── auth/
│   │   ├── Login.tsx       #    Auth real: useAuth, validación teléfono, loading,
│   │   │                   #    redirect-back-to-intended-route, error messages.
│   │   └── Register.tsx    #    Registro con selección de rol (Productor/Comprador).
│   │
│   ├── dashboard/
│   │   ├── Dashboard.tsx   #    CRUD cultivos con localStorage persistence.
│   │   │                   #    Modales: Agregar/Editar/Detalle. Búsqueda en tiempo real.
│   │   ├── Orders.tsx      #    Gestión de leads/interesados con tabs y disclaimers.
│   │   └── Sidebar.tsx     #    Re-exportación de components/Sidebar.tsx (sin duplicado).
│   │
│   ├── landing/Landing.tsx #    Hero + búsqueda normalizada + filtros chips + grid.
│   ├── directory/
│   │   ├── Producers.tsx   #    Directorio con filtros avanzados (cultivo/cert/disponib.)
│   │   └── ProducerDetail  #    Perfil productor: hero, bio, galería, capacidad,
│   │       .tsx            #    certificaciones, sticky CTA WhatsApp.
│   ├── certifications/
│   │   └── Certifications  #    6 certificaciones con modal detalle y enlace oficial.
│   │       .tsx
│   ├── about/About.tsx     #    Misión, sistema 3 niveles, valores, estadísticas.
│   └── support/Support.tsx #    Centro ayuda: teléfono, WhatsApp, FAQ.
│
└── pages/                  # (Directorio heredado — las páginas originales están
    └── *.tsx               #  aquí como copia. El enrutamiento usa features/)
```

---

## 🔧 Stack Tecnológico

| Capa | Tecnología | Versión | Justificación |
|------|-----------|---------|---------------|
| **Framework** | React | `19.2.3` | Concurrent features, hooks avanzados, StrictMode para calidad |
| **Lenguaje** | TypeScript | `~5.8.2` | Interfaces tipadas (Crop, Producer, AuthState) previenen errores en producción |
| **Bundler** | Vite | `^6.2.0` | HMR <100ms, importación de `.tsx` directa, inyección de env vars en build-time |
| **Routing** | React Router DOM | `^7.13.0` | HashRouter para despliegue estático, PrivateRoute para rutas protegidas |
| **Estado Global** | React Context API | nativo | AuthContext sin dependencias externas; extensible a Zustand para escala |
| **Persistencia** | localStorage | nativo | Persiste sesión de usuario y cultivos del dashboard sin servidor |
| **Estilos** | TailwindCSS | CDN `3.x` | Prototipado rápido; paleta PAM extendida en `index.html` |
| **Tipografía** | Google Fonts | - | Inter (display) + Noto Sans (body) — legibilidad óptima |
| **Iconografía** | Material Symbols | Variable | ~50 íconos con variantes de relleno y peso |
| **IA / Chatbot** | Google Gemini | `@google/genai ^1.38.0` | Streaming real, model `gemini-3-pro-preview`, system prompt agronómico |

---

## ⚡ Funcionalidades Detalladas

### 🏠 Landing Page
- Búsqueda normalizada (sin acentos, case-insensitive) por nombre, producto, municipio
- Filtros por chips: Todos · Frutas · Verduras · Orgánico · Certificado SENASICA
- Grid de productores con estado animado (indicador pulsante para "Disponible")
- Scroll automático a resultados al filtrar

### 🔐 Autenticación
- **Login:** Validación de teléfono (+52, 10 dígitos), loading spinner, redirect-back-to-intended-route
- **Register:** Selección visual de rol (Productor/Comprador), campos condicionales por rol
- **AuthContext:** Persistencia de sesión en `localStorage`; logout limpia estado y storage
- **PrivateRoute:** Protección de `/dashboard` y `/orders`; redirige a `/login` con estado de retorno

### 📊 Dashboard de Cultivos
- **CRUD completo** en modales animados (crear, leer, actualizar, eliminar con confirmación)
- **Persistencia localStorage:** Datos sobreviven al refresh de página
- **Tarjetas ricas:** Indicadores visuales de estado (Listo ✓, Creciendo 💧, Atención ⚠️)
- Barra de progreso de riego, alertas de plagas, búsqueda en tiempo real
- Modal de detalles con proyección de mercado según tonelaje

### 📖 Directorio de Productores
- Filtro simultaneo por: texto libre + cultivo + certificación + disponibilidad
- Tags rápidos (Orgánico Certificado, Limón, Disponible Ahora)
- Estado vacío amigable con botón "Limpiar filtros"

### 👤 Perfil del Productor
- Hero cinematic con badge "Identidad Verificada"
- Galería con efecto zoom al hover, bio narrativa
- Capacidad productiva con barra de progreso, temporadas
- Certificaciones con fechas de vigencia
- Footer sticky: CTA "Negociar por WhatsApp" + nota de seguridad

### 🤖 Chatbot IA (Gemini)
- Disponible globalmente en todas las rutas
- Streaming de respuestas (efecto escritura progresiva)
- Contexto: SENASICA, GlobalG.A.P, temporadas de cosecha Michoacán, buenas prácticas
- Historial de sesión en memoria

---

## 🔄 Flujo de Datos y Estado

```
Usuario → Input → useState (local) → useMemo (filtros) → Render UI
                                  ↓
                      localStorage (persistencia)
                          pam_auth · pam_crops

Chatbot → @google/genai → sendMessageStream() → chunks → useState → Render
```

**Capas de estado:**
1. **Local UI:** `useState` por componente (inputs, modales, filtros)
2. **Persistencia:** `localStorage` para auth (`pam_auth`) y cultivos (`pam_crops`)
3. **Global:** `AuthContext` distribuye estado de sesión a toda la app
4. **Externo:** Google Gemini API (solo el chatbot)

---

## 🗺 Mapa de Rutas

| Ruta | Componente | Protegida | Descripción |
|------|-----------|-----------|-------------|
| `/` | `Landing` | No | Directorio destacado con búsqueda |
| `/login` | `Login` | No | Auth por teléfono con validación |
| `/register` | `Register` | No | Registro con selección de rol |
| `/producers` | `Producers` | No | Directorio completo + filtros avanzados |
| `/producer/:id` | `ProducerDetail` | No | Perfil público del productor |
| `/certifications` | `Certifications` | No | Catálogo educativo de 6 certificaciones |
| `/about` | `About` | No | Misión, valores y sistema de verificación |
| `/support` | `Support` | No | Centro de ayuda multicanel |
| `/dashboard` | `Dashboard` | ✅ Sí | Panel CRUD de cultivos |
| `/orders` | `Orders` | ✅ Sí | Gestión de leads/interesados |

---

## 🛡 Protocolos de Seguridad

| Mecanismo | Implementación |
|-----------|---------------|
| **Rutas protegidas** | `PrivateRoute` redirige a `/login` con estado de retorno; evita acceso directo por URL |
| **API Key en build-time** | `GEMINI_API_KEY` solo en `.env` local (en `.gitignore`); inyectada por Vite `define` |
| **Validación de inputs** | Teléfono validado (regex 10 dígitos) antes de autenticar |
| **Sin XSS** | React escapa todo JSX; no se usa `dangerouslySetInnerHTML` en ningún componente |
| **Links externos seguros** | Todos los `target="_blank"` incluyen `rel="noopener noreferrer"` |
| **No procesa pagos** | Disclaimers prominentes en Orders y ProducerDetail |
| **Verificación 3 niveles** | Digital (INE/geoloc) → Comunidad (social) → Oficial PAM (presencial) |

---

## 🚀 Guía de Instalación

### Prerrequisitos

| Software | Versión Mínima | Instalar en Arch/Garuda |
|----------|---------------|------------------------|
| **Node.js** | `18.x+` | `sudo pacman -S nodejs` |
| **npm** | `9.x+` | Incluido con Node.js |

### Instalación completa

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/PAM-v2.0.git
cd PAM-v2.0

# 2. Instalar dependencias
npm install

# 3. Configurar API Key de Gemini
echo "GEMINI_API_KEY=tu_api_key_aqui" > .env

# 4. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:3000
```

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (HMR activado, puerto 3000) |
| `npm run build` | Bundle de producción → `dist/` |
| `npm run preview` | Previsualizar el build de producción |

---

## 🔑 Variables de Entorno

Archivo **`.env`** en la raíz del proyecto:

```env
# Requerida para el chatbot de IA
# Obtener en: https://aistudio.google.com/app/apikey
GEMINI_API_KEY=AIzaSy...tu_key_aqui
```

> Si no se configura, la app funciona completamente excepto el chatbot.

---

## ✨ Mejoras Implementadas (v2.0.1)

### 🔴 Correcciones Críticas

| # | Mejora | Archivo(s) |
|---|--------|-----------|
| 1 | **Página en blanco corregida** — Eliminado conflicto `importmap` CDN vs Vite; añadido `<script type="module" src="/index.tsx">` | `index.html` |
| 2 | **Autenticación real** — `AuthContext` con `localStorage`, `PrivateRoute` protege `/dashboard` y `/orders` | `context/AuthContext.tsx`, `components/PrivateRoute.tsx`, `App.tsx` |
| 3 | **Validación en Login** — Valida teléfono (10 dígitos), loading spinner, error messages, redirect-back | `features/auth/Login.tsx` |
| 4 | **Persistencia en Dashboard** — Cultivos sobreviven al refresh vía `localStorage` | `features/dashboard/Dashboard.tsx` |
| 5 | **Logout funcional** — Sidebar limpia sesión y redirige al inicio | `components/Sidebar.tsx` |

### 🟡 Mejoras de Arquitectura

| # | Mejora | Archivo(s) |
|---|--------|-----------|
| 6 | **Eliminada duplicación de Sidebar** — `features/dashboard/Sidebar.tsx` ahora re-exporta desde `components/` | `features/dashboard/Sidebar.tsx` |
| 7 | **Datos centralizados** — Mock data de productores extraído a fuente única | `data/producers.ts` |

---

## 🗓 Hoja de Ruta

### Próximos pasos (producción)

| Prioridad | Tarea | Impacto |
|-----------|-------|---------|
| 🔴 Alta | Integrar backend REST (Node.js/Supabase) para persistencia real | Escalabilidad |
| 🔴 Alta | OTP via SMS real (Twilio/MessageBird) para autenticación telefónica | Seguridad |
| 🟡 Media | Aviso de privacidad conforme LFPDPPP | Cumplimiento legal |
| 🟡 Media | Skeleton screens en transiciones de página | Performance percibida |
| 🟡 Media | Internacionalización i18n (Español/Inglés) para mercado exportador | Alcance |
| 🟢 Baja | Atributos `aria-label` y navegación por teclado (WCAG 2.1) | Accesibilidad |
| 🟢 Baja | Convertir imágenes a WebP con lazy loading | Performance |

---

## 🤝 Contribución y Licencia

**Desarrollado por:** Productores Agroalimentarios de Michoacán (PAM)

**Propósito:** Competencia de innovación tecnológica para el sector agroalimentario de Michoacán. En caso de resultar ganador, la propiedad intelectual se transferirá al Gobierno de México.

### Convenciones de Código

- Componentes: `PascalCase.tsx`; funciones y variables: `camelCase`
- Estado global: `AuthContext`; estado local: `useState` + `useMemo`
- Mock data: en `data/` con interfaces TypeScript exportadas
- Nuevos módulos: seguir estructura `features/[modulo]/[Componente].tsx`

---

<p align="center">
  <strong>🌽🫐🥑🍋 Hecho con ❤️ para el campo de Michoacán 🍋🥑🫐🌽</strong><br/>
  <em>© 2024 PAM — Productores Agroalimentarios de Michoacán. Todos los derechos reservados.</em>
</p>
