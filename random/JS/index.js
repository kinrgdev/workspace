console.log('Hola Mundo')
//Tipos de datos en JS
//String con comillas '' o ""
//Boolean: true o false
//Null: nulo o vacío, sin datos
//Number: número sin comillas > 1345645, si se pone comillas será un string
//Undefined: no definida
//Object: objeto, para agrupar todos los tipos de datos

//Definición de variables:
//var: la antigua forma, en desuso porque var la declara al inicio del documento y puede generar problemas
//let: indicamos una variable sin saber el valor que va a tener
//const

let miPrimeraVariable = 'Mi primera variable'
console.log(miPrimeraVariable);

//Mutabilidad
miPrimeraVariable = 'Esto ha cambiado'
console.log(miPrimeraVariable);

//Boolean
let miBoolean = true
let miOtroBool = false

//Numbers
let miNumero = 0
let miNumero2 = 12
let miNumero3 = -25

console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

let undef 
console.log(undef);

let nulo = null
console.log('nulo', 12, nulo);
console.log(nulo);

//Objeto vacío

const miPrimerObjeto = {}

//Objeto: agrupaciones de datos que hacen sentido entre sí

const miObjeto = {
    unNumero: 12,
    unString: 'Esto es un string',
    unaCondicion: true,
}

console.log(miObjeto);
console.log(miObjeto.unNumero); //Para imprimir solo una propiedad del objeto

//Arreglos

const arrVacio = []
const arr = [1, 2, 'Hola', miObjeto]
console.log(arrVacio, arr);

//Añadir arreglos
arrVacio.push(5)
arrVacio.push(3)
arrVacio.push('C18')
arrVacio.push(true)
arrVacio.push('Goku')
arrVacio.push(17)
arrVacio.push(miPrimeraVariable)

console.log(arrVacio);
