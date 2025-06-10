— Etiquetas HTML:

pre: preformateado. Respeta el formato escrito en el editor
<em>: da más enfasis SEO que <i>
<ins>: inserta texto desde JS si la caja está vacía
<del>: texto tachado
<mark>: le da un fondo al texto

---

— Background desde CSS:

_Background_ / _Background-image:_ en CSS:
La propiedad Background-image no permite poner las propiedades de center, no-repeat. Hay que usar la propiedad Background

---

— Figure / Figcaption:

* Figure es block, así que con un margin: 0 auto, se
centra. 
* Figcaption se comporta como simple texto <p>.
Sí le damos un background-color al figure, conseguiremos darle un
color de fondo al figcaption. *Sin embargo*, sí le damos el
background-color al figcaption, nos generará un espacio "en blanco"
entre figure y figcaption.

---

— Centrado:

* Los elementos HTML en línea y textos (p, h) se centran con *text-align: center*;
* Las *imágenes* también son en línea, pero hay que controlar su tamaño y que estás estén
dentro de un elemento p, h o contendor.
Sin un elemento de estos, se centra con *margin: X auto* 
