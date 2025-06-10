//*function nombreFuncion(){
//?codigo a ejecutar
//*}

function saludar() {
    console.log('Hola Mundo');
}

saludar();

let num1 = 2
let num2 = 5
let rest;
function sumar() {
    rest = num1 + num2;
}
sumar();
console.log(rest);

//*? Aritmetica */

let a;
let b;
let c;
let d;
let x;

//*1
function operacion1() {
    a = 6;
    b = 9;
    x = a + b;
    return x;
}

const resultado1 = operacion1();
console.log(('Operación 1 es igual a'), resultado1);

//*2

function operacion2() {
    a = 25;
    b = 13;
    x = a - b;
    return x;
}

const resultado2 = operacion2();
console.log(('Operación 2 es igual a'), resultado2);


//*3

function operacion3() {
    a = 7;
    b = 4;
    x = a * b;
    return x;
}

const resultado3 = operacion3();
console.log(('Operación 3 es igual a'), resultado3);

//*4

function operacion4() {
    a = 36;
    b = 6;
    x = a / b;
    return x;
}

const resultado4 = operacion4();
console.log(('Operación 4 es igual a'), resultado4);

//*5

function operacion5() {
    a = 5;
    b = 3;
    c = 2;
    x = a + b * c;
    return x;
}

const resultado5 = operacion5();
console.log(('Operación 5 es igual a'), resultado5);

//*6

function operacion6() {
    a = 10;
    b = 4;
    c = 3;
    x = (a - b) * c;
    return x;
}

const resultado6 = operacion6();
console.log(('Operación 6 es igual a'), resultado6);

//*7

function operacion7() {
    a = 8.5;
    b = 2.3;
    x = a + b;
    return x;
}

const resultado7 = operacion7();
console.log(('Operación 7 es igual a'), resultado7);

//*8 "División Con decimales"
function operacion8() {
    a = 15.9;
    b = 2.2;
    x = a / b;
    return x;
}

const resultado8 = operacion8();
console.log(('Operación 8 es igual a'), resultado8);

//*9

function operacion9() {
    a = 9;
    b = 2;
    c = 5;
    x = a * b - c;
    return x;
}

const resultado9 = operacion9();
console.log(('Operación 9 es igual a'), resultado9);

//*10

function operacion10() {
    a = 20;
    b = 4;
    c = 3;
    d = 5;
    x = (a / b) + (c * d);
    return x;
}

const resultado10 = operacion10();
console.log(('Operación 10 es igual a'), resultado10);

let num3 = 5;
let num4 = 7;
let num5 = 9;
function calcularOperacion() {
    x = num3 + num4 + num5;
    y = num3 * num4 * num5;
    z = num3 + (num4 / num5);
    return [x, y, z];
}

const resultadoCalcularOperacion = calcularOperacion();
console.log(('Calcular Operacion 1 es igual a'), resultadoCalcularOperacion[0]);
console.log(('Calcular Operacion 2 es igual a'), resultadoCalcularOperacion[1]);
console.log(('Calcular Operacion 3 es igual a'), resultadoCalcularOperacion[2]);

//*? Altura

//let salida = document.getElementById('salida');
//let btn = document.querySelectorAll('button');

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

function mostrarArea(){
    let area = calcularAreaRectangulo(23, 11);
    salida.innerText = `El área del rectángulo es ${area}`;
    //salida.innerText = salida.innerText === "" ? `El área del rectángulo es ${area}`: "";
    

}
//salida.innerText = ('El área rectángulo es', calcularAreaRectangulo(23, 11));
//salida.innerText = `El área rectángulo es ${area}`;
//btn[0].addEventListener('click', mostrarArea);
console.log('El área rectángulo es', calcularAreaRectangulo(23, 11));

