/* Declaración de variables */

let c = 37, d = 93;  //TODO > Declaramos las varaibles c y d, y le asignamos el valor 37 y 93 respectivamente.

/* Llamada a la función y asignación del resultado */
let resultados = aritmetica(c, d); 
//TODO > Declaramos la variable 'resultados' y le asignamos el valor que devolverá la futura función 'asignacion'.
//TODO > Entre paréntesis, pasamos los parámetros 'c' y 'd' a la función, la cual definiremos a continuación. 

/* Declaramos la función */
function aritmetica(c, d) {
  //TODO > Declaramos la constante 'operaciones', que será el objeto para agrupar diferentes propiedades.
  const operaciones = {
    //TODO > Las propiedades van dentro de llaves {} const o let xxxxxxxxx = {propiedades};
    // Primer ejemplo de propiedades
    // Asignación simple. Como indica simplemente devuelve el valor que le indiquemos.
    simple: () => 73, 
    //? Añadimos la propiedad 'simple' con : 
    //? ()=> esto llama a la función y ejecutará la operación que indiquemos a continuación. En este caso es un número entero y nos devolverá literalmente lo que indiquemos.
    adicion: () => c + d,
    
    
};
}
function()