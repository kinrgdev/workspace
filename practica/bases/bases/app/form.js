const miFormulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const emailCinput = document.getElementById('confirmEmail');
const edadInput = document.getElementById('edad');
const fechaInput = document.getElementById('fecha');
const telefonoInput = document.getElementById('telefono')
const passwordInput = document.getElementById('password');
const passwordCinput = document.getElementById('confirmPassword');
const projectsInput = document.getElementById('numProjects');
const checkboxInput = document.getElementById('privacidad');
const seleccionPro = document.getElementById('seleccionProjects');
const seleccionImg = document.getElementById('seleccionImg');
const rangoInput = document.getElementById('satisfaccion');
const outputSatisfaccion = document.getElementById('outputSatisfaccion');
const colorInput = document.getElementById('colorFavorito');
const archivoInput = document.getElementById('archivo');
const archivoNombre = document.getElementById('archivoNombre');
const previewImg = document.getElementById('previewImagen');
const urlInput = document.getElementById('paginaWeb');
const navegadorInput = document.getElementById('navegador');

const errorNombre = document.getElementById('errNombre');
const errorApellido = document.getElementById('errApellido');
const errorEmail = document.getElementById('errEmail');
const errorCemail = document.getElementById('errCemail');
const errorEdad = document.getElementById('errIntEdad');
const errorMayorEdad = document.getElementById('errMayorEdad');
const errorFecha = document.getElementById('errFecha');
const errorMayorFecha = document.getElementById('errMayorFecha');
const errorTelefono = document.getElementById('errTelefono');
const errorPassword = document.getElementById('errPassword');
const errorCpassword = document.getElementById('errCpassword');
const errorRadio = document.getElementById('errRadio');
const errorSelNumProjects = document.getElementById('errNumProjects');
const errorPrivacidad = document.getElementById('errPrivacidad');
const errorSelectProjects = document.getElementById('errSelPro');
const errorSelectImg = document.getElementById('errSelImg');
const errorSatisfaccion = document.getElementById('errSatisfaccion');
const errorColor = document.getElementById('errColor');
const errorArchivo = document.getElementById('errArchivo');
const errorUrl = document.getElementById('errUrl');
const errorNavegador = document.getElementById('errNavegador');

function vNombre() {
    const valor = nombreInput.value;
    if (valor.replace(/\s+/g, ' ').length < 3) {
        errorNombre.classList.add('visible');
        nombreInput.classList.add('backgroundColorError');
        nombreInput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorNombre.classList.remove('visible');
        nombreInput.classList.add('backgroundColorOk');
        nombreInput.classList.remove('backgroundColorError');
        return true;
    }
}

function vApellido() {
    const valor = apellidoInput.value;
    if (valor.replace(/\s+/g, ' ').length < 3) {
        errorApellido.classList.add('visible');
        apellidoInput.classList.add('backgroundColorError');
        apellidoInput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorApellido.classList.remove('visible');
        apellidoInput.classList.add('backgroundColorOk');
        apellidoInput.classList.remove('backgroundColorError');
        return true;
    }
}

function vEmail() {
    const valor = emailInput.value.trim().toLowerCase();
    const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor);
    if (!emailValido) {
        errorEmail.classList.add('visible');
        emailInput.classList.add('backgroundColorError');
        emailInput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorEmail.classList.remove('visible');
        emailInput.classList.add('backgroundColorOk');
        emailInput.classList.remove('backgroundColorError');
        return true;
    }
}

function cEmail() {
    const valor = emailInput.value;
    const confirmValor = emailCinput.value;
    if (confirmValor === "") {
        errorCemail.classList.add('visible');
        emailCinput.classList.add('backgroundColorError');
        emailCinput.classList.remove('backgroundColorOk');
        return false;
    }
    if (valor !== confirmValor) {
        errorCemail.classList.add('visible');
        emailCinput.classList.add('backgroundColorError');
        emailCinput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorCemail.classList.remove('visible');
        emailCinput.classList.add('backgroundColorOk');
        emailCinput.classList.remove('backgroundColorError');
        return true;
    }
}

function vEdad() {
    const valor = edadInput.value;
    if (valor === "") {
        errorEdad.classList.add('visible');
        errorMayorEdad.classList.remove('visible');
        edadInput.classList.add('backgroundColorError');
        edadInput.classList.remove('backgroundColorOk');
        return false;

    } else if (isNaN(valor) || valor.length == 0 || valor == null || valor < 18) {
        errorEdad.classList.remove('visible');
        errorMayorEdad.classList.add('visible');
        edadInput.classList.add('backgroundColorError');
        edadInput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorEdad.classList.remove('visible');
        errorMayorEdad.classList.remove('visible');
        edadInput.classList.add('backgroundColorOk');
        edadInput.classList.remove('backgroundColorError');
        return true;
    }
}

