Bucles

En vez de repetir una declaración, le decimos que con una se repita varias veces.

* for- recorre un bloque de código varias veces
* for/in- recorre las propiedades de un objeto
* for/of- recorre los valores de un objeto iterable
* while- recorre un bloque de código mientras una condición especificada sea verdadera
* do/while- también recorre un bloque de código mientras una condición especificada sea verdadera

*
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}*

 let text = "";

*for* (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}