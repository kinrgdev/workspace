//*Aritméticos
let salida = document.getElementById('salida');
let boton = document.querySelector('button');
let input = document.querySelector('input');

//let x = 12;
let y = 7;
let z = 3;

//salida.innerHTML = x % y;
//salida.innerHTML = ++x; //Cuando es subfijo, actua después.
//salida.innerHTML = x; //En la siguiente linea, vale +1 (13)

//*Asignación

//x += y;
//salida.innerHTML = x;

//x -= z;
//salida.innerHTML = x;
//salida.innerHTML += '<br>Hey!';

//x %= y; //!Mirar/investigar
//salida.innerHTML += "<br>" + x;

let a = 25;
let b = 15;
let c = 8;

function opera() {
    let x = parseFloat(input.value);
    
    let rest = [
        x = input.value,
        a * x,    
        b / x,    
        c % x,    
        a += x,    
        b -= x,    
        x += x     
        
    ];

    salida.innerHTML = `Resultados:<br>
        Shenron es igual a ${rest[0]}<br>
        a * x = ${rest[0]}<br>
        b / x = ${rest[1]}<br>
        c % x = ${rest[2]}<br>
        a += x : ${rest[3]}<br>
        b -= x : ${rest[4]}<br>
        x += x : ${rest[5]}<br>`;
}

boton.addEventListener('click', opera);



