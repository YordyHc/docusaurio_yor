# Exploración y depuración

## Estructura de archivos

Los archivos se presentan según su origen:

- **top/**: Archivos del sitio actual.
- **localhost/** o **file:///**: Recursos locales.
- **cdn.\***: Archivos servidos desde una CDN.
- **webpack:///**: Código fuente reconstruido por bundlers.

## Breakpoints (Puntos de ruptura)

Permiten pausar la ejecución del código en una línea específica para inspección.

### Tipos de breakpoints

- **Line breakpoint**: clic en el número de línea.
- **DOM breakpoint**: cuando un nodo del DOM cambia.
- **XHR/fetch breakpoint**: para solicitudes de red.
- **Event listener breakpoint**: para eventos específicos (click, input, etc.).

### Cómo usarlos

1. Abre el archivo deseado.
2. Haz clic en el número de línea para activarlo.
3. Usa la barra superior para avanzar (`Step over`, `Step into`, `Step out`).

## Panel derecho: herramientas de depuración

- **Call Stack**: muestra el orden de llamadas.
- **Scope**: variables disponibles en el contexto actual.
- **Watch**: permite seguir expresiones personalizadas.
- **Breakpoints**: lista y controla los breakpoints activos.

## Snippets

Fragmentos de código reutilizables que puedes ejecutar sin modificar archivos fuente:

1. Ve a la subpestaña **Snippets**.
2. Crea uno nuevo (`New snippet`).
3. Escribe el código JavaScript deseado.
4. Ejecuta con clic derecho > `Run` o usa el botón de reproducción.
