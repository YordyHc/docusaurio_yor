---
sidebar_position: 2
---

# Overrides Locales

## 🗂️ ¿Qué es?

Permite modificar archivos de un sitio web directamente en DevTools y que se conserven entre recargas.

## Activar Local Overrides

1. Abre **Sources > Overrides**.
2. Elige una carpeta local y otorga permisos.
3. Una vez configurado, cualquier cambio en archivos HTML, CSS o JS se guarda localmente.

## ¿Para qué sirve?

- Simular cambios en producción sin necesidad de subir al servidor.
- Depurar archivos de librerías externas.
- Forzar respuestas diferentes desde el backend (como archivos JS alternativos).

## Ejemplo de uso

1. Edita un archivo CSS desde la pestaña **Sources**.
2. Guarda y recarga: el navegador usará tu versión local.

## Precauciones ⚠️

- No olvides desactivar el override cuando cambies de proyecto.
- Algunos archivos como imágenes o scripts de terceros pueden no ser sobreescribibles.

🎯 Ideal para pruebas A/B, prototipos rápidos y depuración en caliente.
