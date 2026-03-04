# ANEXO 2
## XXXII Concurso Estatal de Creatividad e Innovación Tecnológica
### CECyTEM Michoacán — Ciclo Escolar 2025–2026

---

---

## A. CARÁTULA

| Campo | Datos |
|---|---|
| **Título del proyecto** | PAM — Productores Agroalimentarios de Michoacán (v2.0.1) |
| **Categoría** | Prototipo Informático |
| **Plantel** | Centro de Estudios Científicos y Tecnológicos del Estado de Michoacán (CECyTEM) |
| **Carrera / Especialidad** | Soporte y Mantenimiento de Equipo de Cómputo |
| **Semestre** | 3.er semestre |
| **Participante 1** | Jerome Santiago Sarabia Cancino |
| **Participante 2** | Cristopher William Sixtos Lucio |
| **Asesor responsable** | Prof. Jorge Roa Ramos |
| **Fecha de presentación** | Marzo de 2026 |

---

## B. RESUMEN

El campo michoacano enfrenta una problemática estructural de larga data: el **intermediarismo comercial** —conocido popularmente como "coyotaje"— que puede apropiarse de hasta el **60 % del valor real de una cosecha**, dejando al productor agrícola con una fracción mínima del precio de mercado. Esta situación perpetúa ciclos de pobreza rural y desincentiva la producción agroalimentaria sostenible en el estado.

**PAM (Productores Agroalimentarios de Michoacán) v2.0.1** es una plataforma web de tipo *directorio digital verificado*, desarrollada como una *Single Page Application* (SPA) puramente del lado del cliente. Su propósito es **conectar directamente a productores agrícolas verificados con compradores reales**, eliminando la cadena de intermediarios y sus comisiones.

La plataforma ofrece tres pilares funcionales:
1. **Directorio público** de productores con sistema de confianza de 3 niveles (bronce, plata, oro).
2. **Panel de gestión (Dashboard)** con operaciones CRUD completas para que el productor administre su oferta de cultivos.
3. **Asistente agronómico de IA** impulsado por el modelo *gemini-2.0-flash* de Google, con capacidad de funcionamiento *offline* mediante respuestas de respaldo.

La plataforma no procesa pagos ni cobra comisiones; su modelo de valor radica en la **generación de contactos seguros y verificados**. Está construida con tecnologías de código abierto (React 19, TypeScript, Vite) y desplegada de forma gratuita en Netlify, lo que demuestra que es posible desarrollar soluciones digitales de alto impacto social con una inversión económica mínima.

---

## C. OBJETIVO

### Objetivo general

Desarrollar e implementar una plataforma web accesible y gratuita que **conecte directamente a productores agroalimentarios certificados del estado de Michoacán con compradores reales**, eliminando intermediarios comerciales y dotando a los productores de herramientas digitales de gestión e inteligencia de mercado mediante inteligencia artificial.

### Objetivos específicos

1. Crear un directorio digital con perfiles verificados de productores michoacanos, accesible desde cualquier navegador web moderno sin necesidad de instalar aplicaciones adicionales.
2. Implementar un sistema de niveles de confianza (bronce, plata, oro) que permita a los compradores identificar a los productores más confiables de forma visual e inmediata.
3. Desarrollar un panel de administración (*Dashboard*) que permita a los productores registrar, actualizar y eliminar sus ofertas de cultivos de forma autónoma.
4. Integrar un asistente agronómico basado en inteligencia artificial generativa (Google Gemini) que proporcione orientación técnica básica a los productores, incluyendo un modo *offline* para zonas rurales sin acceso continuo a internet.
5. Diseñar una interfaz *responsive* con elementos táctiles de tamaño adecuado (mínimo 72 px) que sea usable desde dispositivos móviles de gama media, considerando las condiciones reales de los usuarios en el entorno rural.

---

## D. PLANTEAMIENTO DEL PROBLEMA

### Contexto

El sector agroalimentario representa uno de los pilares económicos más importantes del estado de Michoacán; la entidad es líder nacional en la producción de aguacate, zarzamora, fresa y otros productos de exportación. Sin embargo, esta riqueza productiva raramente se traduce en bienestar económico para el pequeño y mediano productor.

### El problema del intermediarismo

La comercialización agrícola en regiones rurales de Michoacán depende históricamente de una red de intermediarios que actúan como enlace entre el productor y el mercado final. Estos intermediarios —coloquialmente llamados "coyotes"— fijan precios de compra artificialmente bajos aprovechando la falta de información de mercado y el aislamiento geográfico del productor.

