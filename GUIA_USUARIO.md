# 📘 PAM v2.0 - Reporte Integral y Manual de Usuario

Bienvenido al ecosistema **PAM (Productores Agroalimentarios de Michoacán) v2.0**.
Este documento funciona como un reporte del sistema actual y una guía paso a paso para actores clave: **Productores** y **Compradores**.

---

## 🚀 1. Reporte del Sistema Actual (v2.0)

El proyecto PAM ha sido reestructurado para ofrecer una experiencia móvil de primera clase, mayor coherencia en los datos y un entorno seguro para la negociación directa.

### Características Principales
*   **Directorio Unificado:** Datos de productores centralizados, ofreciendo una única fuente de verdad.
*   **Mobile-First Design:** Navegación, barra de búsqueda y menús completamente rediseñados para operar impecablemente en pantallas móviles (smartphones).
*   **Asistente Virtual (Chatbot):** Impulsado por Google Gemini. Ofrece soporte instantáneo y es capaz de responder con datos predefinidos si no hay conexión a la API.
*   **Panel de Control (Dashboard):** Área privada para productores con gestión de cultivos y recepción de contactos (Leads).
*   **Negociación Directa:** Eliminación total de intermediarios corporativos (cero comisiones).

---

## 👤 2. Manual de Usuario: Productores

### A. Registro y Verificación
1.  Ingresa a [pam-michoacan.com/register](#) (o tu URL actual).
2.  Selecciona la opción **"Quiero Validar mis Cultivos"**.
3.  Ingresa tu Nombre Completo, Teléfono a 10 dígitos y selecciona tu Municipio en Michoacán.
4.  Haz clic en **"Solicitar Verificación"**.
5.  *Nota:* Tras el registro, serás dirigido directamente a tu Panel de Control (Dashboard). En una versión futura con backend, este paso requerirá aprobación manual por un administrador.

### B. Gestión de Cultivos (Mis Cultivos)
1.  En el menú lateral (o en el menú de hamburguesa en móviles), selecciona **Mis Cultivos** (icono de hoja).
2.  **Añadir Cosecha:** Haz clic en el botón verde "Agregar Nueva Cosecha". Llena los detalles (nombre, categoría, estado, etc.) y guarda.
3.  **Visualizar Cultivos:** Verás tus cultivos actuales en formato de tarjetas.
4.  *Nota de guardado:* Actualmente los cultivos se guardan en la memoria local (LocalStorage) de tu dispositivo.

### C. Recepción de Ofertas (Interesados)
1.  Dirígete a la pestaña **Interesados** en el menú.
2.  Aquí recibirás mensajes de compradores interesados en tus cultivos.
3.  **Secciones:**
    *   **Nuevos Interesados:** Mensajes recientes que no han sido respondidos.
    *   **En Negociación:** Tratos donde ya has compartido tu contacto telefónico/WhatsApp.
    *   **Historial:** Registros de envíos pasados (actualmente en construcción).
4.  Haz clic en **"Responder & Negociar"** para iniciar el contacto directo a través de WhatsApp.

---

## 🛒 3. Manual de Usuario: Compradores

### A. Exploración del Directorio
1.  Desde la página de inicio (Landing) o la pestaña **Productores**, puedes buscar agricultores por:
    *   **Nombre** o municipio (Ej. "Uruapan").
    *   **Categoría** (Ej. "Aguacate Hass", "Limón").
    *   **Certificaciones** (Ej. "SENASICA", "Orgánico").
2.  Utiliza la barra de búsqueda avanzada y los chips de filtros rápidos.
3.  Puedes ordenar los resultados por **Relevancia, Calificación, Disponibilidad o Nombre**.

### B. Revisión de Perfiles y Certificaciones
1.  Haz clic en cualquier productor para ver su **Perfil Detallado**.
2.  Revisa su **Historia, Capacidad Productiva (disponibilidad), y Galería**.
3.  En la sección de **Certificaciones**, verifica los sellos que respaldan la inocuidad de sus productos. (Puedes ver más detalles sobre qué significa cada certificación en la pestaña principal de "Certificaciones").

### C. Negociación y Contacto
1.  En el Perfil Detallado del productor, al final de la pantalla (o en la barra flotante en móviles) verás el botón verde **"Negociar por WhatsApp"**.
2.  Haz clic para iniciar un chat directo con el agricultor seleccionado.
3.  **Seguridad:** Recuerda que PAM no retiene comisiones ni procesa pagos. Todo trato económico y logístico debe acordarse directamente con el productor bajo tu responsabilidad.

---

## 💡 4. Uso del Asistente Virtual (Chatbot)

*   En cualquier página, (excepto dentro del Panel Privado), verás un **botón verde flotante** en la esquina inferior derecha.
*   Haz clic en él para abrir el chat.
*   Puedes preguntar cosas como:
    *   *"¿Cuándo es la temporada fuerte del Aguacate Hass?"*
    *   *"¿Qué significa el certificado SENASICA?"*
    *   *"¿Cómo me registro como productor?"*
*   El asistente impulsado por Inteligencia Artificial te responderá de inmediato. Si el modelo no está disponible por fallas de conexión, te dará una respuesta de respaldo.

---
*Fin del Manual de Usuario*
