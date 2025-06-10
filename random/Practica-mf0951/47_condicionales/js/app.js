let salida = document.getElementById('salida');
let boton = document.querySelector('button');
let inputs = document.querySelectorAll('input');

//* if / else

// if (5 == 5) salida.innerHTML = 'verdadero'; //*Una sola

// if (5 == 5) {
// 	salida.innerHTML = 'Va a ser que sí';
// 	salida.style.backgroundColor = '#3f4e1b';
// 	salida.style.color = '#111';
// } else {
// 	salida.innerHTML = 'Va a ser que no';
// 	salida.style.backgroundColor = 'red';
// 	salida.style.color = '#111';
// 	salida.style.fontSize = '1.5rem';
// }

//*Ejercicio 0
function mostrarValor() {
	let valorInputUno = inputs[0].value;
	let valorInputDos = inputs[1].value;
	let compare = (valorInputUno < valorInputDos) ? "Es menor que" : "Es mayor que";
	salida.innerHTML = compare;
}

//boton.addEventListener('click', mostrarValor);

function mostrarValor2() {
	let valorInputUno = inputs[0].value;
	salida.innerHTML = valorInputUno;
}

// boton.addEventListener("click", mostrarValor2);

//******************************** Ejercicio 1 */
function compararValores() {
	//*** Recojo valores y convierto en Number *************
	let valorInputUno = parseFloat(inputs[0].value); //! parseFloat Pasa el tipo text a numero
	let valorInputDos = parseFloat(inputs[1].value);
	//*** Comparo valores *************
	// if (valorInputUno > valorInputDos) {
	// 	salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es mayor que el valor del Input Dos (${valorInputDos})`;
	// } else {
	// 	salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es menor que el valor del Input Dos (${valorInputDos})`;
	// }
	if (valorInputUno > valorInputDos) {
		salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es mayor que el valor del Input Dos (${valorInputDos})`;
	} else if (valorInputUno < valorInputDos) {
		salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es menor que el valor del Input Dos (${valorInputDos})`;
	} else {
		salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es igual que el valor del Input Dos (${valorInputDos})`;
	}
}

// boton.addEventListener("click", compararValores);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NOOOOOOOOOOOOOOOOOOOO
	// 	if (valorInputUno > valorInputDos && valorInputDos > valorInputTres) {         //!(${valorInputUno}) para meter variables en un string
	// 		salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es mayor que el valor del Input Dos (${valorInputDos})`; 
	// 		salida.innerHTML = `El valor del Input Dos (${valorInputDos}) es mayor que el valor del Input Tres (${valorInputTres})`; 
	// 	} else if (valorInputUno < valorInputDos && valorInputDos < valorInputTres){ 
	// 		salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es menor que el valor del Input Dos (${valorInputDos})`;
	// 		salida.innerHTML = `El valor del Input Dos (${valorInputDos}) es menor que el valor del Input Tres (${valorInputTres})`;
	// 	} else {
	//         salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es igual que el valor del Input Dos (${valorInputDos})`;
	//         salida.innerHTML = `El valor del Input Dos (${valorInputDos}) es igual que el valor del Input Tres (${valorInputTres})`;
	//     }
//}

//*******************************************Ejercicio 2 */
function compararMasValores() {
	//¿ *** Recojo valores y convierto en Number *************
	let valorInputUno = parseFloat(inputs[0].value);
	let valorInputDos = parseFloat(inputs[1].value);
	let valorInputTres = parseFloat(inputs[2].value);

	//¿ *** Comparo valores *************

	if (valorInputUno > valorInputDos && valorInputDos > valorInputTres) {
		salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es mayor que el valor del Input Dos (${valorInputDos}), y este es mayor que Input Tres (${valorInputTres})`;
	} else if (valorInputUno < valorInputDos && valorInputDos < valorInputTres) {
		salida.innerHTML = `El valor del Input Uno (${valorInputUno}) es menor que el valor del Input Dos (${valorInputDos}), y este es menor que Input Tres (${valorInputTres})`;
	} else {
		salida.innerHTML = "ni mayor ni menor ni nada";
	}
}

//boton.addEventListener("click", compararMasValores);

//******************************************? Ejercicio 3 */

function mummy() {
	let valorInputUno = parseFloat(inputs[0].value);
	let age = valorInputUno;

	let mensaje = '';

	if (age >= 125) {
		mensaje = '¿Eres un zombie?, no me comas por favor.';
	}
	else if (age >= 100) {
		mensaje = 'Matusalén, ¿pasaste miedo viviendo con los dinosaurios?';
	}
	else if (age >= 67) {
		mensaje = 'Estás jubilado ¿o no?';
	}
	else if (age === 41) {
		mensaje = 'Eres un puto pro al que le quedan 5 días para cumplir los 42';
	}
	else if (age >= 18) {
		mensaje = 'Eres mayor de edad.';
	}
	else {
		mensaje = 'Eres menor de edad.';
	}

	if (!isNaN(valorInputUno)) {
		salida.innerHTML = `Edad: ${valorInputUno} años <br> ${mensaje}`;
	}
}

//boton.addEventListener("click", mummy);

//******************************************? Ejercicio 4 */

let section = document.getElementById('uno');

function color() {
	let valorInputDos = (inputs[1].value);
	let valorInputTres = (inputs[2].value);

	if (valorInputDos.trim().toLowerCase() == 'si' || valorInputDos.trim().toLowerCase() == 'sí') {
		section.style.backgroundColor = 'orange';
	} else if (valorInputDos.trim().toLowerCase() == 'no') {
		section.style.backgroundColor = '';
	} else {
		salida.innerHTML = "Valor Input Dos Invalido <br>";
	}

	if (valorInputTres.trim().toLowerCase() == 'si') {
		salida.style.backgroundColor = 'yellow';
	} else if (valorInputTres.trim().toLowerCase() == 'no') {
		salida.style.backgroundColor = '';
	}else {
		salida.innerHTML += "Valor Input Tres Invalido <br>"; //+= usa los dos strings del else
	}

}

boton.addEventListener("click", color);
