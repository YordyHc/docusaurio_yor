---
sidebar_position: 3
---

# Tecnicas de Depuración

## 🐞 Depurar con `console`

### Trazar el flujo de ejecución

```javascript
function prueba() {
  console.trace("Stack:");
}
prueba();
```

### Medir rendimiento

```javascript
console.time("Carga");
// Operación...
console.timeEnd("Carga");
```

### Mostrar datos estructurados

```javascript
console.table([
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
]);
```

### Agrupar mensajes relacionados

```javascript
console.group("Proceso X");
console.log("Paso 1");
console.log("Paso 2");
console.groupEnd();
```

## 🧰 Herramientas complementarias

- Acceder al DOM desde consola para inspección dinámica.
- Invocar funciones globales para pruebas rápidas.
- Observar el comportamiento del código sin recargar la página.
