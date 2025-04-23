---
sidebar_position: 4
id: rendimiento
title: Análisis de Rendimiento
---

## Métricas importantes

- **TTFB (Time To First Byte):** Tiempo desde que se inicia la solicitud hasta que llega el primer byte.
- **Content Download:** Tiempo que tarda en descargarse el recurso.
- **Total Time:** Duración completa de la solicitud.

## Optimización

- Activar caché
- Minimizar archivos (minify JS/CSS)
- Usar compresión (gzip, br)
- Servidores rápidos/CDNs
- Lazy load de recursos no esenciales

## Tips

- Ordenar por "Time" para ver cuellos de botella.
- Usar la pestaña "Timing" para análisis más granular.
