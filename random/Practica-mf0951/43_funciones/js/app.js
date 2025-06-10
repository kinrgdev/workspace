//? Funciones
let salida = document.getElementById('salida');

//*creación de la función
function mostrar() {
    salida.innerHTML = "Texto <br> <b>¡Soy un gusiluz!</b>" //Esto no funciona
}

//*invoca la función
////mostrar();

let boton = document.querySelector('button');
boton.addEventListener('click', mostrar);

//*creación de la función autoinvocada
// (function mostrar2() {
// salida.innerHTML = "Texto";
// })();

//? Eventos

//! No se debe hacer
//let boton = document.querySelector('button');

//boton.onclick = mostrar;

//* Así sí. Método. Se le asigna un "listener" se añade dos parámnetros.

//Ejercicio 1

let color = document.getElementById('salida');

function colorView() {
    salida.style.backgroundColor = "#a71a1a";
    salida.style.background = "url(../img/galaxy.jpg) center";
    salida.style.backgroundBlendMode = "darken"
    salida.style.color = "#ddc660";
    salida.style.fontFamily = "'tektur', 'sans-serif'";
    salida.style.width = "60%";
    salida.style.height = "60%";
    salida.style.paddingBlock = "2rem";
    salida.style.boxShadow = "3px 3px 36px 36px rgb(100, 63, 14) inset";
}

boton.addEventListener('click', colorView);

//Ejercicio2

let salida2 = document.getElementById('salida2');
let section = document.getElementById('phantom');
let botonPhantom = document.querySelector('#phantom button');
let botonResurrection = document.querySelector('#phantom button:nth-of-type(2)');

function work() {
    salida2.innerHTML = 'Hola Pesicola';
    salida2.style.fontSize = "2em";
    salida2.style.padding = "3em";
    salida2.style.color = "rgb(212, 48, 19)";
    salida2.style.backgroundColor = "rgba(8, 8, 5, 0.84)";
    section.style.background = "url(../img/dbz-1.webp) center no-repeat";
    section.style.backgroundColor = "rgb(75, 61, 13)";
    section.style.backgroundSize = "100%";
    section.style.backgroundBlendMode = "luminosity"
    botonPhantom.style.display = 'none';
}

botonPhantom.addEventListener('click', work);

//Reversión de Ejercicio 2

function reverse() {
    salida2.innerHTML = '';
    section.style.background = "initial";
    botonPhantom.style.display = 'block';
}

botonResurrection.addEventListener('click', reverse);