Como consecuencia, el productor recibe en promedio entre el 30 % y el 40 % del precio final al que su producto es vendido, lo que equivale a que el intermediario retiene hasta el **60 % del valor generado por la cosecha** sin haber participado en su producción. Esta dinámica genera:

- **Descapitalización crónica** del productor, que no acumula los recursos suficientes para invertir en mejora tecnológica ni en la siguiente temporada.
- **Dependencia** del productor hacia el intermediario, quien muchas veces también funge como prestamista informal con tasas elevadas.
- **Pérdida de competitividad** del sector primario, ya que el productor no tiene incentivos para optimizar su producción si la mayor parte de la ganancia fluye hacia otros eslabones de la cadena.

### La brecha digital como agravante

Una fracción significativa de los productores michoacanos cuenta con teléfono celular básico o *smartphone* de gama media, lo que representa una oportunidad tecnológica. Sin embargo, no existen plataformas digitales diseñadas específicamente para su contexto: la mayoría de los directorios comerciales en línea están diseñados para empresas urbanas formales, requieren conocimientos técnicos avanzados o simplemente no están adaptados al idioma cotidiano del agricultor.

### Vacío a resolver

Existe una brecha entre la conectividad digital disponible en el campo michoacano y la ausencia de herramientas diseñadas para que el productor la aproveche. **PAM v2.0.1 ocupa exactamente ese vacío**: una plataforma diseñada desde la perspectiva del productor rural, con inicio de sesión simplificado (solo número de teléfono, sin contraseñas complejas), interfaz táctil optimizada y asistencia de IA adaptada al contexto agronómico regional.

---

## E. DESCRIPCIÓN Y APLICACIÓN

### Descripción general del sistema

PAM v2.0.1 es una *Single Page Application* (SPA) de arquitectura puramente frontend, es decir, **toda la lógica de presentación y navegación se ejecuta en el navegador del usuario**, sin requerir peticiones de servidor para cambiar de vista. Esto reduce la latencia y hace que la experiencia sea fluida incluso con conexiones lentas.

### Stack tecnológico

| Capa | Tecnología | Versión | Propósito |
|---|---|---|---|
| Framework de UI | React | 19.x | Renderizado reactivo de componentes |
| Lenguaje | TypeScript | 5.x (*strict mode*) | Tipado estático y reducción de errores en tiempo de compilación |
| Herramienta de construcción | Vite | 6.x | Servidor de desarrollo rápido y empaquetado eficiente |
| Enrutamiento | React Router DOM | 7.x | Navegación SPA con `HashRouter` (compatible con Netlify sin configuración adicional) |
| Estilos | Tailwind CSS | 3.x | Sistema de diseño utilitario y *responsive* |
| Inteligencia Artificial | Google Gemini API (`gemini-2.0-flash`) | — | Asistente agronómico conversacional |
| Persistencia | `localStorage` del navegador | — | Almacenamiento de sesión y datos de cultivos |
| Despliegue | Netlify (Free Tier) | — | Alojamiento en la nube sin costo |

### Arquitectura del sistema

El proyecto implementa una **arquitectura modular orientada a dominios de negocio** (*Screaming Architecture*), en la que la estructura de carpetas refleja directamente las funcionalidades del negocio y no la naturaleza técnica de los archivos:

```
src/
├── context/          → Estado global (AuthContext, ProducersContext)
├── components/       → Componentes reutilizables (Navbar, Sidebar, Footer)
├── features/         → Módulos de negocio
│   ├── auth/         → Registro e inicio de sesión
│   ├── producers/    → Directorio público y detalle de productor
│   ├── dashboard/    → Panel de gestión de cultivos (CRUD)
│   ├── crops/        → Catálogo de cultivos del usuario
│   ├── chatbot/      → Asistente agronómico de IA
│   ├── profile/      → Perfil y configuración del usuario
│   └── home/         → Página de bienvenida
└── App.tsx           → Enrutamiento central (10 rutas definidas)
```

### Módulos funcionales principales

**1. Directorio de productores (público)**
- Búsqueda normalizada sin acentos (insensible a tildes y mayúsculas).
- Filtros por tipo de cultivo, estado de disponibilidad y nivel de confianza.
- Sistema de disponibilidad con 4 estados: *Inmediato*, *Todo el año*, *Próximo* y *Agotado*.
- Paginación de resultados.

