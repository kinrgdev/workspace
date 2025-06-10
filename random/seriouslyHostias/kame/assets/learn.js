let escritura = document.getElementById('containerJS');
let img = document.createElement('img');
let h2 = document.createElement('h2');
let parrafo = document.createElement('p');


//* Variables
let saludo = "Hola Mundo";
let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consectetur a odit nostrum quibusdam, similique modi, ex, facere voluptas deserunt ea saepe? Quaerat!'
let num1 = 10;
let num2 = 20;
const ARREGLO = [30];

num2 = ARREGLO[0];
let resultado = num1 + num2;

h2.textContent = saludo;
img.src = './img/GokuVegeta.jpg';
img.setAttribute('style', 'width: 100px; float: left;');
img.alt = 'Goku y Vegeta';
parrafo.textContent = lorem;
escritura.append(h2, img, parrafo);
console.log(typeof (resultado));

//*

//* Funciones

let color = document.getElementById('containerJS');
let btns = document.querySelectorAll('button');

function cambioColor (newColor) {
    color.style.backgroundColor = newColor;
}

btns[0].addEventListener('click', () => { //Es lo mismo que function()
    cambioColor('red');
});

btns[1].addEventListener('click', () => {
    cambioColor('green');
});