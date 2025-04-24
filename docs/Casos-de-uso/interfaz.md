---
sidebar_position: 1
id: interfaz
title: Interfaz y Depuración Visual
---

## 🎨 Cambiar estilo de un botón

1. Haz clic derecho sobre el botón y selecciona **Inspect**.
2. En la pestaña **Elements**, localiza el elemento `button` en el DOM.
3. En el panel derecho (**Styles**), modifica o añade reglas CSS como:
   ```css
   background-color: red;
   border-radius: 8px;
   padding: 10px 20px;
   ```
4. Puedes desactivar o activar estilos marcando/desmarcando las casillas.

> Útil para pruebas rápidas de diseño sin modificar el código fuente.

---

## 🪟 Inspeccionar un modal oculto

Los modales suelen estar ocultos con `display: none` o `visibility: hidden`.

1. Abre DevTools y ve a **Elements**.
2. Usa el buscador (Ctrl/Cmd + F) para encontrar el modal (`id="modal"`, `.modal`, etc).
3. Quita o modifica el estilo que lo oculta:
   ```css
   display: block;
   visibility: visible;
   opacity: 1;
   ```
4. Así puedes inspeccionarlo, editar su contenido o probar su diseño.