**2. Perfil de productor (detalle)**
- Vista completa del productor con fotografía, nivel de verificación y lista de cultivos.
- Información de contacto seguro.

**3. Panel de gestión — Dashboard (área privada)**
- Operaciones CRUD completas: crear, leer, actualizar y eliminar cultivos.
- Validación de formularios con expresiones regulares (ej. formato de número telefónico).
- Estadísticas básicas del perfil del productor.

**4. Asistente agronómico de IA**
- Integración con la API de Google Gemini (`gemini-2.0-flash`).
- Respuestas contextualizadas al sector agrícola michoacano.
- **Modo *offline***: ante falta de conectividad o error de API, el sistema devuelve respuestas de respaldo predefinidas para las consultas más frecuentes, garantizando utilidad en zonas rurales con internet intermitente.

**5. Sistema de autenticación simplificado**
- Registro e inicio de sesión únicamente con número de teléfono, eliminando la barrera de las contraseñas complejas.
- Rutas protegidas (*PrivateRoute*) que impiden el acceso al Dashboard sin sesión activa.

### Requerimientos de uso

| Requisito | Especificación |
|---|---|
| Dispositivo | Cualquier smartphone, tableta o computadora |
| Navegador | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |
| Conexión a internet | Requerida para funciones de IA; opcional para navegación básica |
| Instalación | Ninguna (acceso directo desde el navegador) |

### Aplicación y usuarios meta

- **Compradores** (restaurantes, tiendas, distribuidores): búsqueda de productos frescos con contacto directo al productor verificado.
- **Productores agrícolas**: registro de oferta de cultivos, gestión de disponibilidad y acceso a orientación técnica de IA.

---

## F. PROGRAMA DE TRABAJO

> **Nota metodológica:** El siguiente cronograma es de carácter retrospectivo y representa de forma genérica las fases de desarrollo del prototipo durante el ciclo escolar. Las semanas son representativas del ciclo de vida completo del proyecto, desde su concepción hasta el despliegue final.

### Cronograma de actividades — Ciclo de desarrollo PAM v2.0

| Semana | Fase | Actividades principales | Entregable |
|---|---|---|---|
| **1–2** | Análisis y Arquitectura | Definición del problema, investigación de tecnologías, diseño de la arquitectura modular, configuración del entorno de desarrollo (Node.js, Vite, TypeScript) | Estructura base del proyecto y dependencias instaladas |
| **3–4** | Módulos públicos | Desarrollo de la página de inicio, directorio de productores, buscador con normalización, filtros y vista de detalle de productor | Páginas públicas funcionales y navegables |
| **5–6** | Dashboard y autenticación | Implementación del sistema de registro/inicio de sesión, desarrollo del panel de gestión CRUD, sistema de rutas protegidas y validaciones de formularios | Área privada funcional con persistencia en `localStorage` |
| **7** | Integración de IA | Integración de la API de Google Gemini, desarrollo del asistente agronómico, implementación del modo *offline* con respuestas de respaldo | Chatbot operativo con fallback funcional |
| **8** | Pruebas, ajustes y despliegue | Pruebas de responsividad en múltiples dispositivos, corrección de errores, optimización de rendimiento, configuración de variables de entorno y despliegue en Netlify | Aplicación desplegada y accesible públicamente |

---

## G. PROCESO DE ELABORACIÓN

### 1. Metodología de desarrollo

El proyecto se desarrolló siguiendo un enfoque de **desarrollo ágil iterativo**: en lugar de planificar todo el sistema antes de comenzar a codificar, se trabajó por fases funcionales, integrando y probando cada módulo antes de avanzar al siguiente.

### 2. Configuración del entorno

Se utilizó **Node.js (v18 LTS)** como entorno de ejecución de JavaScript del lado del desarrollador y **npm** como gestor de paquetes. El proyecto fue inicializado con la plantilla oficial de **Vite + React + TypeScript**, que provee un entorno de desarrollo optimizado con recarga automática en caliente (*Hot Module Replacement*).

### 3. Diseño de la arquitectura modular

Se adoptó el patrón **Screaming Architecture**: la estructura de carpetas "grita" lo que hace la aplicación. Esto facilita la incorporación de nuevos colaboradores, el mantenimiento a largo plazo y la localización rápida de errores. Cada módulo de `features/` contiene sus propios componentes, lógica y tipos, encapsulando la complejidad de cada dominio.

