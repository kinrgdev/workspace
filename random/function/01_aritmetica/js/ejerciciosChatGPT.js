let salida = document.getElementById('salida');
let btn = document.querySelectorAll('button');

function sumacion(num1, num2) {
    return num1 + num2;
}

function viewSumacion() {
    let suma = sumacion(3, 3);
    suma = parseInt(suma);
    console.log('La suma es tipo:', typeof suma);
    salida.innerHTML = `La suma entre <br> number1 y number2 = ${suma}`;
}

btn[0].addEventListener('click', viewSumacion);

let salida2 = document.getElementById('salida2');
let number3 = 5;
let number4 = 17;

function restacion() {
    let resta = number3 - number4;
    resta = parseInt(resta);
    console.log('La restación es tipo:', typeof resta);
    salida2.innerHTML = `La resta entre <br> number3 y number4 = ${resta}`;
}

btn[1].addEventListener('click', restacion);

let salida3 = document.getElementById('salida3');
let number5 = 23;
let number6 = 2;
function multiplicar() {
    let multi = number5 * number6;
    multi = parseInt(multi);
    console.log('La multiplicación es tipo:', typeof multi);
    salida3.innerHTML = `La multiplicación entre <br> number5 y number6 = ${multi}`;
}

btn[2].addEventListener('click', multiplicar);

let salida4 = document.getElementById('salida4');
let number7 = 986;
let number8 = 3;

function division() {
    let divi = number7 / number8;
    divi = parseInt(divi);
    console.log('La división es tipo:', typeof divi);
    salida4.innerHTML = `La división entre <br> number7 y number8 = ${divi}`;
}

btn[3].addEventListener('click', division);