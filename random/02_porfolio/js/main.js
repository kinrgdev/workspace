//$ *************************************************
//$ ****************** H1 ANIMADO *******************
//$ *************************************************
gsap.from(".index", { y: -100, opacity: 0, duration: 4, ease: "power3.in" });

//$ *************************************************
//$ *************** AURA AL PUNTERO *****************
//$ *************************************************
const aura = document.createElement('div');
aura.className = 'aura-glow';
document.body.appendChild(aura);

document.body.addEventListener('mousemove', function (a) {
  const x = a.clientX;
  const y = a.clientY;
  aura.style.left = `${x}px`;
  aura.style.top = `${y}px`;
});

//$ ***********************************************************
//$ ****************** ENLACES NAV ANIMADOS *******************
//$ ***********************************************************
setTimeout(() => {
  const links = document.querySelectorAll("nav a");

  if (links.length > 0) {
    // Configuración inicial con autoAlpha (maneja opacity + visibility)
    gsap.set(links, {
      y: 50,
      autoAlpha: 0 // Equivale a opacity: 0 + visibility: hidden
    });

    // Animación
    gsap.to(links, {
      y: 0,
      autoAlpha: 1, // Equivale a opacity: 1 + visibility: visible
      ease: "back.out(.7)",
      stagger: 0.2,
      duration: 0.8,
      onComplete: () => {
        // Limpia solo la propiedad 'y' (opcional)
        gsap.set(links, { clearProps: "y" });
      }
    });
  }
}, 4000);

//$ *************************************************
//$ *************** BARRA DE PROGRESO ***************
//$ *************************************************
function barScroll() {
  let scrolling = document.getElementById('barra');
  let winScroll = scrollY;
  let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolleo = (winScroll / alto) * 100;
  scrolling.style.width = scrolleo + "%";
}

addEventListener('scroll', barScroll);

//$ *************************************************
//$ *************** SCROLL ESPÍA ********************
//$ *************************************************
const secciones = document.querySelectorAll('section');
const enlaces = document.querySelectorAll('#nav a');

function scrollStyle() {
  const scrollActual = scrollY;
  let seccionActiva = 0; //? marca "Inicio" por defecto
  const umbralActivo = innerHeight * 0.10;


  secciones.forEach(function (seccion, index) {
    const seccionTop = seccion.offsetTop;

    if (scrollActual >= seccionTop - umbralActivo) {
      seccionActiva = index + 1; //? Corrige el index para empezar en 1
    }

  });
  enlaces.forEach(function (enlaces, index) {
    enlaces.style.color = index === seccionActiva ? '#fff' : '';
    enlaces.style.fontWeight = index === seccionActiva ? '500' : '';
    enlaces.style.fontStyle = index === seccionActiva ? 'italic' : '';
  });
}

addEventListener('scroll', scrollStyle);
addEventListener('load', scrollStyle);
addEventListener('resize', scrollStyle);

//$ *************************************************
//$ ************* TITULOS ANIMADOS ******************
//$ *************************************************
function splitH2Text(h2) {
  const text = h2.textContent;
  h2.textContent = '';
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.animationDelay = `${i * 0.1}s`;
    h2.appendChild(span);
  });
  h2.style.opacity = 1;
}

// 2. Callback del observer con reset en el else
function onIntersect(entries) {
  entries.forEach(entry => {
    const h2 = entry.target;
    if (entry.isIntersecting) {
      splitH2Text(h2);
    } else {
      // Restauramos para poder re-animar tras salir
      h2.textContent = h2.dataset.originalText;
      h2.style.opacity = 0;
    }
  });
}

const observer = new IntersectionObserver(onIntersect, {
  rootMargin: '0px',
  threshold: 0     // disparar con cualquier píxel visible
});

setTimeout(() => {
  document.querySelectorAll('h2').forEach(h2 => {
    h2.dataset.originalText = h2.textContent;
    h2.style.opacity = 0;
    observer.observe(h2);
  });

  const pending = observer.takeRecords();
  if (pending.length) onIntersect(pending);
}, 4000);

//$ ******************************************************
//$ *************** TEXTO MÁQUINA ESCRIBIR ***************
//$ ******************************************************
const paragraphs = document.querySelectorAll("p");

const observador = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const el = entry.target;
      if (!el.classList.contains("typing")) {
        typeWriter(el);
      }
    }
  });
}, { threshold: 0.1 });

paragraphs.forEach(function (p) {
  observador.observe(p);
});

function typeWriter(element) {
  const text = element.dataset.fullText || element.textContent;
  if (!element.dataset.fullText) element.dataset.fullText = text;

  element.textContent = "";
  element.classList.add("typing");
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(type, 1);
    } else {
      element.classList.remove("typing");
    }
  }

  type();
}

//$ *************************************************
//$ *************** MODAL HABILIDADES ***************
//$ *************************************************
let modalActivo = null;
let hideTimeout = null;

