---
sidebar_position: 1
---

# Snippets Personalizados

## ✂️ ¿Qué son los snippets?

Son fragmentos de código JavaScript reutilizables que puedes guardar y ejecutar desde DevTools.

## Cómo crear un snippet

1. Ve a **Sources > Snippets**.
2. Clic derecho > `New` > asigna un nombre.
3. Escribe el código. Ejemplo:
   ```js
   console.log("🚀 Hola desde el snippet");
   alert("¡Snippet ejecutado!");
   ```
4. Ejecuta con clic derecho > `Run` o con `Ctrl + Enter`.

## Usos comunes de snippets

- Cambiar dinámicamente el estilo de una página.
- Probar funciones de JS sin modificar el código fuente.
- Automatizar pruebas rápidas o tareas repetitivas.

## Consejos 🧠

- Guarda snippets útiles para cada proyecto.
- Crea snippets para limpiar `localStorage`, `sessionStorage`, cookies, o para generar datos falsos con `faker.js`.
- Puedes usar `fetch()` para testear APIs también desde snippets.

```js
fetch("https://api.ejemplo.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data));
```
