---
sidebar_position: 3
id: IndexedDB
title: IndexedDB y Cache
---

## IndexedDB

IndexedDB es una base de datos NoSQL que permite almacenar grandes cantidades de datos estructurados en el navegador. Es ideal para aplicaciones que funcionan offline.

### Ubicación en DevTools

> **Application > Storage > IndexedDB**

### Ejemplo de uso en código

```javascript
let request = indexedDB.open("MiDB", 1);
request.onsuccess = function (event) {
  let db = event.target.result;
  let transaction = db.transaction("miTabla", "readwrite");
  let store = transaction.objectStore("miTabla");
  store.add({ nombre: "Ana", edad: 25 });
};
```

## Cache Storage (Service Workers)

El Cache Storage permite almacenar recursos como HTML, CSS y JS en el navegador para mejorar la carga de la página y permitir el funcionamiento offline.

### Ubicación en DevTools

```markdown
Application > Cache > Cache Storage
```

### Ejemplo de uso en código

```javascript
caches.open("mi-cache").then(function (cache) {
  return cache.addAll(["/index.html", "/estilos.css", "/script.js"]);
});
```

### Usos comunes

- **Aplicaciones offline**: Permite que la app funcione sin conexión.

- **Mejorar el rendimiento**: Almacena recursos que no cambian frecuentemente.
