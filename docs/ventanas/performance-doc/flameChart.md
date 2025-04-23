---
sidebar_position: 3
id: avanzado
title: Características avanzadas
---

## Interacción con otras herramientas

- **Web Vitals**: Puedes evaluar métricas como FCP, LCP, CLS y TTI.
- **Memory**: Para correlacionar uso de CPU con posibles fugas de memoria.
- **Coverage**: Identifica código JS o CSS no utilizado.

## API de rendimiento y marcas personalizadas

Puedes usar la [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API) para marcar eventos:

```js
performance.mark("inicio");
// ... código ...
performance.mark("fin");
performance.measure("Duración", "inicio", "fin");
```

Estas marcas aparecen en la pestaña Performance, útiles para medir procesos propios.

## Eventos de Entrada

Se registran eventos como `click`, `mousedown`, `keydown`, permitiendo detectar input delay (demora entre acción del usuario y respuesta del sistema).

## Cambios de diseño (Layout Shifts)

- Los layout shifts afectan la experiencia del usuario y el CLS.
- Puedes ver cuándo ocurren y qué elementos los provocan.

## Gráficas y hilos secundarios

- **Interactions**: Eventos de usuario y sus efectos.
- **Thread activity**: Muestra actividad en hilos como _Compositor_ o _Raster_.
- **GPU activity**: Útil para identificar renderizado con aceleración por hardware.

## Modo "Performance Insights"

- Vista simplificada y guiada con sugerencias de optimización.
- Ideal para quienes se inician en análisis de rendimiento.

---

## Consejos adicionales

- Realiza varias grabaciones para comparar comportamientos.
- Combina "Performance" con "Lighthouse" para recomendaciones automáticas.
- Usa "Performance Insights" (modo guiado) si estás empezando.