### 4. Gestión del estado global

Se utilizaron los *hooks* de React (`useContext`, `useState`, `useEffect`) para manejar dos contextos globales:
- **`AuthContext`**: gestiona la sesión del usuario (datos del productor autenticado, funciones de inicio/cierre de sesión).
- **`ProducersContext`**: provee los datos del catálogo de productores a todos los componentes que los requieran.

### 5. Control de calidad y buenas prácticas

- **TypeScript *strict mode***: todas las variables, funciones y props tienen tipos explícitos, lo que detecta errores antes de ejecutar el código.
- **React StrictMode**: activa verificaciones adicionales en desarrollo para detectar efectos secundarios no intencionados.
- **Validaciones con expresiones regulares**: los formularios validan el formato de datos críticos (ej. número de teléfono de 10 dígitos) antes de permitir el registro.
- **Linting**: se configuró ESLint para mantener estándares de código consistentes en todo el proyecto.

### 6. Despliegue

La aplicación se compiló con el comando `npm run build`, que genera una carpeta `dist/` con archivos estáticos optimizados (*minificados* y *tree-shaken*). Esta carpeta fue conectada al servicio de Netlify mediante integración continua con el repositorio de GitHub, lo que permite actualizaciones automáticas ante cambios en el código.

---

## H. RECURSOS MATERIALES

### Recursos humanos

| Rol | Nombre |
|---|---|
| Desarrollador frontend / Arquitecto de software | Jerome Santiago Sarabia Cancino |
| Desarrollador frontend / QA y pruebas | Cristopher William Sixtos Lucio |
| Asesor técnico-académico | Prof. Jorge Roa Ramos |

### Recursos de software (código abierto y gratuitos)

| Recurso | Descripción | Costo |
|---|---|---|
| Node.js 18 LTS | Entorno de ejecución JavaScript | $0.00 (MIT License) |
| npm 9+ | Gestor de paquetes | $0.00 (incluido con Node.js) |
| React 19 + TypeScript + Vite | Framework de UI, lenguaje tipado y herramienta de construcción | $0.00 (MIT License) |
| Tailwind CSS 3 | Framework de estilos utilitario | $0.00 (MIT License) |
| React Router DOM 7 | Biblioteca de enrutamiento SPA | $0.00 (MIT License) |
| Google Gemini API (Free Tier) | Servicio de IA generativa | $0.00 (nivel gratuito de Google AI Studio) |
| Netlify (Free Tier) | Plataforma de despliegue y alojamiento | $0.00 (plan gratuito) |
| Visual Studio Code | Editor de código fuente | $0.00 (MIT License) |
| Git + GitHub | Control de versiones y repositorio remoto | $0.00 (plan gratuito) |

### Recursos de hardware

Los desarrolladores utilizaron sus propios equipos de cómputo personales para la totalidad del desarrollo. El proyecto no requirió la adquisición de hardware especializado, servidores físicos ni infraestructura de red dedicada.

| Equipo | Uso |
|---|---|
| Computadora personal (laptop/PC con acceso a internet) | Codificación, pruebas y despliegue |
| Smartphone (para pruebas de responsividad) | Verificación de la interfaz en dispositivos móviles |

---

## I. COSTOS

### Análisis del modelo de costos del proyecto

PAM v2.0.1 fue desarrollado bajo un modelo de **aprovechamiento máximo de recursos de código abierto y niveles gratuitos (*Freemium*)** de servicios en la nube. Este enfoque demuestra que la innovación tecnológica de alto impacto no requiere necesariamente de grandes inversiones económicas, sino de la correcta selección y combinación de herramientas disponibles.

### Tabla de costos directos

| Categoría | Concepto | Costo real | Justificación |
|---|---|---|---|
| **Licencias de software** | React, TypeScript, Vite, Tailwind CSS, React Router | $0.00 MXN | Proyectos de código abierto bajo licencia MIT |
| **Infraestructura de alojamiento** | Netlify Free Tier | $0.00 MXN | Plan gratuito con 100 GB de ancho de banda mensual y despliegue ilimitado de sitios estáticos |
| **Servicios de IA** | Google Gemini API (Free Tier) | $0.00 MXN | Google AI Studio otorga un cupo gratuito mensual de solicitudes amplio para prototipos académicos |
| **Dominio web** | Subdominio de Netlify (`*.netlify.app`) | $0.00 MXN | Incluido gratuitamente en el plan de Netlify |
| **Control de versiones** | GitHub Free | $0.00 MXN | Plan gratuito de GitHub para repositorios públicos y privados |
| **TOTAL DE INVERSIÓN EN LICENCIAS Y SERVICIOS** | | **$0.00 MXN** | |

