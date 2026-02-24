# 📗 Guía de Usuario — PAM v2.0

> **Plataforma:** PAM — Productores Agroalimentarios de Michoacán  
> **URL local:** [http://localhost:3000](http://localhost:3000)  
> **Versión:** 2.0.1

---

## ¿Qué es PAM?

PAM es una plataforma digital que conecta productores agrícolas verificados de Michoacán directamente con compradores reales. **No cobra comisiones.** Los acuerdos económicos y pagos se realizan directamente entre las partes (fuera de la plataforma).

---

## 🧑‍🌾 Manual para Productores

### Paso 1: Registro

1. Visita la página principal y haz clic en **"Ingresar"** → **"Regístrate aquí"**
2. Selecciona el ícono **"Quiero Validar mis Cultivos"** (ícono de agricultor)
3. Completa el formulario:
   - **Nombre Completo** — Ej. Roberto Martínez
   - **Teléfono Celular** — 10 dígitos sin el +52 (Ej. 443 123 4567)
   - **Municipio** — Selecciona tu municipio en Michoacán
4. Haz clic en **"Solicitar Verificación"**
5. Un asesor de PAM te contactará para completar el proceso de verificación.

---

### Paso 2: Iniciar Sesión

1. Haz clic en **"Ingresar"** en la barra superior
2. Ingresa tu número de teléfono (10 dígitos)
3. Haz clic en **"Entrar con Código"**
4. Serás redirigido automáticamente a tu Panel de Cultivos

---

### Paso 3: Gestionar tus Cultivos (Dashboard)

Accede desde el menú lateral → **"Mis Cultivos"** o ve a `/dashboard`

#### Agregar una cosecha
1. Haz clic en **"Agregar Nueva Cosecha"** (botón verde) o en la tarjeta `+`
2. Completa el formulario:
   | Campo | Descripción | Ejemplo |
   |-------|-------------|---------|
   | Nombre del Cultivo | Tipo de producto | Aguacate Hass |
   | Ubicación / Huerta | Nombre de tu parcela | Huerta El Mirador |
   | Hectáreas | Superficie total | 5.5 |
   | Toneladas Est. | Producción esperada | 40 |
   | Estado | Etapa actual | Listo para Cosecha |
3. Haz clic en **"Guardar"**
4. La tarjeta aparecerá de inmediato en tu panel ✅

#### Estados de cultivo
| Estado | Color | Significado |
|--------|-------|-------------|
| ✅ **Listo** | Verde | Producto disponible para venta inmediata |
| 💧 **Creciendo** | Amarillo | En desarrollo, con barra de progreso de riego |
| ⚠️ **Atención** | Naranja | Requiere revisión (plagas, condiciones) |

#### Editar información
- Haz clic en **"Editar"** en cualquier tarjeta
- Modifica los campos necesarios
- Haz clic en **"Guardar"**

#### Eliminar un cultivo
- En la ventana de edición, haz clic en **"Eliminar Cultivo"** (texto rojo al final del formulario)
- Confirma en el diálogo emergente

> 💡 **Dato:** Tus cultivos se guardan automáticamente en tu navegador. No se perderán al cerrar o refrescar la página.

---

### Paso 4: Gestionar Interesados

Accede desde **"Interesados"** en el menú lateral o ve a `/orders`

Aquí verás las **solicitudes de contacto** de compradores interesados en tus productos.

#### Tipos de tarjetas
- 🟢 **Nuevo Mensaje** — Un comprador acaba de escribirte
- 🟡 **Datos Compartidos** — Ya compartiste tu contacto con este comprador
- ⬜ **Historial** — Conversaciones anteriores

#### Acciones disponibles
| Botón | Acción |
|-------|--------|
| **Responder & Negociar** | Compartir tus datos de contacto con el comprador |
| **Ver Perfil Comprador** | Revisar la identidad del comprador antes de responder |
| **Registrar Llamada** | Anotar que ocurrió una llamada telefónica |

> ⚠️ **Importante:** PAM nunca te pedirá transferir dinero. Desconfía de cualquier solicitud de pago dentro de la plataforma.

---

### Paso 5: Ver tu Perfil Público

Tu perfil es lo que ven los compradores. Accede desde el menú lateral → **"Mi Perfil Verificado"**

El perfil muestra:
- Tu nombre y ubicación con badge de "Identidad Verificada"
- Descripción de tu huerta y métodos de cultivo
- Galería de fotos
- Capacidad productiva actual con barra de disponibilidad
- Certificaciones vigentes (SENASICA, GlobalG.A.P., etc.)

---

### Cerrar Sesión

Haz clic en el ícono de **logout** (flecha saliente) en la parte inferior del menú lateral.

---

## 🛒 Manual para Compradores

### Buscar Productores

**Opción A — Búsqueda rápida (Página Principal)**
1. Escribe en la barra de búsqueda: nombre del productor, municipio o producto
2. Usa los filtros de chips: **Frutas · Verduras · Orgánico · Certificado SENASICA**
3. Haz clic en una tarjeta para ver el perfil completo

**Opción B — Directorio completo (/producers)**
1. Ve a **"Productores"** en la barra de navegación
2. Usa los filtros avanzados:
   - **Cultivo:** Aguacate Hass, Berries, Limón, Mango, Granos
   - **Certificación:** SENASICA, GlobalG.A.P., Orgánico, Rainforest Alliance, PrimusGFS
   - **Disponibilidad:** Inmediata, Próxima Temporada, Todo el Año
3. Usa los tags rápidos: **"Orgánico Certificado" · "Limón" · "Disponible Ahora"**

---

### Contactar a un Productor

1. Entra al perfil del productor (haz clic en su tarjeta)
2. Revisa su capacidad productiva, certificaciones y galería
3. Desplázate al final de la página
4. Haz clic en **"Negociar por WhatsApp"**
5. Se abrirá WhatsApp con el número del productor — acuerda términos, precio y logística directamente

> 📌 PAM no participa en la transacción económica ni garantiza ningún trato. Verifica la identidad del productor antes de cualquier pago.

---

## 🤖 Chatbot de IA (Asistente PAM)

El chatbot flotante (botón verde 💬 en la esquina inferior derecha) está disponible en **todas las páginas**.

### ¿Qué puede responder?
- Información sobre productos michoacanos (aguacate, berries, limón, mango)
- Temporadas de cosecha por región
- Requisitos y beneficios de certificaciones (SENASICA, GlobalG.A.P., etc.)
- Buenas prácticas agrícolas
- Dudas generales sobre la plataforma PAM

### Usar el chatbot
1. Haz clic en el botón verde 💬
2. Escribe tu pregunta en español
3. Presiona `Enter` o el botón de envío ➤
4. La respuesta aparece en tiempo real (efecto de escritura)

> El chatbot es impulsado por **Google Gemini** y está especializado en agronomía michoacana.

---

## 📜 Conoce las Certificaciones

Visita **"Certificaciones"** en el menú superior para aprender sobre:

| Certificación | ¿Qué garantiza? |
|--------------|----------------|
| **SENASICA** | Sanidad e inocuidad agroalimentaria (Gobierno de México) |
| **GlobalG.A.P.** | Buenas Prácticas Agrícolas — acceso a mercados europeos |
| **Orgánico (LPO)** | Cultivo sin pesticidas sintéticos ni GMO |
| **Fair Trade** | Precio mínimo justo + desarrollo comunitario |
| **Rainforest Alliance** | Conservación ambiental y sostenibilidad |
| **PrimusGFS** | Seguridad alimentaria GFSI — aceptado por Costco, Walmart |

Haz clic en **"Ver detalles"** de cualquier certificación para acceder a su sitio oficial.

---

## 🆘 Soporte

Visita `/support` o haz clic en el ícono ❓ en la barra de navegación.

| Canal | Disponibilidad |
|-------|---------------|
| 📞 Llamar a Soporte | Lunes a Viernes, 9am - 6pm |
| 💬 WhatsApp | Respuesta en horario de oficina |
| ❓ Preguntas Frecuentes | 24/7 |

---

*© 2024 PAM — Productores Agroalimentarios de Michoacán*
