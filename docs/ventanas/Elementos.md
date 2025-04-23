---
sidebar_position: 1
---

# Elements

La pestaña **"Elements"** de las herramientas para desarrolladores (DevTools) permite a los usuarios inspeccionar, editar y depurar el código HTML y CSS de una página web directamente desde el navegador. A continuación, se detallan las funcionalidades principales de esta sección.

## Inspección del DOM

Permite explorar la estructura del Document Object Model (DOM). Cada nodo del DOM representa un elemento HTML, lo que facilita comprender la jerarquía y organización del contenido de la página.

- Se puede seleccionar un elemento visualmente en la página y ver su representación en el DOM.
- El DOM se actualiza en tiempo real, mostrando cambios dinámicos realizados por scripts.
- Las etiquetas se pueden expandir o contraer para navegar jerárquicamente.

## Edición de HTML

Es posible modificar el código HTML directamente desde el panel:

- Haciendo doble clic sobre una etiqueta o texto dentro de un nodo.
- Usando clic derecho > "Edit as HTML" para editar el bloque completo.
- Los cambios se reflejan instantáneamente en la visualización de la página, sin necesidad de recargarla.

## Edición de atributos

Los atributos HTML, como `class`, `id`, `href`, `src`, entre otros, pueden editarse fácilmente:

- Doble clic sobre el valor del atributo para editarlo.
- Botón derecho > "Add attribute" para agregar nuevos.
- Botón derecho > "Edit attribute" para modificarlos.

Esto permite hacer pruebas rápidas de cambios sin tocar el código fuente.

## Uso del CSS en línea

Dentro del mismo panel se muestra y permite modificar el CSS asociado al elemento seleccionado:

- Se pueden editar propiedades CSS directamente.
- Las propiedades se aplican en tiempo real.
- Se puede agregar nuevas reglas o editar las existentes.
- Los estilos inline (en la etiqueta) y los de las hojas de estilo externas aparecen diferenciados.

## Activar/desactivar clases

Una funcionalidad muy útil para pruebas de diseño y depuración es la gestión de clases CSS:

- Se puede agregar o quitar clases desde el panel derecho en "Classes".
- Permite alternar visualmente el efecto de una clase.
- Ayuda a depurar comportamientos condicionados a clases específicas.

## Uso de estilos computados

La pestaña "Computed" permite ver los estilos finales aplicados a un elemento:

- Muestra los valores finales de todas las propiedades CSS después de la cascada, herencia y prioridad.
- Indica de dónde proviene cada estilo (regla CSS, inline, etc.).
- Muy útil para entender por qué un elemento se ve de cierta manera.

---

### Archivos sugeridos para modular la documentación (opcional):

Si se desea modular esta documentación en archivos más pequeños, se podría estructurar de la siguiente forma:

- `elements-overview.md`: Descripción general de la pestaña Elements.
- `inspect-dom.md`: Detalles sobre la inspección del DOM.
- `edit-html.md`: Guía para editar HTML y atributos.
- `inline-css.md`: Trabajo con estilos inline.
- `classes.md`: Activar/desactivar clases CSS.
- `computed-styles.md`: Visualización de estilos computados.
