//Operadores de comparación

//Comparación: De vuelven true o false

//Comparación exacta
const resultado1 = 5 === 6 
const resultado2 = 5 === '5' 

//No estricta, strings pueden ser iguales a números si el valor es el mismo
const resultado3 = 5 == 6 
const resultado4 = 5 == 5 
const resultado5 = 5 == '5'
console.log(resultado1, resultado2, resultado3, resultado4, resultado5);

//menor que <, mayor que >
const resultado6 = 5 < 6
const resultado7 = 5 < 5
const resultado8 = 5 > 6
const resultado9 = 5 > 4

console.log(resultado6, resultado7, resultado8, resultado9);

//<= menor o igual, >= mayor o igual
const resultado10 = 5 <= 5
const resultado11 = 5 <= 6
const resultado12 = 5 >= 5
const resultado13 = 5 >= 6
console.log(resultado10, resultado11, resultado12, resultado13);

//Desigualdad
const resultado14 = 5 !== 6 //Estrictamente desiguales
const resultado15 = 5 != '5' //no estrictamente desiguales
console.log(resultado14, resultado15);