function vFecha() {
    const valor = fechaInput.value;
    if (!valor) {
        errorFecha.classList.add('visible');
        errorMayorFecha.classList.remove('visible');
        fechaInput.classList.add('backgroundColorError');
        fechaInput.classList.remove('backgroundColorOk');
        return false;
    }

    const fecha = new Date(valor);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getFullYear() - fecha.getMonth();
    const esMayor = mes > 0 || (mes === 0 && hoy.getDate() >= fecha.getDate());

    if (edad > 18 || (edad === 18 && esMayor)) {
        errorFecha.classList.remove('visible');
        errorMayorFecha.classList.remove('visible');
        fechaInput.classList.add('backgroundColorOk');
        fechaInput.classList.remove('backgroundColorError');
        return true;
    } else {
        errorFecha.classList.add('visible');
        errorMayorFecha.classList.add('visible');
        fechaInput.classList.add('backgroundColorError');
        fechaInput.classList.remove('backgroundColorOk');
        return false;
    }
}

function vTelefono() {
    const valor = telefonoInput.value.trim();
    if (!/^\d{9}$/.test(valor)) {
        errorTelefono.classList.add('visible');
        telefonoInput.classList.add('backgroundColorError');
        telefonoInput.classList.remove('backgroundColorOk');
        return false
    } else {
        errorTelefono.classList.remove('visible');
        telefonoInput.classList.add('backgroundColorOk');
        telefonoInput.classList.remove('backgroundColorError');
        return true;
    }
}

function vPassword() {
    const valor = passwordInput.value;
    const passValido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|:;,.<>?/-]).{7,}$/.test(valor);
    if (!passValido) {
        errorPassword.classList.add('visible');
        passwordInput.classList.add('backgroundColorError');
        passwordInput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorPassword.classList.remove('visible');
        passwordInput.classList.add('backgroundColorOk');
        passwordInput.classList.remove('backgroundColorError');
        return true;
    }
}

function cPassword() {
    const valor = passwordInput.value;
    const confirmValor = passwordCinput.value;
    if (confirmValor === "") {
        errorCpassword.classList.add('visible');
        passwordCinput.classList.add('backgroundColorError');
        passwordCinput.classList.remove('backgroundColorOk');
        return false;
    }
    if (valor !== confirmValor) {
        errorCpassword.classList.add('visible');
        passwordCinput.classList.add('backgroundColorError');
        passwordCinput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorCpassword.classList.remove('visible');
        passwordCinput.classList.add('backgroundColorOk');
        passwordCinput.classList.remove('backgroundColorError');
        return true;
    }
}

function vRadio() {
    const radios = document.querySelectorAll('input[name="plataforma"]');
    const checked = [...radios].some(radio => radio.checked);
    if (!checked) {
        errorRadio.classList.add('visible');
        return false;
    } else {
        errorRadio.classList.remove('visible');
        return true;
    }
}

function vNumProjects() {
    const valorStr = projectsInput.value.trim();
    const valorNum = Number(valorStr);

    if (valorStr === '') {
        errorSelNumProjects.classList.add('visible');
        projectsInput.classList.add('backgroundColorError');
        projectsInput.classList.remove('backgroundColorOk');
        return false;
    }

    if (isNaN(valorNum) || valorNum < 1 || valorNum > 3) {
        errorSelNumProjects.classList.add('visible');
        projectsInput.classList.add('backgroundColorError');
        projectsInput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorSelNumProjects.classList.remove('visible');
        projectsInput.classList.add('backgroundColorOk');
        projectsInput.classList.remove('backgroundColorError');
        return true;
    }
}

function vCheckbox() {
    if (!checkboxInput.checked) {
        errorPrivacidad.classList.add('visible');
        return false;
    } else {
        errorPrivacidad.classList.remove('visible');
        return true;
    }
}

function vSelectProjects() {
    const valor = seleccionPro.value;
    if (valor) {
        errorSelectProjects.classList.remove('visible');
        seleccionPro.style.backgroundColor = 'rgb(19, 75, 14)';
        seleccionPro.style.color = 'rgb(177, 183, 188)';
        return true;
    } else {
        errorSelectProjects.classList.add('visible');
        seleccionPro.style.backgroundColor = 'rgb(231, 9, 9)';
        seleccionPro.style.color = 'rgb(177, 183, 188)';
        return false;
    }
}