### Costo estimado de horas hombre invertidas

Aunque la inversión monetaria directa fue de $0.00 MXN, el proyecto representa un significativo capital humano invertido:

| Actividad | Horas estimadas |
|---|---|
| Análisis, investigación y diseño de arquitectura | 20 horas |
| Desarrollo de módulos públicos (directorio y búsqueda) | 30 horas |
| Desarrollo del Dashboard y sistema de autenticación | 35 horas |
| Integración del asistente de IA y modo offline | 20 horas |
| Pruebas, corrección de errores y despliegue | 15 horas |
| **Total de horas de desarrollo** | **~120 horas** |

### Conclusión de costos

El proyecto demuestra un índice de **eficiencia de inversión excepcional**: una plataforma web completa con capacidades de inteligencia artificial, panel de gestión y despliegue en la nube fue producida con **cero pesos en gastos directos de software o infraestructura**, utilizando exclusivamente herramientas gratuitas de nivel profesional ampliamente utilizadas en la industria tecnológica mundial.

---

## J. VIABILIDAD DEL PROYECTO

### Viabilidad técnica

Desde el punto de vista técnico, PAM v2.0.1 es **plenamente viable** y así lo demuestra su estado actual de funcionamiento:

- Al ser una SPA estática, la aplicación puede ser alojada en cualquier CDN (*Content Delivery Network*) o servidor web básico sin configuración compleja. Netlify la sirve de forma nativa sin necesidad de un servidor backend, bases de datos ni configuraciones de red especiales.
- El uso de `HashRouter` en lugar de `BrowserRouter` garantiza compatibilidad con el sistema de enrutamiento de Netlify sin requerir archivos de redireccionamiento adicionales.
- El proceso de despliegue completo se reduce a 3 pasos: `npm install` → `npm run build` → arrastrar la carpeta `dist/` a Netlify, o conectar el repositorio para despliegue continuo automático.
- El prototipo actual es **funcional desde el primer día**: aunque utiliza datos simulados (*mock data*), la arquitectura está diseñada para que la sustitución por una API real (Firebase, Supabase, etc.) requiera mínimas modificaciones.

### Viabilidad económica

El modelo actual de **costo cero en infraestructura** es sostenible para la fase de prototipo y piloto. Para una escala mayor, las opciones de monetización son diversas:
- Certificación "verificada" de productores (suscripción o pago único).
- Publicidad contextual no intrusiva.
- Alianzas con dependencias gubernamentales (SADER, Secretaría de Desarrollo Rural de Michoacán) que financien el escalamiento.

### Viabilidad social

La plataforma fue diseñada con especial atención a las condiciones reales de sus usuarios meta:

1. **Inicio de sesión por número de teléfono**: elimina la barrera de recordar y gestionar contraseñas, adaptándose a productores con baja experiencia digital.
2. **Interfaz táctil optimizada**: botones con superficie mínima de 72 px, evitando el problema de "toque accidental" en pantallas pequeñas con dedos.
3. **Asistente de IA con modo *offline***: proporciona utilidad incluso en zonas rurales con conectividad intermitente, respondiendo consultas agronómicas frecuentes sin necesidad de internet en tiempo real.
4. **Sin aplicación que instalar**: el acceso desde el navegador elimina la fricción de descargar e instalar una app, así como los requisitos de espacio de almacenamiento en el dispositivo.
5. **Sin comisiones**: el productor retiene el 100 % del precio acordado con el comprador, ya que PAM únicamente facilita el contacto.

### Viabilidad ambiental

PAM v2.0.1 es **puramente software**. No requiere fabricación de piezas físicas, no produce residuos materiales y opera sobre la infraestructura en la nube de Netlify, que utiliza centros de datos con iniciativas de eficiencia energética y uso de energías renovables, generando una **huella de carbono mínima** en comparación con cualquier solución que requiera servidores físicos propios.

---

## K. INSTRUCTIVO DE INSTALACIÓN

