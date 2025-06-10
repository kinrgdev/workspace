//01_get-query
let lesson = document.getElementById('lesson');

lesson.innerHTML = "Hola Mundo"; 
lesson.style.textAlign = 'center';

//

let salida = document.getElementById('salida');
let salidaP = document.querySelector('#salida p');
const _COLOR = "rgb(138, 68, 22)";

//salida.innerHTML = 'Centrate Joaquín';
salida.style.backgroundColor = _COLOR;
salidaP.innerHTML = 'Tú puedes Joaquín';

//


let salida2 = document.getElementById('salida2');
let salida2img = document.querySelectorAll('#salida2 img');
const _COLOR2 = 'rgba(31, 10, 68, 0.871)';

//salida2.style.backgroundImage = 'url("img/freezer.png")';
//salida2.style.backgroundRepeat = 'no-repeat';
//salida2.style.backgroundPosition = 'center';
salida2img[0].src = ('img/shenron.png');
salida2img[0].style.width = ('80%');
salida2img[1].src = ('img/dragonBalls.png');
salida2img[1].style.width = ('30%');
salida2.style.backgroundColor = _COLOR2;
salida2.style.borderRadius = '100%';

//

let salida3 = document.getElementById('salida3');
let imgSalida3 = document.getElementById('img');
let salida3Text = document.getElementsByClassName('text');
let salida3Color = document.getElementsByClassName('color');
let salida3img = document.querySelector('#salida3 img');

salida3.style.borderRadius = '2em';
salida3Text[0].innerHTML = ('Primer párrafo');
salida3Text[1].innerHTML = ('Segundo párrafo');
salida3Color[0].style.backgroundColor = 'red';
salida3Color[0].style.border = 'none';
salida3Color[0].style.margin = '2% auto';
imgSalida3.style = 'width: 100%; border: none; margin: 0 auto;';
imgSalida3.style.background = 'url("img/auraSS1.png") center no-repeat';
imgSalida3.style.backgroundSize = 'cover';
salida3img.src = ("img/goku-SS.png");

