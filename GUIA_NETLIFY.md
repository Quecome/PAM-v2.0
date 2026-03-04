# 🌐 PAM v2.0 - Guía de Despliegue en Netlify

El despliegue (publicación en la web) de PAM v2.0 es sumamente rápido usando Netlify, ideal para que el jurado del concurso o los usuarios finales puedan probar la plataforma.

---

## ⚡ Método 1: Despliegue Manual Rápido (Netlify Drop)
*Usa este método si necesitas la página en vivo en 2 minutos sin configurar Git.*

### Paso 1: Generar la versión de Producción
1.  Abre una terminal en la carpeta raíz del proyecto (`/home/jeromessc/Documentos/proyectos/PAM/PAM-v2.0`).
2.  Ejecuta el comando para construir la aplicación optimizada:
    ```bash
    npm run build
    ```
3.  Espera un momento. Se creará una nueva carpeta llamada `dist/` en tu proyecto. Esta carpeta contiene los archivos listos para la web.

### Paso 2: Subir a Netlify
1.  Ve a tu navegador web y abre [app.netlify.com/drop](https://app.netlify.com/drop).
2.  Desplázate hacia abajo hasta encontrar el recuadro que dice **"Drag and drop your site output folder here"** (Arrastra y suelta tu carpeta de salida aquí).
3.  Abre tu administrador de archivos, busca la carpeta `dist/` que acabas de generar y **arrástrala completa** hacia el recuadro gris en tu navegador.
4.  Netlify subirá los archivos y te dará un enlace verde en vivo en segundos (ej. `tu-sitio-aleatorio.netlify.app`).

### Paso 3: Cambiar el nombre del enlace (Opcional)
1.  Si quieres que el link se vea profesional (ej. `pam-michoacan.netlify.app`):
2.  Haz clic en **"Site settings"** (Configuración del sitio).
3.  Luego haz clic en el botón gris **"Change site name"**.
4.  Escribe el nombre que deseas y guarda. Si está disponible, tu enlace se actualizará.

---

## 🤖 Método 2: Despliegue Automático con GitHub (Recomendado)
*Usa este método para que cada vez que hagas un cambio en el código, la web se actualice sola.*

### Paso 1: Sube tu proyecto a GitHub
1.  Crea un nuevo repositorio en [GitHub](https://github.com).
2.  Abre tu terminal en la carpeta del proyecto y ejecuta:
    ```bash
    git init
    git add .
    git commit -m "Publicación PAM v2.0"
    git branch -M main
    git remote add origin https://github.com/tu-usuario/nombre-del-repo.git
    git push -u origin main
    ```

### Paso 2: Conectar con Netlify
1.  Inicia sesión (o crea una cuenta gratuita) en [app.netlify.com](https://app.netlify.com).
2.  En el panel principal (Teams), haz clic en el botón **"Add new site"** y elige **"Import an existing project"**.
3.  Selecciona **GitHub** como proveedor de Git y autoriza la conexión.
4.  Busca y selecciona el repositorio de PAM que acabas de subir.

### Paso 3: Configurar opciones de compilación (Build Settings)
Netlify suele detectarlas automáticamente, pero confirma que digan lo siguiente:
*   **Base directory:** (déjalo vacío o usa `/`)
*   **Build command:** `npm run build`
*   **Publish directory:** `dist` o `dist/`

### Paso 4: Añadir Variables de Entorno (Chatbot)
1.  Haz clic en el botón **"Add environment variables"** antes de desplegar.
2.  Añade una nueva variable:
    *   **Key:** `VITE_GEMINI_API_KEY`
    *   **Value:** `(Pega aquí tu clave de la API de Gemini sin comillas)`
3.  Asegúrate de que no haya espacios al principio o al final de la clave. *Si no la pones, el Chatbot iniciará en Modo Offline automáticamente (¡así que no te preocupes si se te olvida!).*

### Paso 5: Despliegue Final y Enrutamiento (SPA)
1.  Haz clic en el botón azul **"Deploy site"**. En un par de minutos tu sitio estará en vivo.
2.  **IMPORTANTE PARA REACT ROUTER:** En React (SPA), si un usuario recarga la página en una ruta que no sea la principal (ej. `/verificado`), Netlify podría dar un error de *Página no encontrada (404)* al no encontrar un archivo físico.
3.  **Para solucionar esto**, crea en la carpeta `public/` de tu proyecto un pequeño archivo de texto sin extensión que se llame `_redirects`.
4.  Abre ese archivo `_redirects` en tu editor de código y ponle esta única línea adentro:
    ```
    /*    /index.html   200
    ```
    Guarda y sube ese cambio a GitHub, o simplemente usa el enrutador `HashRouter` que ya hemos pre-integrado en PAM v2.0 para evitar por completo este problema 👍.

¡Listo! Ya puedes enviar y presumir la URL de tu proyecto.