function ocultarModal() {
  if (modalActivo) {
    modalActivo.classList.remove('active');
    modalActivo = null;
  }
}

// Selecciona todos los íconos con la clase "skill-icon-trigger"
document.querySelectorAll('.skill-icon-trigger').forEach(trigger => {
  const modalId = trigger.getAttribute('data-target'); // Obtiene el ID del modal desde data-target
  const modal = document.getElementById(modalId); // Busca el modal por ID
  const skillArticle = trigger.closest('article'); // Encuentra el <article> padre

  // Si no existe el modal o el artículo, salta esta iteración
  if (!skillArticle || !modal) return;

  // Asegura que el artículo tenga posición relativa para posicionar el modal
  skillArticle.style.position = 'relative';

  // Función para mostrar el modal
  const mostrarModal = () => {
    clearTimeout(hideTimeout); // Cancela cualquier ocultación programada
    ocultarModal(); // Oculta otros modales activos

    // Muestra el modal
    modal.classList.add('active');
    modalActivo = modal;
  };

  // Función para programar la ocultación del modal
  const programarOcultar = () => {
    hideTimeout = setTimeout(() => {
      // Oculta solo si el ratón no está sobre el ícono o el modal
      if (!trigger.matches(':hover') && !modal.matches(':hover')) {
        ocultarModal();
      }
    }, 200); // Retraso de 200ms para evitar cierres accidentales
  };

  // Eventos para mostrar/ocultar
  trigger.addEventListener('mouseenter', mostrarModal);
  trigger.addEventListener('mouseleave', programarOcultar);
  modal.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
  modal.addEventListener('mouseleave', programarOcultar);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalActivo) {
      ocultarModal();
    }
  });
});

//$ **************************************************
//$ ** ADAPTAR EL H3 DE 'HERRAMIENTAS' A LA VENTANA **
//$ **************************************************
(function () {
  const h3 = document.querySelector('#skills article:nth-of-type(2) h3');
  const fit = () => {
    const parentW = h3.parentElement.clientWidth;
    const textW = h3.scrollWidth;
    // escala máximo 1, o bien parentW/textW si el texto desborda
    const scale = Math.min(1, parentW / textW);
    h3.style.transform = 'scaleX(' + scale + ')';
    const extraSpace = (1 - scale) * 0.1;          // va de 0 (sin compresión) a 0.1em (máxima compresión)
    h3.style.letterSpacing = (0.14 + extraSpace) + 'em';
  };
  // corre en carga y en todo resize
  window.addEventListener('resize', fit);
  fit();
})();

//$ *************************************************
//$ ******************* FORMULARIO ******************
//$ *************************************************
let miFormulario = document.querySelector('form');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const projectsInput = document.getElementById('numProjects');
const checkboxInput = document.getElementById('privacidad');
const seleccion = document.getElementById('seleccion');
const error = document.querySelectorAll('fieldset p');

function vNombre() {
  const valor = nombreInput.value;
  if (valor.replace(/\s+/g, ' ').length < 3) {
    error[0].classList.add('visible');
    nombreInput.classList.add('backgroundColorError');
    nombreInput.classList.remove('backgroundColorOk');
    return false;
  } else {
    error[0].classList.remove('visible');
    nombreInput.classList.add('backgroundColorOk');
    nombreInput.classList.remove('backgroundColorError');
    return true;
  }
}

function vApellido() {
  const valor = apellidoInput.value;
  if (valor.replace(/\s+/g, ' ').length < 3) {
    error[1].classList.add('visible');
    apellidoInput.classList.add('backgroundColorError');
    apellidoInput.classList.remove('backgroundColorOk');
    return false;
  } else {
    error[1].classList.remove('visible');
    apellidoInput.classList.add('backgroundColorOk');
    apellidoInput.classList.remove('backgroundColorError');
    return true;
  }
}

function vEmail() {
  const valor = emailInput.value.trim().toLowerCase();
  const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor);
  if (!emailValido) {
    error[2].classList.add('visible');
    emailInput.classList.add('backgroundColorError');
    emailInput.classList.remove('backgroundColorOk');
    return false;
  } else {
    error[2].classList.remove('visible');
    emailInput.classList.add('backgroundColorOk');
    emailInput.classList.remove('backgroundColorError');
    return true;
  }
}

function vRadio() {
  const radios = document.querySelectorAll('input[name="plataforma"]');
  const checked = [...radios].some(radio => radio.checked);
  if (!checked) {
    error[3].classList.add('visible');
    return false;
  } else {
    error[3].classList.remove('visible');
    return true;
  }
}

function vProjects() {
  const valorStr = projectsInput.value.trim();
  const valorNum = Number(valorStr);

  if (valorStr === '') {
    error[4].classList.add('visible');
    projectsInput.classList.add('backgroundColorError');
    projectsInput.classList.remove('backgroundColorOk');
    return false;
  }

  if (isNaN(valorNum) || valorNum < 1 || valorNum > 3) {
    error[4].classList.add('visible');
    projectsInput.classList.add('backgroundColorError');
    projectsInput.classList.remove('backgroundColorOk');
    return false;
  } else {
    error[4].classList.remove('visible');
    projectsInput.classList.add('backgroundColorOk');
    projectsInput.classList.remove('backgroundColorError');
    return true;
  }
}

