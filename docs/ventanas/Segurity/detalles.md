---
sidebar_position: 2
id: detalle
title: Detalles de Certificados
---

## y Contenido Mixto

## Información del certificado

Puedes ver detalles del certificado de seguridad:

- Emisor
- Válido desde / hasta
- Dominio (CN - Common Name)
- Algoritmo de cifrado

### Ejemplo avanzado: verificación de validez de certificado en consola

```javascript
fetch("https://tu-sitio.com").then((resp) => {
  console.log(resp.url);
  console.log(resp.statusText);
});
```

> Útil para diagnosticar problemas de HTTPS caducado o incorrecto.

---

## Contenido mixto (Mixed Content)

Ocurre cuando una página HTTPS carga recursos desde HTTP.

> Esto reduce la seguridad y puede bloquear recursos automáticamente.

### Ejemplo:

```html
<img src="http://example.com/image.jpg" />
<!-- Recurso inseguro -->
```

### Soluciones:

- Reemplazar enlaces `http://` por `https://`.
- Asegurar que todos los servicios y APIs estén en HTTPS.

### Ejemplo avanzado: detectar recursos mixtos dinámicamente

```javascript
const elements = Array.from(document.querySelectorAll("img, script, link"));
elements.forEach((el) => {
  const src = el.src || el.href;
  if (src && src.startsWith("http://")) {
    console.warn("Contenido mixto detectado:", src);
  }
});
```
