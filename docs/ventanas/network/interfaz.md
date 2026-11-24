---
sidebar_position: 2
title: Interfaz
---

## Descripción general

Al abrir la pestaña Network, verás una interfaz con varias secciones clave:

### Barra superior de control

- **Botón de grabación (●):** Activa o pausa la captura de tráfico.
- **Clear:** Limpia la lista de solicitudes.
- **Filtros:** Permite filtrar por tipo de archivo (JS, XHR, Img, etc.).
- **Caja de búsqueda:** Filtra solicitudes por nombre o contenido.

### Lista de solicitudes

Cada fila representa una solicitud de red, con columnas como:

- **Nombre** del archivo o endpoint.
- **Status** (200, 404, etc.)
- **Tipo** de recurso
- **Iniciador** (qué lo disparó)
- **Tamaño** y **tiempo de carga**

### Vista de detalles

Al seleccionar una solicitud, aparece una vista dividida en pestañas:

- Headers
- Payload
- Response
- Timing
- Cookies (si aplica)

### Barra de estado inferior

- Número total de solicitudes
- Bytes transferidos
- Tiempo total de carga