function vCheckbox() {
  if (!checkboxInput.checked) {
    error[5].classList.add('visible');
    return false;
  } else {
    error[5].classList.remove('visible');
    return true;
  }
}

function vSelect() {
  const valor = seleccion.value;
  if (valor) {
    error[6].classList.remove('visible');
    seleccion.style.backgroundColor = 'rgb(26, 165, 13)';
    seleccion.style.color = 'rgb(228, 232, 235)';
    return true;
  } else {
    error[6].classList.add('visible');
    seleccion.style.backgroundColor = 'rgb(231, 9, 9)';
    seleccion.style.color = 'rgb(228, 232, 235)';
    return false;
  }
}

function validarFormulario() {
  let valido = true;
  if (!vNombre()) valido = false;
  if (!vApellido()) valido = false;
  if (!vEmail()) valido = false;
  if (!vRadio()) valido = false;
  if (!vProjects()) valido = false;
  if (!vCheckbox()) valido = false;
  if (!vSelect()) valido = false;
  return valido;
}

nombreInput.addEventListener('input', vNombre);
apellidoInput.addEventListener('input', vApellido);
emailInput.addEventListener('input', vEmail);
projectsInput.addEventListener('blur', vProjects);

document.querySelectorAll('input[name="plataforma"]').forEach(radio => {
  radio.addEventListener('change', vRadio);
  radio.addEventListener('blur', vRadio);
});

checkboxInput.addEventListener('change', vCheckbox);
checkboxInput.addEventListener('blur', vCheckbox);

seleccion.addEventListener('change', vSelect);
seleccion.addEventListener('blur', vSelect);

nombreInput.addEventListener('focus', function () {
  nombreInput.setAttribute('placeholder', ' Ej: Jose Luis');
  nombreInput.classList.add('foco');
});

apellidoInput.addEventListener('focus', function () {
  apellidoInput.setAttribute('placeholder', ' Ej: De Pedro');
  apellidoInput.classList.add('foco');
});

emailInput.addEventListener('focus', function () {
  emailInput.setAttribute('placeholder', ' Ej: micorreo@gmail.com');
  emailInput.classList.add('foco');
});

miFormulario.addEventListener('submit', function (evento) {
  if (!validarFormulario()) {
    evento.preventDefault();
    alert('Por favor, completa el formulario correctamente.');
  }
});

//$ *************************************************
//$ ************** MENÚ RESPONSIVE ******************
//$ *************************************************
const mediaQuery = matchMedia('(max-width: 768px)');
const menu = document.getElementById('nav');
let icons = document.getElementById('hamb');

function toggleMenu() {
  let visible = menu.style.transform === 'translateX(0%)';
  let icon = icons.querySelector('i');

  if (visible) {
    menu.style.transform = 'translateX(-100vw)';
    icon.classList.remove('fa-times', 'rotar');
    icon.classList.add('fa-bars');
    icon.style.color = '';
    menu.classList.remove('menuResponsive');
  } else {
    menu.style.transform = 'translateX(0%)';
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times', 'rotar'); 
    icon.style.color = 'rgb(231, 9, 9)';
    menu.classList.add('menuResponsive');
  }
}

function menuResponsive() {
  if (mediaQuery.matches) {
    menu.style.transform = 'translateX(-100vw)';
    icons.style.display = 'block';
    icons.addEventListener('click', toggleMenu);

    enlaces.forEach(link => {
      link.addEventListener('click', cerrarMenu);
    });
  } else {
    menu.style.transform = 'translateX(0%)';
    icons.style.display = 'none';
    icons.removeEventListener('click', toggleMenu);
    icons.querySelector('i').classList.remove('fa-times');
    icons.querySelector('i').classList.add('fa-bars');

    enlaces.forEach(link => {
      link.removeEventListener('click', cerrarMenu);
    });
  }
}

function cerrarMenu() {
  if (mediaQuery.matches) {
    menu.style.transform = 'translateX(-100vw)';
    icons.querySelector('i').classList.remove('fa-times');
    icons.querySelector('i').classList.add('fa-bars');
  }
}

function clicFueraMenu(e) {
  if (
    mediaQuery.matches &&
    !menu.contains(e.target) &&
    !icons.contains(e.target) &&
    menu.style.transform === 'translateX(0%)'
  ) {
    cerrarMenu();
  }
}

menuResponsive();
mediaQuery.addEventListener('change', menuResponsive);
document.addEventListener('click', clicFueraMenu);


//$ *************************************************
//$ **************** AÑO ACTUAL *********************
//$ *************************************************
const year = document.getElementById('year');
if (year) {
  const date = new Date();
  year.textContent = date.getFullYear();
}

