Condicionales

Comparación lógica de operadores: true o false.

= asignación.

x = 5

* == igual a

x == 8	false	
x == 5	true	
x == "5"	true

* === igual e igual de valor

equal value and equal type	
x === 5	true	
x === "5"	false

* !=	not equal	x != 8	true	
x != 8	true

* !==	not equal value or not equal type	

x !== 5	false	
x !== "5"	true	
x !== 8	    true

* >	mayor que	x > 8	false	
* <	menor que   x < 8	true	
* >= mayor que e igual a    x >= 8	false	
* <= menor que o igual a	x <= 8	true

**

if (age < 18) text = "Too young to buy alcohol";

**

x = 6
y = 3

&&	and	(x < 10 && y > 1) is true //Todas tienen que ser true, si falla una false
||	or	(x == 5 || y == 5) is false	//Con una que sea verdadero ya es true
!	not	!(x == y) is true //Si es falso devuelve true

**

* Operador condicional ternario

*variablename = (condition) ? value1:value2*

let voteable = (age < 18) ? "Too young":"Old enough";

* Comparación de diferentes tipos:

2 < 12	true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	//compara el primer caracter
"2" > "12"	true	//compara el primer caracter
"2" == "12"	false

* Coalescing Operator (??): null or undefined

let name = null;
let text = "missing";
let result = name ?? text; //si name no es null o unde... devuelve el valor de name

document.getElementById("demo").innerHTML = "The name is " + result; 

The name is missing.


*******

if/else/else if

Se utiliza ifpara especificar un bloque de código que se ejecutará, si una condición especificada es verdadera.
Se utiliza elsepara especificar un bloque de código que se ejecutará, si la misma condición es falsa.
Se utiliza else ifpara especificar una nueva condición para probar, si la primera condición es falsa.
Se utiliza switchpara especificar muchos bloques alternativos de código que se ejecutarán.


Un input siempre devuelve un string.
Un div no puede tener un value

***

|| da true sí una de las dos es true