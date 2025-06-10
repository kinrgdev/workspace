let salida = document.getElementById('array');
let salida2 = document.getElementById('array2');
let salida3 = document.getElementById('array3');
const objetos = {
    animal: 'perro',
    comida: 'pizza',
    país: 'Islandia',
    coche: "Impala '67",
    anime: 'Dragon Ball'
};

objetos.comida = 'helado'; //? reasignar valores de una propiedad
objetos.arbol = 'platanero'; //? nuevas propiedades
salida.innerHTML = objetos.arbol;
//!miArray2.innerHTML = objetos.coche;
//*Siempre imprimirá el último. Para más hay que usar for/in

const miArray2 = [7, 'Hola Mundo', true, false, undefined];

miArray2[1] = 'Hola Mundo';

salida2.innerHTML = miArray2[1];
salida3.innerHTML = miArray2.length;

let salidas = document.getElementsByClassName('arrays');
//? Hay que hacerlo con clases

const goku = {
    nombre: 'Goku,',
    raza: 'saiyan,',
    flaqueza: 'ingenuo,',
    edad: 45
};

const arreglos = [
    'Vegeta.',
    'saiyan',
    'orgullo'
];

salidas[0].innerHTML = goku.nombre;
salidas[1].innerHTML = goku.raza;
salidas[2].innerHTML = goku.flaqueza;
salidas[3].innerHTML = arreglos[0];





