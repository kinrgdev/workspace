let salida = document.getElementById('salida');
let boton = document.querySelector('button');

//Bucles
//****** */ for

let numero = 10;

// numero += 5;
// numero += 5;
// numero += 5;
// numero += 5;
// salida.innerHTML = numero; //?30
////////////////

//for (let i = 0;) //i de iteración = 0 //* i empieza por valer 0
//for (let i = 0; i < 5;) //*cada vez que i es menor a 5, suma 5 hasta que ya no es menor
//for (let i = 0; i < 5; i++){}  //*iteración ++
////////////////
//? Forma 1 *La más legible*
//for (let i = 0; i < 5; i++) {
  //  numero += 5; //*Suma 5 en cada iteración
    //salida.innerHTML = numero;
//}

//? Con Array
let num = [10, 20, 30, 40, 50];

for (let i = 0; i < num.length; i++){
    num[i] += 5; //*Suma 5 en cada iteración, pero se pueden poner más iteraciones
} 
//salida.innerHTML = num.join(', ');

//************************************* Ejercicio 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
let num2 = [5, 10, 13, 20, 35, 102];
let resultado = '';
for(let i = 0; i < num2.length; i++){
    if (num2[i] % 2 == 0) {
        resultado += num2[i] + ' es un número par. <br><br>';
    }else{
        resultado += num2[i] + ' es un número impar. <br><br>';
    }
}
//salida.innerHTML = resultado;

//************************************* Ejercicio 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

let botones = document.querySelectorAll('button');

for (let i = 0; i < botones.length; i++){
    botones[i].addEventListener('click', miFuncion);
    function miFuncion(){
        salida.innerHTML += 'x <br>';        
    }  
    
}

/****** */
//TODO Forma 2
//let i = 0;
//for (; i < 5;) {
//  numero += 5;
//i++; //!Si no se pone esto, entra en bucle infinito y no recarga la web
//}
//salida.innerHTML = numero;

//TODO Forma 3
//let i;
//for (i = 0; i < 5;) {
//  numero += 5;
//i++; //!Si no se pone esto, entra en bucle infinito y no recarga la web
//}
//salida.innerHTML = numero;
/****** */
