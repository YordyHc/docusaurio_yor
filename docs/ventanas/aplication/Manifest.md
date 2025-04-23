---
sidebar_position: 4
id: manifest
title: Manifest y Service Workers
---

## Manifest

El manifest es un archivo JSON que describe cómo debe comportarse una **PWA** (Progressive Web App). Define propiedades como el nombre de la app, íconos, colores y más.

### Ubicación en DevTools

> **Application > Manifest**

### Ejemplo de manifest

```json
{
  "name": "Mi App Progresiva",
  "short_name": "App",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "description": "Una app web progresiva.",
  "icons": [
    {
      "src": "icono.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## Service Workers

Los Service Workers son scripts que funcionan en segundo plano y permiten funcionalidades como:

- Cachear recursos.

- Manejar notificaciones push.

- Operar sin conexión a internet.

### Ubicación en DevTools

```markdown
Application > Service Workers
```

### Ejemplo de uso de Service Worker

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (registration) {
      console.log("Service Worker registrado con éxito:", registration);
    })
    .catch(function (error) {
      console.log("Registro fallido del Service Worker:", error);
    });
}
```

### Usos comunes

- **Aplicaciones offline**: Almacenar recursos para acceso sin conexión.

- **Notificaciones push**: Enviar mensajes a los usuarios incluso cuando no están usando la app.
