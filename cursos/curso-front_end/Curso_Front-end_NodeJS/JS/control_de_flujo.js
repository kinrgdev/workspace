///CONTROL DE FLUJO:

//IF and ELSE

/*Nos permite realizar iteraciones o evaluar condiciones
Se puede evaluar una condición si esta tiene el valor de true o false, y en el
caso de que esta tenga el valor de true, se puede ejecutar lógica, pero en el
caso de que tenga false puedo saltarme la lógica que ejecumtamos     
*/

//Estructura:
/*
if () {

}else{

}
*/

if(true){
    ////console.log('estoy dentro de un if');
}
if(false){
    ////console.log('estoy dentro de un if');//Se salta esta ejecución
}

//const edad = 10
const edad = 5
if (edad > 5 && edad < 18) { //Mayor de 5 años pero también menos de 18 años
    ////console.log('Puede jugar');
}else{ //siempre se debe escribir else después de if. Si if no se cumple, va a salta a else
    ////console.log('No puede jugar :(');
}
////console.log('Fin de programa');

//--------------------------------------------

//WHILE

/*Itera hasta el fin de los siglos a menos que le inidiquemos lo contrario*/

//let x = 0
//while( x < 5) {
//x es menor que 5 así que lo imprime, imprime 0 y lo incrementa hasta el valor máximo menor a 5
    //console.log(x);
    //x++
//}

let x = false
while(x){
    console.log(x);
    x = false
}
////console.log('Fin del loop');

/*Lo que se tiene que evaluar en while es el valor de true o false.
Si se valua en true el loop continua
Si se valua en false el loop sale */

//--------------------------------------------

//SWITCH

/*Nos permite ejecutar una instrucción u otra instrucción*/
let y = 2;
switch(y){
    //Si se pone más de un case, devuelve la última instrucción
    //Para que salga default hay que poner un string
    case 1: ////console.log('Me llamo Joaquín');
    break; //evita que salta a la próxima evaluación
    case 2: ////console.log('Estoy enamorado de Eva Green');
    break;
    case 3: ////console.log('y Eva Green de mí');
    break;
    default: ////console.log('Joaquín x Eva Green');
    break;  
}

//--------------------------------------------

//FOR

/*Nos permite iterar o encontrarnos dentro de un loop hasta que se cunmpla una condición*/

/* dentro de:() > Tres instrucciones;
1º El valor de la varaiable a iterar:  (let i = 0;
2º Condición que esta tiene que cumplir para que el loop se siga ejecutando: i < 10;
3º Indicar operación que realice una vez terminado el loop: i++)
*/
/*for (let i = 0; i < 10; i++) {
    i vale 0, se escribe en la consola
    · i++; incrementamos su valor en 1
    · i<10; ¿1 es menor a 10? Sí.
    · Se imprime 1 en la consola.
    · Ahora i vale 1 se incrementa y todo el proceso se ejecuta hasta que
    el valor de i es 9.
    · Cuando el valor de i es 9, este se incrementa en uno, valiendo 10.
    Este pregunta si 10 es menor de 10 (<10), y como no es menor, detiene
    el loop 
    ////console.log(i);
}*/

//Es últi para iterar los array

//---ACCEDER A LOS ELEMENTOS DE UN ARRAY CON FOR-----//

const numeros = [1, 2, 'Hola', 4, 5]
            /*TODOS LOS ARRAY QUE DEFINIMOS TIENEN LA PROPIEDAD LENGHT.
            NOS PERMITE OBTENER EL LARGO DE UN ARRAY EN ESTE CASO:
            [1, 2, 3, 4, 5]
            PODEMOS ACCEDER A LOS ÍNDICES DE CADA ELEMENTO DEL ARRAY
            (numeros[0]) PARA ACCEDER AL PRIMER ELEMENTO DEL ARRAY
            LOS ÍNDICES EN JS Y EN OTROS LENGUAJES, EMPIEZAN DESDE EL 0*/
////console.log(numeros[2]);

for (let i = 0; i < numeros.length; i++) {
    /*EL VALOR DE i ES CORRECTO PQ EL ÍNDICE ES 0, PERO EL INDICADOR DE MENOR
    TIENE QUE SER EL LARGO DE NUESTRO ARRAY.
    EN ESTE CASO, EL LARGO ES 5, PERO EL ÍNDICE ES 4
    ASÍ QUE USAMOS LA PROPIEDAD DE LENGHT*/

////console.log(i); //Imprime todos los índices
//// console.log(numeros[i]); //Imprime todos los elementos


}