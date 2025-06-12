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

//$ *************************************************
//$ **************** AÑO ACTUAL *********************
//$ *************************************************
const year = document.getElementById('year');
if (year) {
  const date = new Date();
  year.textContent = date.getFullYear();
}

//$ *************************************************
//$ ****************** CORREO ***********************
//$ *************************************************
const email = "jrg83x@gmail.com";
const copyEmail = document.getElementById("copyEmail");
const notification = document.getElementById("notification");

copyEmail.addEventListener("click", function () {
  navigator.clipboard.writeText(email).then(() => {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  }).catch(err => {
    alert("Error al copiar el correo.");
    console.error(err);
  });
});

//$ *************************************************
//$ ****************** H1 ANIMADO *******************
//$ *************************************************
gsap.from(".index", { y: -100, opacity: 0, duration: 4, ease: "power3.in" });

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
const paragraph = document.getElementById("machine");

const observador = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const el = entry.target;
      if (!el.classList.contains("typing") && !el.classList.contains("no-type")) {
        typeWriter(el);
      }
    }
  });
}, { threshold: 0 }); // <- empieza en cuanto entra

if (paragraph) {
  observador.observe(paragraph);
}

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
      setTimeout(type, 5); // <- velocidad rápida
    } else {
      element.classList.remove("typing");
    }
  }

  type();
}

//$ *************************************************
//$ ************** MENÚ RESPONSIVE ******************
//$ *************************************************
const mediaQuery = matchMedia('(max-width: 768px)');
const menu = document.getElementById('nav');
const icons = document.getElementById('hamb');
const links = document.querySelectorAll('#nav a');

function toggleMenu() {
  const icon = icons.querySelector('i');
  const isOpen = menu.style.transform === 'translateX(0%)' || 
                 menu.style.transform === 'translateX(0px)';

  if (isOpen) {
    // Cerrar menú manteniendo menuResponsive
    menu.style.transform = 'translateX(-100vw)';
    icon.classList.remove('fa-times', 'rotar');
    icon.classList.add('fa-bars');
    icon.style.color = '';
    icon.style.transform = '';
  } else {
    // Abrir menú
    menu.style.transform = 'translateX(0%)';
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times','rotar'); 
    icon.style.color = 'rgb(231, 9, 9)';
    icon.style.transform = 'translateY(20%)';
  }
}

function cerrarMenu() {
  const icon = icons.querySelector('i');
  menu.style.transform = 'translateX(-100vw)';
  icon.classList.remove('fa-times', 'rotar');
  icon.classList.add('fa-bars');
  icon.style.color = '';
  icon.style.transform = '';
}

function menuResponsive() {
  if (mediaQuery.matches) {
    // Móvil: mantener menuResponsive siempre
    menu.classList.add('menuResponsive');
    menu.style.transform = 'translateX(-100vw)'; // Iniciar cerrado
    icons.style.display = 'block';
    
    // Resetear icono
    const icon = icons.querySelector('i');
    icon.classList.remove('fa-times', 'rotar');
    icon.classList.add('fa-bars');
    icon.style.color = '';
    icon.style.transform = '';
    
    // Event listeners
    icons.addEventListener('click', toggleMenu);
    links.forEach(link => link.addEventListener('click', cerrarMenu));
  } else {
    // Escritorio: quitar menuResponsive y resetear
    menu.classList.remove('menuResponsive');
    menu.style.transform = '';
    icons.style.display = 'none';
    
    // Remover listeners
    icons.removeEventListener('click', toggleMenu);
    links.forEach(link => link.removeEventListener('click', cerrarMenu));
  }
}

function clicFueraMenu(e) {
  const icon = icons.querySelector('i');
  if (
    mediaQuery.matches &&
    icon.classList.contains('fa-times') && // menú abierto
    !menu.contains(e.target) &&
    !icons.contains(e.target)
  ) {
    cerrarMenu();
  }
}

menuResponsive();
mediaQuery.addEventListener('change', menuResponsive);
document.addEventListener('click', clicFueraMenu);

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
