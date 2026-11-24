---
sidebar_position: 2
---

# Comandos en tiempo real

## Uso de comandos en tiempo real

Desde la consola puedes ejecutar comandos directamente en el contexto de la página actual:

- Probar funciones.
- Manipular el DOM.
- Leer o cambiar el estado de variables.

**Ejemplo:**

```javascript
document.querySelector("h1").textContent = "Texto modificado desde consola";
```

## Comandos útiles y atajos

### Elementos seleccionados

- `$0` al `$4`: Accesos directos a los últimos elementos inspeccionados.

```javascript
$0.style.border = "2px solid red";
```

### Métodos de `console`

```javascript
console.log("Texto"); // Log normal
console.warn("Advertencia"); // Advertencia
console.error("Error"); // Error
console.info("Info"); // Información
console.table(array); // Tabla
```

### Agrupación y medición

```javascript
console.group("Grupo A");
console.log("Mensaje dentro");
console.groupEnd();

console.time("Ciclo");
// Código...
console.timeEnd("Ciclo");
```
