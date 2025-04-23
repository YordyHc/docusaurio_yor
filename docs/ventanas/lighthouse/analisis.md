---
sidebar_position: 2
id: analisis-detallado
title: Análisis Detallado
---

## 🔢 Interpretación del informe

- Cada sección tiene un puntaje del 0 al 100.
- Los detalles incluyen recomendaciones y recursos relacionados.
- Puedes exportar el reporte como HTML o JSON.

### Ejemplo avanzado: correr Lighthouse desde línea de comandos

```bash
npm install -g lighthouse
lighthouse https://tusitio.com --view
```

### Ejemplo avanzado: auditoría programada con Node.js

```javascript
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

(async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = { port: chrome.port };
  const runnerResult = await lighthouse("https://tusitio.com", options);
  console.log(runnerResult.lhr.categories.performance.score);
  await chrome.kill();
})();
```
