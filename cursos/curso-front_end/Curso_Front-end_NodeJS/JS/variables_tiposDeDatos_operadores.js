//console.log('Hola Mundo')
//Tipos de datos
//String
//Boolean true false
//Null nulo
//Number 1234
//Undefined
//Object objeto

//Variables
// var (forma antigua, va al inicio del archivo, puede tener comportamiento extraño)
//let /*Es mutable*/
//const /*No mutable*/

//var miPrimeraVariable = 'lala'

let miPrimeraVariable = 'Mi primera Variable!'
////console.log(miPrimeraVariable);

//mutabilidad reasignar variables
miPrimeraVariable = 'Esto ha cambiado'
////console.log(miPrimeraVariable);

//boolean
let miBoolean = true
let miOtroBool = false

//Number
let miNumero = 0
let miNUmero2 = 12
let miNumero3 = -258
////console.log(miNumero, miNUmero2,miBoolean, miPrimeraVariable);

let undef 
////console.log(undef);

let nulo = null
////console.log(nulo);

//Objeto: es una agrupación de datos y estos datos hacen sentido entre si
//Los objetos no tienen variables, tienen propiedades        

//-----------------------------------

/*OBJETO VACÍO*/
const miPrimerObjeto = {}

/*OBJETO AGRUPACIONES DE DATOS QUE HACEN SENTIDO ENTRE SÍ*/
const miObjeto = {
    unNumero: 12,
    unString: 'Esto es una cadena de caracteres',
    unaCondicion: true,
}

////console.log(miObjeto.unaCondicion); //Para imprimir solo un objeto se pone el punto y el nombre del objeto, si solo se pone el nombre de la const imprimirá todo


//-----------------------------------


/*ARREGLOS*/
const arrVacio = []
const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

////console.log(arrVacio, arr); 

/*Más elementos al arreglo con .push agrega elementos*/
//Push es un método
arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable) 

////console.log(arrVacio); 

//Una lista es un subconjunto de array

//-----------------------------------



/*OPERADORES MATEMÁTICOS*/

const suma = 1+2
const restar = 1-2
const multiplicar = 2*3
const division = 9/3

////console.log(suma, restar, multiplicar, division);

// % Toma dos números los divide y retorna el valor que sobra
const modulo = 10 % 3
////console.log(modulo);

/*Incremento*/

//const num = 5
//num++
//console.log(num); !!ERROR!!
/*--------Da error porqué no se puede cambiar el valor de una constante
La palabra reservada const se utiliza para definir una variable,
const no nos deja cambiar el valor de una variable. Se pueden cambiar
las propiedades (números, string, aaray, etc.) pero no cambiar el
objeto*/

/*--------Para crear un incremento en  una variable hay que usar la palabra reservada
let*/

let num = 5
num++ //++ Incrementa el valor en una unidad, si hay 5, incrementará en 5
num++
num++
num++
num++

//num-- //-- Decremento
//num--
//num--
//num--
//num--

//Incrementar el número mayor que 1. Operador de asignación.
num += 5
num -= 5
num *= 5
num /= 2
////console.log(num);

//-----------------------------------


/*OPERADORES DE COMPARACIÓN: Comparaciones entre distintos tipos de datos
Estos devuelven un boolean. SE PUEDE HACER CON CONST Y LET*/

//Igualdad estricta

const resultado1 = 5 === 6 //=== Comparación estricta. > false
const resultado5 = 5 === '5' //== Comparación estricta con string > false porque debe ser del mismo tipo de dato

//Igualdad no estricta
const resultado2 = 5 == 6 //== Comparación no estricta > false
const resultado3 = 5 == 5 //== Comparación no estricta > true
const resultado4 = 5 == '5' //== Comparación no estricta > true porque tienen el mismo valor aunque no sean del mismo tipo de dato
////console.log(resultado1, resultado2, resultado3, resultado4, resultado5); 

//Menor que <

const result1 = 5 < 6 //True 5 es menor a 6
const result2 = 5 < 5 //False 5 no es menor a 5

//Mayor que >
const result3 = 5 > 6 //False 5 no es mayor que 6
const result4 = 5 > 4 //True 5 es mayor que 4

////console.log(result1, result2, result3, result4);

//Menor o igual
const rest1 = 5 <= 5 //True 5 es igual o menor a 5
const rest2 = 5 <= 6 //True 5 es igual o menor a 6

//Mayor o igual
const rest3 = 5 >= 5 //true 5 es igual o mayor a 6
const rest4 = 5 >= 6 //false 5 no es igual o mayor a 6

////console.log(rest1, rest2, rest3, rest4); 

//Desigualdad estricta
const rest5 = 5 !== 6 //True porque son exactamente distintos, si fuera un string seguiría dando true

//Desigualdad no estrictamente
const rest6 = 5 != '5' //False no son el mismo tipo de datos
////console.log(rest5, rest6);


//-----------------------------------

/*OPERADORES LÓGICOS*/

/*
or || (Normalmente se usa con dos valores true or false)
and &&
not !
*/

//OR > Busca el primer true
const resultadoOr1 = false || true //True pq valora si hay un true, si son todos false, dará false
const resultadoOr2 = false || false //False pq no hay ningún true
const resultadoOr3 = false || false || false || true //True pq hay un true
const resultadoOr4 = true || true //True, solo valora el primer valor
const resultadoOr5 = false || false //Para que el valor sea falso, ambos deben ser falsos
////console.log(resultadoOr1, resultadoOr2, resultadoOr3, resultadoOr4, resultadoOr5); 

//AND > Busca el primer false
const resultadoAnd1 = true && true //True porque ambos son true
const resultadoAnd2 = true && false //False porque hay un false
const resultadoAnd3 = true && true && true && true && false //False porque hay un false
////console.log(resultadoAnd1, resultadoAnd2, resultadoAnd3);

//NOT > Niega el valor y devuelve el contrario
const resultadoNot1 = !true //False pq da lo contrario
const resultadoNot2 = !false //True pq da lo contrario
console.log(resultadoNot1, resultadoNot2);

/*Los operadores de or y and hacen el short circuit evaluation.
Evaluan hasta que se encuentren con el primer valor que corten la operación
Or evalua hasta encontrar el primer true y si no lo encuentra arroja False*/

//OR con un string, número u objeto
const resultadoOr6 = false || false || 'Hola'|| 'Mundo' //imprime Hola
////console.log(resultadoOr6); 
/*Evalua hasta el primer elemento que evalua el true.
Strings, números, objetos... todos evaluan en true a excepción del 0 que se lo evalua como false
*/

//And con un string, número u objeto.
/*No se puede realizar ya que este operador evalua el false, pero sí funciones que estas retornen
true o false pero además hagan otras cosas, esas sí se van a ejecutar y si se va a cortar la
ejecución de la cadena
*/