> Este instructivo describe el proceso de instalación del entorno de desarrollo local. El usuario final no necesita realizar ninguna instalación; accede a la plataforma directamente desde su navegador.

### Requisitos previos del entorno de desarrollo

- Sistema operativo: Windows 10/11, macOS 12+ o Linux (distribución moderna)
- Node.js versión 18 o superior ([https://nodejs.org](https://nodejs.org))
- npm versión 9 o superior (incluido con Node.js)
- Editor de código: Visual Studio Code (recomendado)
- Cuenta en Google AI Studio para obtener la *API Key* de Gemini ([https://aistudio.google.com](https://aistudio.google.com))
- Cuenta en GitHub y cuenta en Netlify (ambas gratuitas)

### Pasos de instalación

**Paso 1: Clonar el repositorio**
```bash
git clone https://github.com/[usuario]/PAM-v2.0.git
cd PAM-v2.0
```

**Paso 2: Instalar dependencias**
```bash
npm install
```
Este comando descargará y configurará todas las bibliotecas declaradas en el archivo `package.json`, incluyendo React, TypeScript, Tailwind CSS y React Router.

**Paso 3: Configurar variables de entorno**

Crear un archivo llamado `.env` en la raíz del proyecto con el siguiente contenido:
```ini
VITE_GEMINI_API_KEY=TU_API_KEY_DE_GOOGLE_GEMINI
```
Sustituir `TU_API_KEY_DE_GOOGLE_GEMINI` por la clave obtenida en Google AI Studio. **Esta clave nunca debe compartirse ni subirse a repositorios públicos.**

**Paso 4: Ejecutar el servidor de desarrollo**
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

**Paso 5: Generar la versión de producción**
```bash
npm run build
```
Esto creará la carpeta `dist/` con los archivos estáticos optimizados listos para despliegue.

**Paso 6: Despliegue en Netlify**

Opción A — Despliegue manual:
1. Ingresar a [https://netlify.com](https://netlify.com) e iniciar sesión.
2. Arrastrar la carpeta `dist/` a la interfaz de despliegue de Netlify.
3. En la configuración del sitio, agregar la variable de entorno `VITE_GEMINI_API_KEY` con su valor correspondiente.

Opción B — Despliegue continuo:
1. Conectar el repositorio de GitHub en Netlify.
2. Configurar: *Build command* = `npm run build`, *Publish directory* = `dist`.
3. Agregar la variable de entorno en el panel de Netlify (*Site settings → Environment variables*).

---

## L. MANUAL DE USUARIO / PRÁCTICAS

### Para compradores

**1. Buscar un producto**
1. Ingresar a la página principal de PAM desde cualquier navegador.
2. Navegar a la sección **"Directorio"** o **"Productores"**.
3. Usar la barra de búsqueda para escribir el nombre del producto deseado (ej. "aguacate", "fresa", "tomate"). La búsqueda es insensible a mayúsculas y acentos.
4. Aplicar los filtros disponibles: tipo de cultivo, estado de disponibilidad (Inmediato / Todo el año / Próximo / Agotado) o nivel de confianza del productor.
5. Hacer clic en la tarjeta de un productor para ver su perfil completo.

**2. Contactar a un productor**
1. Desde el perfil del productor, localizar la información de contacto (número de teléfono).
2. Comunicarse directamente con el productor por el medio indicado.
3. PAM **no intermedia ni cobra comisión** por este contacto.

### Para productores

**1. Registrarse en la plataforma**
1. Hacer clic en **"Registrarse"** o **"Iniciar sesión"** en la barra de navegación.
2. Ingresar el número de teléfono celular de 10 dígitos.
3. Completar el formulario de registro con el nombre, municipio y tipo de producción principal.
4. Hacer clic en **"Crear cuenta"**. No es necesario recordar contraseñas.

**2. Agregar un cultivo al catálogo**
1. Iniciar sesión y navegar al **Dashboard** o **"Mis producciones"** desde el menú lateral.
2. Hacer clic en **"Agregar cultivo"** o **"Nuevo producto"**.
3. Completar los campos: nombre del cultivo, cantidad disponible, unidad de medida, precio por unidad y estado de disponibilidad.
4. Hacer clic en **"Guardar"**. El cultivo aparecerá de inmediato en el directorio público.

**3. Editar o eliminar un cultivo**
1. Desde el Dashboard, localizar el cultivo en la lista.
2. Hacer clic en el botón de **editar** (ícono de lápiz) para modificar la información, o en **eliminar** (ícono de basura) para retirarlo del catálogo.

**4. Usar el asistente agronómico de IA**
1. Navegar a la sección **"Chatbot"** o **"Asistente"** desde el menú.
2. Escribir la consulta en el campo de texto (ej. "¿Cuándo es la temporada del aguacate en Michoacán?", "¿Cómo controlar la roya en el frijol?").
3. Presionar **Enviar** o la tecla **Enter**.
4. En caso de no tener conexión a internet, el sistema responderá con información de respaldo predefinida para las preguntas más comunes.

**5. Cerrar sesión**
1. Abrir el menú lateral.
2. Seleccionar **"Cerrar sesión"**. Todos los datos de sesión son eliminados del dispositivo de forma segura.

---

## M. SEGURIDAD Y MEDIO AMBIENTE

### Seguridad informática

PAM v2.0.1 implementa **7 mecanismos de seguridad** integrados en su arquitectura:

| # | Mecanismo | Descripción |
|---|---|---|
| 1 | **Rutas protegidas (`PrivateRoute`)** | Las rutas del área privada (Dashboard, perfil) verifican la existencia de una sesión activa antes de renderizar el contenido. Un usuario no autenticado es redirigido automáticamente al inicio de sesión. |
| 2 | **API Key oculta en tiempo de compilación** | La clave de la API de Google Gemini se lee desde variables de entorno (`.env`) y nunca se incluye en el código fuente del repositorio. Vite la inyecta únicamente durante el proceso de compilación, protegiéndola de exposición pública. |
| 3 | **Validación estricta de inputs** | Todos los formularios validan el formato de los datos ingresados mediante expresiones regulares antes de procesarlos. Esto previene el ingreso de datos maliciosos o malformados. |
| 4 | **Prevención nativa de XSS** | React, por diseño, escapa automáticamente todo el contenido dinámico antes de renderizarlo en el DOM. Esto previene ataques de *Cross-Site Scripting* (XSS) sin configuración adicional. |
| 5 | **Links externos seguros** | Todos los hipervínculos que abren páginas externas incluyen los atributos `rel="noopener noreferrer"`, impidiendo que la página externa pueda manipular la ventana de la aplicación (*tabnapping*). |
| 6 | **Desconexión limpia** | La función de cierre de sesión (*logout*) elimina completamente todos los datos del usuario almacenados en `localStorage`, evitando que información sensible permanezca en el dispositivo tras terminar la sesión. |
| 7 | **Ausencia de pasarelas de pago** | La plataforma no procesa, almacena ni transmite información financiera de ningún tipo. Al no existir transacciones económicas dentro del sistema, se elimina por diseño el riesgo de fraude financiero o robo de datos bancarios. |

### Medio ambiente

PAM v2.0.1 es un proyecto de **software puro**. Su proceso de elaboración y operación tiene las siguientes características ambientales:

- **Cero residuos físicos:** No requirió la fabricación, adquisición ni destrucción de componentes electrónicos, Hardware específico ni materiales físicos más allá de los equipos de cómputo personales ya existentes del equipo de desarrollo.
- **Infraestructura en la nube de bajo impacto:** El alojamiento en Netlify utiliza centros de datos con iniciativas de eficiencia energética y compromisos con el uso de energías renovables.
- **Sin consumo de recursos naturales en operación:** La plataforma no utiliza agua, gas, productos químicos, materias primas ni ningún recurso físico en su operación continua.
- **Impacto ambiental indirecto positivo:** Al reducir la necesidad de desplazamientos físicos de productores y compradores para cerrar acuerdos comerciales, la plataforma contribuye marginalmente a la reducción de emisiones de transporte en el sector agrícola.

> *Nota:* Al ser un **Prototipo Informático**, los campos relativos a consumo de agua, gases, residuos industriales, planos mecánicos o físicos **no aplican por la naturaleza puramente de software del proyecto.**

---

## N. BIBLIOGRAFÍA CONSULTADA

### Documentación técnica oficial

1. React Team. (2024). *React 19 — Official Documentation*. Meta Platforms. Recuperado de [https://react.dev](https://react.dev)

2. Microsoft. (2024). *TypeScript Handbook*. Microsoft Corporation. Recuperado de [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)

3. Vite Team. (2024). *Vite Guide — Next Generation Frontend Tooling*. Recuperado de [https://vitejs.dev/guide/](https://vitejs.dev/guide/)

4. React Router Team. (2024). *React Router v7 Documentation*. Remix Software. Recuperado de [https://reactrouter.com](https://reactrouter.com)

5. Tailwind Labs. (2024). *Tailwind CSS Documentation*. Recuperado de [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

6. Google. (2024). *Gemini API Documentation — Google AI for Developers*. Google LLC. Recuperado de [https://ai.google.dev/docs](https://ai.google.dev/docs)

7. Netlify. (2024). *Netlify Documentation — Deploy & Host Static Sites*. Netlify Inc. Recuperado de [https://docs.netlify.com](https://docs.netlify.com)

### Referencias del sector agroalimentario

8. Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria. (2024). *SENASICA — Certificación de productores*. Secretaría de Agricultura y Desarrollo Rural (SADER). Recuperado de [https://www.senasica.gob.mx](https://www.senasica.gob.mx)

9. GlobalG.A.P. (2024). *GLOBALG.A.P. Standards — Good Agricultural Practices*. FoodPLUS GmbH. Recuperado de [https://www.globalgap.org](https://www.globalgap.org)

10. Servicio de Información Agroalimentaria y Pesquera. (2024). *SIAP — Producción agropecuaria y pesquera en México*. SADER. Recuperado de [https://www.siap.gob.mx](https://www.siap.gob.mx)

### Referencia metodológica de diseño de software

11. Hamedani, M. (2021). *Clean Architecture — Screaming Architecture*. Programming with Mosh. Recuperado de [https://programmingwithmosh.com](https://programmingwithmosh.com)

12. Martin, R. C. (2017). *Clean Architecture: A Craftsman's Guide to Software Structure and Design*. Prentice Hall. ISBN: 978-0-13-468599-1.

---

## O. ANTECEDENTES

### Historia del proyecto

**PAM** nació como un proyecto académico de prototipado inicial (**v1.0**) en el marco del programa de estudios de la carrera de *Soporte y Mantenimiento de Equipo de Cómputo* del CECyTEM. La primera versión exploró la viabilidad técnica básica del concepto: un directorio agrícola digital simple, sin autenticación ni herramientas avanzadas.

A partir de esa experiencia inicial, el equipo identificó múltiples áreas de mejora y la oportunidad real de construir una herramienta con verdadero impacto social en el sector agrícola michoacano. Esto motivó el diseño y desarrollo desde cero de **PAM v2.0**, una reescritura completa del sistema aplicando principios de arquitectura de software profesional (*Screaming Architecture*, tipado estático con TypeScript, gestión de estado con React Context) y la integración de tecnologías emergentes como la IA generativa de Google Gemini.

### Estado actual — v2.0.1

La versión actual (v2.0.1) representa la primera iteración estable y completa del rediseño. Sus características más destacadas respecto a cualquier versión anterior son:

- Arquitectura modular orientada a dominios de negocio, escalable y mantenible.
- Sistema de autenticación funcional (por número de teléfono).
- Panel de gestión CRUD completo para productores.
- Integración de asistente de IA con modo de funcionamiento *offline*.
- Despliegue continuo automático desde repositorio GitHub hacia Netlify.
- Interfaz completamente *responsive*, optimizada para dispositivos móviles de gama media.

### Recursos y financiamiento

El proyecto fue desarrollado íntegramente con **recursos propios del equipo**:
- Equipos de cómputo personales de los estudiantes.
- Tiempo y esfuerzo del equipo de desarrollo (aproximadamente **120 horas** de trabajo acumulado).
- Herramientas de software de código abierto y niveles gratuitos de servicios en la nube.

**No se recibió financiamiento externo de ningún tipo.** Este contexto refuerza la viabilidad demostrada del proyecto: fue posible construir una solución tecnológica de alto valor con recursos mínimos, lo que evidencia la solidez del diseño técnico y la capacidad del equipo para aprovechar el ecosistema de herramientas gratuitas de nivel profesional disponibles actualmente.

---

*Documento elaborado para el XXXII Concurso Estatal de Creatividad e Innovación Tecnológica — CECyTEM Michoacán, Ciclo Escolar 2025–2026.*

*PAM — Productores Agroalimentarios de Michoacán v2.0.1 — Jerome Santiago Sarabia Cancino y Cristopher William Sixtos Lucio — Asesor: Prof. Jorge Roa Ramos*
