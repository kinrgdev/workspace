//window //?Es nuestro universo. A partir de aquí está la existencia, después ordenes y objetos.
let miSalida = window.document.getElementById("salida");

//window.alert(typeof miSalida);
//.alert(typeof miSalida);

miSalida.innerHTML = "Hola <br> Mundo";

miSalida.style.fontSize = "2rem";
miSalida.style.color = "rgb(43, 17, 160)";
miSalida.style.width = "80%";
miSalida.style.height = "auto";
miSalida.style.backgroundImage = "url('img/cascada.jpg')";

//Recoge los elementos HTML con la sintaxis de los selectores CSS
let parrafo = document.querySelector("#dos article p");
let titular1 = document.querySelector("#dos article:nth-of-type(1) h2");
let titular1br = document.querySelector("#dos article:nth-of-type(1) h2");
let backgroundA2 = document.querySelector("#dos article:nth-of-type(2)");
let titular2 = document.querySelector("#dos article:nth-of-type(2) h2");
let margin = document.querySelector("#dos article >*");
let marginA2 = document.querySelector("#dos article:nth-of-type(2) >*");
let widthArticle = document.querySelector("#dos article");
let widthArticle2 = document.querySelector("#dos article:nth-of-type(2)");
let section2bImg = document.querySelector("#dos");

const _COLOR = "rgb(86, 22, 138)";
const _COLOR2 = "rgb(15, 56, 88)";
titular2.style = "font-size: 3rem; text-decoration: underline";

parrafo.innerHTML = "¿Cómo se hace esto?";
titular1.style.backgroundColor = _COLOR;
titular1br.style.borderRadius = "3em"
backgroundA2.style.backgroundColor = _COLOR2;
titular2.innerHTML = "¿Qué pasa pisha?";
margin.style.margin = "1.5em";
marginA2.style.margin = "1.5em";
widthArticle.style.width = "30%";
widthArticle2.style.width = "40%";
section2bImg.style.backgroundImage = "url('img/cascada.jpg')";