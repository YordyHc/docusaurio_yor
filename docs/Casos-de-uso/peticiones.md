---
sidebar_position: 2
id: peticiones
title: Peticiones y Consola
---

## Ver peticiones AJAX

1. Abre la pestaña **Network**.
2. Filtra por tipo **XHR** o **Fetch**.
3. Recarga la página o ejecuta una acción que dispare una petición.
4. Haz clic sobre una petición para ver:
   - Headers
   - Payload
   - Respuesta (JSON, HTML, etc.)
   - Tiempo de respuesta

> Ideal para depurar comunicación con el servidor y APIs.

---

## Depurar un error JavaScript

1. Abre la pestaña **Console** para ver errores.
2. Haz clic en el archivo o número de línea para abrir el código en la pestaña **Sources**.
3. Coloca un **breakpoint** haciendo clic en el número de línea.
4. Usa los controles de depuración:
   - Continuar
   - Paso a paso
   - Ver valores de variables en tiempo real

> Permite analizar el flujo de ejecución y encontrar la fuente de errores lógicos o excepciones.

---

## Probar una API REST desde consola

1. Abre la pestaña **Console**.
2. Ejecuta una petición fetch como:
   ```js
   fetch("https://api.example.com/data", {
     method: "GET",
     headers: {
       Authorization: "Bearer token",
     },
   })
     .then((res) => res.json())
     .then((data) => console.log(data))
     .catch((err) => console.error(err));
   ```
3. Observa la respuesta directamente en la consola.

> Muy útil para probar endpoints y ver resultados sin necesidad de herramientas externas como Postman.
