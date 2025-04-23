---
sidebar_position: 2
id: cuello-botella
title: Cuellos de botella y FPS
---

Un cuello de botella es cualquier parte del sistema que limita el rendimiento global porque funciona más lento o consume más recursos que el resto. Es como el punto más angosto de una botella, que impide que el contenido fluya con rapidez.

## Identificar cuellos de botella

### Cuellos de botella comunes:

- **Ejecución excesiva de JS**: Funciones que tardan demasiado en completarse.
- **Reflows frecuentes**: Cambios constantes en el layout de la página.
- **Repaint innecesarios**: Actualizaciones de estilos que afectan la renderización visual.
- **Carga lenta de recursos**: Archivos pesados o demasiadas peticiones en paralelo.

### Herramientas para detección:

- **Gráfico de llama** para funciones costosas.
- **Main thread** para detectar bloqueos o tareas largas.
- **Resumen de tiempo** para ver dónde se va el mayor porcentaje de tiempo.

## FPS y carga de recursos

### FPS (Frames por segundo)

- Idealmente, una aplicación debe mantener 60 FPS para una experiencia fluida.
- Bajos FPS indican jank o cuelgues en la interfaz.

### Análisis de FPS

- Activa el "FPS Meter" desde el menú de comandos de DevTools (`Cmd + Shift + P` / `Ctrl + Shift + P`) y busca "Show FPS meter".
- Observa caídas durante la interacción o animaciones.

### Carga de recursos

- Aunque la pestaña "Network" es principal para esto, en "Performance" puedes ver cómo la carga de recursos afecta el tiempo de carga total.
- Analiza la línea de tiempo para ver cuándo se solicitan y descargan los recursos.
