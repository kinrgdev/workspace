//Tagname 
let salida = document.getElementById('salida');
let articuloUno = document.querySelector('#uno article');
// HTML Collection
let botones = document.getElementsByTagName('button');
let fondo = document.getElementsByClassName('dom');
//Node List
let secciones = document.querySelectorAll('section');
let btn = document.querySelectorAll('button');
let img = document.querySelectorAll('img');

botones[0];

salida.innerHTML = botones.length

function btn1() {
    secciones[0].style.backgroundColor = 'blue';
    btn[0].style.padding = '100px';

}

botones[0].addEventListener('click', btn1);

function btn2() {
    secciones[1].style.backgroundColor = 'orange';
    btn[1].style.padding = '200px';
    img[0].src = '/img/dbz8.jpg';
    img[1].src = '/img/dbz8.jpg';
}

botones[1].addEventListener('click', btn2);

//******* ********/

//const paragraphs = document.getElementsByTagName('p');
//?crea un elemento p

//console.log("BEFORE UPDATE: ", paragraphs);

//const newParagraph = document.createElement('p');
//document.body.appendChild(newParagraph);
//?Lo metee en el documento

//console.log("AFTER UPDATE: ", paragraphs);