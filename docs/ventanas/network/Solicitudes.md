---
sidebar_position: 3
id: solicitudes
title: Solicitudes
---

## Tipos de solicitudes que puedes ver

La pestaña Network categoriza los recursos por tipo. Puedes filtrar por:

- **All:** Todas las solicitudes.
- **Doc:** Documentos HTML.
- **Script:** Archivos JS.
- **XHR/Fetch:** Llamadas AJAX y fetch.
- **Stylesheet:** Archivos CSS.
- **Image:** Archivos de imagen (JPG, PNG, SVG, etc.).
- **Media:** Audio, video.
- **Font:** Fuentes web.
- **WS:** WebSockets.
- **Other:** Archivos que no entran en las categorías anteriores.

Esto facilita analizar solo lo que te interesa según el contexto.

---

## Detalles de una solicitud

Cuando haces clic en una solicitud en la lista, se muestra una vista detallada que incluye:

### Headers

Muestra los encabezados HTTP:

- **Request Headers:** enviados por el navegador.
- **Response Headers:** enviados por el servidor.

### Payload

Visible en solicitudes POST, PUT u otras que envían datos. Muestra:

- FormData
- JSON u otros tipos de datos enviados.

### Response

Contenido devuelto por el servidor, puede ser:

- Texto
- HTML
- JSON
- Binario

### Preview

Una vista previa visual del contenido. Muy útil para imágenes y JSON.

### Timing

Desglose temporal de la solicitud:

- Resolución DNS
- Conexión TCP/TLS
- Tiempo al primer byte (TTFB)
- Descarga del contenido

### Initiator

Indica qué acción o script disparó la solicitud. Ayuda a rastrear el origen de la misma.

### Stack Trace

Si la solicitud fue iniciada por JavaScript, se puede ver la traza de pila para entender el flujo.

### Cookies

Muestra cookies que se enviaron o se recibieron en la solicitud.

Estas herramientas permiten inspeccionar a fondo cada transacción de red, lo cual es clave para la depuración web.
