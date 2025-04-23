---
sidebar_position: 1
id: cookies
title: Cookies
---

Las **cookies** son pequeños fragmentos de información que el navegador guarda, enviados por el servidor. En la pestaña **Application** de DevTools puedes ver, modificar, agregar y eliminar cookies.

### Ubicación en DevTools

> **Application > Storage > Cookies**

### Información mostrada

- **Nombre**: El nombre de la cookie.
- **Valor**: El valor almacenado en la cookie.
- **Dominio**: Dominio al que pertenece la cookie.
- **Fecha de expiración**: Cuándo expira la cookie.
- **Flags**: `Secure` (solo se envía por HTTPS), `HttpOnly` (no accesible desde JavaScript).

### Ejemplo de uso en código

```javascript
// Establecer una cookie
document.cookie = "usuario=Ana; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/";

// Leer una cookie
let cookies = document.cookie;
console.log(cookies);

// Eliminar una cookie
document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

### Usos comunes

- **Sesiones de usuario**: Almacenar el estado de la sesión, como autenticación.

- **Preferencias: Almacenar** la preferencia de idioma o tema de la página.

- **Tokens de autenticación**: Usadas por las aplicaciones web para mantener al usuario autenticado entre sesiones.
