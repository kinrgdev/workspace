/*FUNCIONES: RECIBE ARGUMENTOS LO QUE PERMITE CAMBIAR EL CONTENIDO DE
MANERA DINÁMINCA DE LO QUE SE ENCUENTRA DENTRO.
EL VALOR QUE TENDRÁ UN ARGUMENTO VA A SER IGUAL AL VALOR QUE LE PASEMOS
EN EL PARENTESIS: iterar (valor de argumento)*/
/* 
function iterar () {
    const numeros = [1, 2, 'Hola', 4, 5]

    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}

iterar()
iterar()    ////Ejecuta el código dos veces
*/
//-------------

/*Para que ejecute otra cosa que no nea números*/
/*function iterar (arg1) { //ARGUMENTO
    
    for (let i = 0; i < arg1.length; i++) {
        console.log(arg1[i]);
    }
}

const numeros = [1, 2, 'Hola', 4, 5] //ARRAY
const nombres = ['Pedro', 'Juan', 'Felipe', 'Chancho', 'Chanchín']//ARRAY
iterar(numeros) //PARÉMETRO
iterar(nombres) //PARÁMETRO
*/

//------------------ ---------------------//

function suma(a, b) {
    return a + b; /*ESTO LO DEVUELVE PARA Q SEA ASIGNADA A OTRA CONSTANTE
    CUANDO SE EJECUTE LA FUNCIÓN (a, b) CON EL VALOR DE UNO 1, 2...
    SE PASARÁ A LA IZQUIERDA (LO QUE SE ASIGNA A LA CONSTANTE ES EL VALOR DE 3.
    ESTO PERMITIRÁ IMPRIMIR EL RESULTADO EN LA CONSOLA */
   
    /*SIN RESTORNO NO DEFINIDO*/ //console.log(a+b); //*No imprime nada pq tiene que llamar a la función
}

//*Llamada a la función a= 1 b= 2
//*******suma(1, 2)

//Para utilizarlo para después:
const resultadoSuma1 = suma(1, 2) //3
const resultadoSuma2 = suma(5, 6) //11
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)
////console.log('resultado', resultadoSuma1);
console.log('resultado', resultadoSuma3); //3+11 = 14

//////////////V97

/*TODAS LAS FUNCIONES DE JS SIN INDICAR UN VALOR DE RETORNO ESTA NOS RETORNA
INDEFINIDO. ASÍ QUE DESPUÉS DE LA LÍNEA DE FUNCTION HAY QUE ESCRIBIR OTRA
CON LA PALABRA RESERVADA RETURN*/