function vSelectImg() {
    const valor = seleccionImg.value;
    if (valor) {
        document.body.style.backgroundImage = `url('${valor}')`;
        //! Por si el background color está en el main u otro contenedor
        document.querySelector('main').style.setProperty('background-color', 'rgba(52, 53, 53, 0.8)');
        errorSelectImg.classList.remove('visible');
        seleccionImg.style.backgroundColor = 'rgb(19, 75, 14)';
        seleccionImg.style.color = 'rgb(177, 183, 188)';
        return true;
    } else {
        document.body.style.backgroundImage = 'none';
        errorSelectImg.classList.add('visible');
        seleccionImg.style.backgroundColor = 'rgb(231, 9, 9)';
        seleccionImg.style.color = 'rgb(177, 183, 188)';
        return false;
    }
}

function vSatisfaccion() {
    const valor = parseInt(rangoInput.value, 10);

    // Mostrar en tiempo real
    outputSatisfaccion.textContent = valor;

    if (valor < 1) {
        errorSatisfaccion.classList.add('visible');
        rangoInput.classList.add('backgroundColorError');
        rangoInput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorSatisfaccion.classList.remove('visible');
        rangoInput.classList.add('backgroundColorOk');
        rangoInput.classList.remove('backgroundColorError');
        return true;
    }
}

function vColor() {
    const valor = colorInput.value.trim().toUpperCase();

    const esNegro = (
        valor === '#000000' ||
        valor === '#000' ||
        valor === 'BLACK' ||
        valor === 'RGB(0,0,0)'
    );

    errorColor.classList.toggle('visible', esNegro);
    return !esNegro;
}


function vArchivo() {
  const archivo = archivoInput.files[0];

  if (!archivo) {
    errorArchivo.classList.add('visible');
    archivoInput.classList.add('backgroundColorError');
    archivoInput.classList.remove('backgroundColorOk');
    previewImg.src = '';
    previewImg.classList.remove('visible');
    return false;
  }

  if (archivo.size > 2 * 1024 * 1024) {
    errorArchivo.classList.add('visible');
    archivoInput.classList.add('backgroundColorError');
    archivoInput.classList.remove('backgroundColorOk');
    archivoNombre.textContent = 'Archivo demasiado grande';
    previewImg.classList.remove('visible');
    return false;
  }

  errorArchivo.classList.remove('visible');
  archivoInput.classList.add('backgroundColorOk');
  archivoInput.classList.remove('backgroundColorError');

  const reader = new FileReader();
  reader.onload = function (e) {
    previewImg.src = e.target.result;
    previewImg.classList.add('visible');
  };
  reader.readAsDataURL(archivo);

  return true;
}


