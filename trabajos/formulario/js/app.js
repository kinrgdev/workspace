let miFormulario = document.querySelector('form');
let inputs = document.querySelectorAll('input');
const seleccion = document.getElementById('seleccion');
const error = document.querySelectorAll('fieldset p');
const oki = document.querySelectorAll('input, select');
const colorError = 'rgb(231, 9, 9)';
const colorOk = 'rgb(26, 165, 13)';
const colorText = 'rgb(228, 232, 235)';

function vNombre() {
    const valor = inputs[0].value;
    if (valor.replace(/\s+/g, ' ').length < 3) {
        error[0].classList.add('visible');
        oki[0].style.backgroundColor = colorError;
        oki[0].style.color = colorText;
        return false;
    } else {
        error[0].classList.remove('visible');
        oki[0].style.backgroundColor = colorOk;
        oki[0].style.color = colorText;
        return true;
    }
}

function vApellido() {
    const valor = inputs[1].value;
    if (valor.replace(/\s+/g, ' ').length < 3) {
        error[1].classList.add('visible');
        oki[1].style.backgroundColor = colorError;
        oki[1].style.color = colorText;
        return false;
    } else {
        error[1].classList.remove('visible');
        oki[1].style.backgroundColor = colorOk;
        oki[1].style.color = colorText;
        return true;
    }
}

function vEmail() {
    const valor = inputs[2].value.trim().toLowerCase();
    const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor);
    if (!emailValido) {
        error[2].classList.add('visible');
        oki[2].style.backgroundColor = colorError;
        oki[2].style.color = colorText;
        return false;
    } else {
        error[2].classList.remove('visible');
        oki[2].style.backgroundColor = colorOk;
        oki[2].style.color = colorText;
        return true;
    }
}

function vPassword() {
    const valor = inputs[3].value;
    const passValido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|:;,.<>?/-]).{7,}$/.test(valor);
    if (!passValido) {
        error[3].classList.add('visible');
        oki[3].style.backgroundColor = colorError;
        oki[3].style.color = colorText;
        return false;
    } else {
        error[3].classList.remove('visible');
        oki[3].style.backgroundColor = colorOk;
        oki[3].style.color = colorText;
        return true;
    }
}

function cPassword() {
    const valor = inputs[3].value;
    const confirmValor = inputs[4].value;
    if (confirmValor === "") {
        error[4].classList.add('visible');
        oki[4].style.backgroundColor = colorError;
        oki[4].style.color = colorText;
        return false;
    }
    if (valor !== confirmValor) {
        error[4].classList.add('visible');
        oki[4].style.backgroundColor = colorError;
        oki[4].style.color = colorText;
        return false;
    } else {
        error[4].classList.remove('visible');
        oki[4].style.backgroundColor = colorOk;
        oki[4].style.color = colorText;
        return true;
    }
}

function vEdad() {
    const valor = inputs[5].value;
    if (valor === "") {
        error[5].classList.add('visible');
        error[6].classList.remove('visible');
        oki[5].style.backgroundColor = colorError;
        oki[5].style.color = colorText;
        return false;

    } else if (isNaN(valor) || valor.length == 0 || valor == null || valor < 18) {
        error[5].classList.remove('visible');
        error[6].classList.add('visible');
        oki[5].style.backgroundColor = colorError;
        oki[5].style.color = colorText;
        return false;
    } else {
        error[5].classList.remove('visible');
        error[6].classList.remove('visible');
        oki[5].style.backgroundColor = colorOk;
        oki[5].style.color = colorText;
        return true;
    }
}

function vCheckbox() {
    if (!inputs[6].checked) {
        error[7].classList.add('visible');
        return false;
    } else {
        error[7].classList.remove('visible');
        return true;
    }
}

function vSelect() {
    const valor = seleccion.value;
    if (valor) {
        document.body.style.backgroundImage = `url('${valor}')`;
        error[8].classList.remove('visible');
        oki[7].style.backgroundColor = colorOk;
        oki[7].style.color = colorText;
        return true;
    } else {
        document.body.style.backgroundImage = 'none';
        error[8].classList.add('visible');
        oki[7].style.backgroundColor = colorError;
        oki[7].style.color = colorText;
        return false;
    }
}

function validarFormulario() {
    let valido = true;
    if (!vNombre()) valido = false;
    if (!vApellido()) valido = false;
    if (!vEmail()) valido = false;
    if (!vPassword()) valido = false;
    if (!cPassword()) valido = false;
    if (!vEdad()) valido = false;
    if (!vCheckbox()) valido = false;
    if (!vSelect()) valido = false;

    return valido;
}

inputs[0].addEventListener('blur', vNombre);
inputs[1].addEventListener('blur', vApellido);
inputs[2].addEventListener('blur', vEmail);
inputs[3].addEventListener('blur', vPassword);
inputs[4].addEventListener('blur', cPassword);
inputs[5].addEventListener('blur', vEdad);
inputs[6].addEventListener('blur', vCheckbox);
seleccion.addEventListener('change', vSelect); //* Evento para el cambio de la imagen
seleccion.addEventListener('blur', vSelect); //* Evento para arrojar el error si no selecciona la imagen

//* EJEMPLO DE USABILIDAD EN PLACEHOLDER */

inputs[0].addEventListener('focus', function () {
    inputs[0].setAttribute('placeholder', 'Ej: Ana María');
    inputs[0].classList.add('foco');
});

inputs[0].addEventListener('blur', function () {
    inputs[0].removeAttribute('placeholder');
    inputs[0].classList.remove('foco');
});

inputs[1].addEventListener('focus', function () {
    inputs[1].setAttribute('placeholder', 'Ej: Rodríguez');
    inputs[1].classList.add('foco');
});

inputs[1].addEventListener('blur', function () {
    inputs[1].removeAttribute('placeholder');
    inputs[1].classList.remove('foco');
});

inputs[2].addEventListener('focus', function () {
    inputs[2].setAttribute('placeholder', ' Ej: micorreo@gmail.com');
    inputs[2].classList.add('foco');
});

inputs[2].addEventListener('blur', function () {
    inputs[2].removeAttribute('placeholder');
    inputs[2].classList.remove('foco');
});
inputs[3].addEventListener('focus', function () {
    inputs[3].setAttribute('placeholder', ' Ej: xXxX1-x');
    inputs[3].classList.add('foco');
});

inputs[3].addEventListener('blur', function () {
    inputs[3].removeAttribute('placeholder');
    inputs[3].classList.remove('foco');
});
inputs[4].addEventListener('focus', function () {
    inputs[4].setAttribute('placeholder', ' Ej: xXxX1-x');
    inputs[4].classList.add('foco');
});

inputs[4].addEventListener('blur', function () {
    inputs[4].removeAttribute('placeholder');
    inputs[4].classList.remove('foco');
});
inputs[5].addEventListener('focus', function () {
    inputs[5].setAttribute('placeholder', ' Ej: 18');
    inputs[5].classList.add('foco');
});

inputs[5].addEventListener('blur', function () {
    inputs[5].removeAttribute('placeholder');
    inputs[5].classList.remove('foco');
});

miFormulario.addEventListener('submit', function (evento) {
    if (!validarFormulario()) {
        evento.preventDefault();
    }
});