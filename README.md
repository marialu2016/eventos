
# Ejercicios: Eventos y Alternar Secciones (DOM + JS)

Este set muestra cómo **escuchar eventos**, **crear nodos dinámicamente** y **alternar contenido** dentro del DOM usando JavaScript, en tres variantes progresivas.

---

## 1) Mostrar/Ocultar una sección con un botón
**Archivos:** `index.html` + `eventos.js`

- La página define dos secciones (`#sec1` y `#sec2`) y un botón en la segunda. Por CSS, `#sec1` inicia oculta con `display: none`. fileciteturn1file1  
- En JS se agrega un **event listener** al botón que, al hacer clic, muestra `#sec1` y deshabilita el botón. 

**Idea central:** responder a un evento (`click`) para modificar estilos (`display`) y atributos (`disabled`) de elementos de la página.

---

## 2) Alternar secciones creando el contenido desde JavaScript
**Archivos:** `indexjs.html` + `main.js`

- El HTML provee un contenedor vacío `#root` y un botón. fileciteturn1file2  
- El JS **crea dinámicamente** dos secciones (`sec1` y `sec2`) con `document.createElement` y `innerHTML`, las inserta/elimina de `#root`, y **alterna** el texto del botón según la vista activa. 

**Idea central:** renderizado condicional manual sin frameworks: quitar el primer hijo de `#root` y agregar el otro según un flag booleano.

---

## 3) Alternar secciones (variación)
**Archivos:** `prueba.html` + `prueba.js`

- Estructura similar: botón, `#root` vacío y script. fileciteturn1file4  
- Lógica JS análoga: crear `sec1`/`sec2`, inicializar con `sec1`, alternar con un booleano y actualizar el texto del botón. 

**Idea central:** misma técnica aplicada con pequeñas diferencias de nombres de variables y flujo.

---

## Temas que se practican
- **Eventos del DOM:** `addEventListener('click', ...)`. 
- **Creación e inserción de nodos:** `document.createElement`, `appendChild`, `innerHTML`. 
- **Renderizado condicional sin librerías:** remover/añadir nodos y **alternar** texto de botones dinámicamente. 
- **Manipulación de estilos/atributos:** cambiar `style.display` y `disabled`. 

---

## Cómo probar
1. Abrí cada archivo HTML en tu navegador:
   - `index.html` (muestra/oculta sección con un botón).
   - `indexjs.html` (alterna entre Sección 1 y Sección 2 creadas desde JS).
   - `prueba.html` (variación del alternador).
2. Revisá la consola del navegador si necesitás depurar.

---

## Sugerencias didácticas
- **Ejercicio 1:** modificar el botón para que vuelva a ocultar `#sec1` en un segundo clic (toggle).
- **Ejercicio 2:** extraer la creación de secciones a funciones puras y escribir una función `render(state)`.
- **Ejercicio 3:** agregar una transición CSS al alternar y un contador de clics.