function vUrl() {
    const valor = urlInput.value.trim();
    const urlValida = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}([\/\w\-._~:?#[\]@!$&'()*+,;=]*)?$/i.test(valor);
    if (!urlValida) {
        errorUrl.classList.add('visible');
        urlInput.classList.add('backgroundColorError');
        urlInput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorUrl.classList.remove('visible');
        urlInput.classList.add('backgroundColorOk');
        urlInput.classList.remove('backgroundColorError');
        return true;
    }
}

function vDatalist() {
    const valor = navegadorInput.value.trim().toLowerCase();
    const opciones = ['brave', 'chrome', 'firefox', 'safari', 'edge'];

    if (!opciones.includes(valor)) {
        errorNavegador.classList.add('visible');
        navegadorInput.classList.add('backgroundColorError');
        navegadorInput.classList.remove('backgroundColorOk');
        return false;
    } else {
        errorNavegador.classList.remove('visible');
        navegadorInput.classList.add('backgroundColorOk');
        navegadorInput.classList.remove('backgroundColorError');
        return true;
    }
}

function validarFormulario() {
    let valido = true;
    if (!vNombre()) valido = false;
    if (!vApellido()) valido = false;
    if (!vEmail()) valido = false;
    if (!vEdad()) valido = false;
    if (!vFecha()) valido = false;
    if (!vTelefono()) valido = false;
    if (!vPassword()) valido = false;
    if (!cPassword()) valido = false;
    if (!vRadio()) valido = false;
    if (!vNumProjects()) valido = false;
    if (!vCheckbox()) valido = false;
    if (!vSelectProjects()) valido = false;
    if (!vSelectImg()) valido = false;
    if (!vSatisfaccion()) valido = false;
    if (!vColor()) valido = false;
    if (!vArchivo()) valido = false;
    if (!vUrl()) valido = false;
    if (!vDatalist()) valido = false;

    return valido;
}

nombreInput.addEventListener('input', vNombre);
nombreInput.addEventListener('blur', vNombre);
apellidoInput.addEventListener('input', vApellido);
apellidoInput.addEventListener('blur', vApellido);
emailInput.addEventListener('input', vEmail);
emailInput.addEventListener('blur', vEmail);
emailCinput.addEventListener('input', cEmail);
emailCinput.addEventListener('blur', cEmail);
edadInput.addEventListener('blur', vEdad);
fechaInput.addEventListener('change', vFecha);
fechaInput.addEventListener('blur', vFecha);
telefonoInput.addEventListener('input', vTelefono);
telefonoInput.addEventListener('blur', vTelefono);
passwordInput.addEventListener('input', vPassword);
passwordInput.addEventListener('blur', vPassword);
passwordCinput.addEventListener('input', cPassword);
passwordCinput.addEventListener('blur', cPassword);

document.querySelectorAll('input[name="plataforma"]').forEach(radio => {
    radio.addEventListener('change', vRadio);
    radio.addEventListener('blur', vRadio);
});

projectsInput.addEventListener('blur', vNumProjects);
projectsInput.addEventListener('input', vNumProjects);
checkboxInput.addEventListener('change', vCheckbox);
checkboxInput.addEventListener('blur', vCheckbox);
seleccionPro.addEventListener('change', vSelectProjects);
seleccionPro.addEventListener('blur', vSelectProjects);
seleccionImg.addEventListener('change', vSelectImg);
seleccionImg.addEventListener('blur', vSelectImg);
rangoInput.addEventListener('input', vSatisfaccion);
rangoInput.addEventListener('blur', vSatisfaccion);
colorInput.addEventListener('change', vColor);
colorInput.addEventListener('blur', vColor);
archivoInput.addEventListener('input', vArchivo);
archivoInput.addEventListener('change', vArchivo);
archivoInput.addEventListener('blur', vArchivo);
urlInput.addEventListener('input', vUrl);
urlInput.addEventListener('blur', vUrl);
navegadorInput.addEventListener('input', vDatalist);
navegadorInput.addEventListener('blur', vDatalist);

nombreInput.addEventListener('focus', function () {
    this.setAttribute('placeholder', 'Ej: Ana María');
    this.classList.add('foco');
});

nombreInput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

apellidoInput.addEventListener('focus', function () {
    this.setAttribute('placeholder', 'Ej: Rodríguez');
    this.classList.add('foco');
});

apellidoInput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

emailInput.addEventListener('focus', function () {
    this.setAttribute('placeholder', 'Ej: micorreo@gmail.com');
    this.classList.add('foco');
});

emailInput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

emailCinput.addEventListener('focus', function () {
    this.setAttribute('placeholder', 'Repita su correo electrónico');
    this.classList.add('foco');
});

emailCinput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

edadInput.addEventListener('focus', function () {
    this.setAttribute('placeholder', 'Ej: 25');
    this.classList.add('foco');
});

edadInput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

telefonoInput.addEventListener('focus', function () {
    this.setAttribute('placeholder', 'Ej: 600000000');
    this.classList.add('foco');
});

telefonoInput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

passwordInput.addEventListener('focus', function () {
    this.setAttribute('placeholder', 'xX_1xxx');
    this.classList.add('foco');
});

passwordInput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

passwordCinput.addEventListener('focus', function () {
    this.setAttribute('placeholder', 'Repita su contraseña');
    this.classList.add('foco');
});

passwordCinput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

projectsInput.addEventListener('focus', function () {
    this.setAttribute('placeholder', '1 a 3');
    this.classList.add('foco');
});

projectsInput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

urlInput.addEventListener('focus', function () {
    this.setAttribute('placeholder', 'Ej: google.com');
    this.classList.add('foco');
});

urlInput.addEventListener('blur', function () {
    this.removeAttribute('placeholder');
    this.classList.remove('foco');
});

miFormulario.addEventListener('submit', function (evento) {
    if (!validarFormulario()) {
        evento.preventDefault();
        alert('Por favor, completa el formulario correctamente.');
    } else {
        alert('Formulario enviado correctamente!');
    }
});