---
sidebar_position: 3
id: herramientas
title: Herramientas avanzadas
---

## Workspace (espacio de trabajo)

Puedes vincular un proyecto local para hacer ediciones persistentes:

1. Haz clic derecho en el panel izquierdo y selecciona **Add folder to workspace**.
2. Concede permisos al navegador.
3. Ahora los cambios en DevTools se guardan en tus archivos locales.

## Source Maps (mapas de fuente)

Permiten mapear el código transpilado (como el generado por TypeScript o Webpack) al código fuente original.

- Habilita en Settings > Preferences > Enable JavaScript source maps.
- Puedes depurar como si trabajases directamente con los archivos originales.

## Edición en vivo

- Puedes editar cualquier archivo JS/CSS.
- Las ediciones son temporales (a menos que uses Workspace).
- Ideal para probar fixes rápidos o estilos.

## Consejos útiles

- Usa `Ctrl+Shift+P` para abrir la paleta de comandos.
- Usa `blackboxing` para ignorar scripts de terceros.
- Usa `Live expressions` en el panel Scope para monitorear dinámicamente expresiones.
- Activa "Pause on exceptions" para detectar errores no capturados.

## Mejores prácticas

- No confíes en los cambios hechos solo en DevTools, siempre replica en tu código fuente.
- Usa `Snippets` para tareas repetitivas.
- Aprende los atajos de teclado para mayor productividad.

---

Esta es una introducción completa a la pestaña Sources. Profundizar en su uso mejora significativamente el proceso de desarrollo y depuración web.
