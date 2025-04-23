---
sidebar_position: 2
id: storage
title: local y session
---

````markdown
# Pestaña "Application" – LocalStorage y SessionStorage

Ambos permiten almacenar pares clave/valor en el navegador. La diferencia principal es la persistencia de los datos:

- **LocalStorage**: Los datos persisten después de cerrar el navegador.
- **SessionStorage**: Los datos se borran al cerrar la pestaña.

### Ubicación en DevTools

> **Application > Storage > Local Storage / Session Storage**

### Ejemplo de uso en código

```javascript
// Almacenar en LocalStorage
localStorage.setItem("usuario", "Ana");

// Almacenar en SessionStorage
sessionStorage.setItem("modo", "oscuro");

// Recuperar valor de LocalStorage
let usuario = localStorage.getItem("usuario");
console.log(usuario);

// Eliminar valor de LocalStorage
localStorage.removeItem("usuario");

// Limpiar todos los elementos de LocalStorage
localStorage.clear();
```
````

### Usos comunes

- **Guardar preferencias del usuario**: Ej. el tema oscuro.

- **Mantener datos de sesión entre recargas**: Como una lista de artículos en un carrito de compras.
