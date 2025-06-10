let array = document.getElementById('array');

const miObjeto = {
    nombre: "Joaquín",
    apellido: "Rodríguez",
    edad: 41 //En la última pareja no hay coma. ; al corchete de cierre
};

//cambio de valor de una propiedad
miObjeto.nombre = "Joaquín";
array.innerHTML = miObjeto.edad;


//crear nuevas propiedades
miObjeto.deporte = "pádel";

array.innerHTML = miObjeto.deporte;


//Arrays

const miArray = [10, 20, "Hola", true, undefined, miObjeto];

miArray[1] = 50;

array.innerHTML = miArray[1];
array.innerHTML = miArray.length;

//Ejercicio

const miObjeto1 = {
    nombre: "Goku",
    raza: "saiyan",
    edad: 45,
    flaqueza: "confianza"
};

const miArreglo = [
    "Freezer",
    "demonio de hielo",
    "Sin datos",
    "subestimación",
    "malvado"
];

let salida = document.getElementsByClassName('salidas');

//?Colección de objetos HTML
salida[0].innerHTML = miObjeto1.nombre;
salida[1].innerHTML = miObjeto1.raza;
salida[2].innerHTML = miArreglo[0];
salida[3].innerHTML = miArreglo[1];

//

let salida2 = document.getElementsByClassName('salidas2');
const newObjet = {
    nombre: "Vegeta",
    raza: "saiyan",
    edad: 48,
    flaqueza: "orgullo"
};

const myArray = [
    "Bulma",
    "Trunks",
    "Bra",
    "Gohan",
    "Goten"
];

salida2[0].innerHTML = newObjet.nombre;
salida2[1].innerHTML = newObjet.raza;
salida2[2].innerHTML = myArray[0];
salida2[3].innerHTML = myArray[1];

