let boton = document.querySelector('button');
//let boton2 = document.querySelector('button:nth-of-type(2)');
let output = document.getElementById('salida');

function botoncito() {
    // output.style.display = "block";
    output.style =
        "display: block; color: #a17171;"
}

//boton.addEventListener('click', botoncito);

//?classList

function ocultar() {
    //output.classList.add('oculto');
    output.classList.toggle('oculto');
}

boton.addEventListener('click', ocultar);

// function mostrar() {
//     output.classList.remove('oculto');
// }

//boton2.addEventListener('click', mostrar);

//* 2

let boton3 = document.getElementById('freezer');
let output2 = document.getElementById('salida2');

function coldDaemon() {
    output2.classList.toggle('visible');
}

boton3.addEventListener('click', coldDaemon);
output2.addEventListener('click', coldDaemon);

//* 3

let boton4 = document.querySelector('#tres > button'); //Coge hijo directo (Shunkanido)
let boton5 = document.querySelector('#tres button'); //Coge el primer button que encuentra sin importar la descendencia
let output3 = document.getElementById('salida3');

function shunkanido() {
    output3.classList.add('visible');
}

function vanish() {
    output3.classList.remove('visible');
}

boton4.addEventListener('click', shunkanido);
boton5.addEventListener('click', vanish);

