function barScroll() {
  let scrolling = document.getElementById('barra');
  let winScroll = scrollY;
  let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolleo = (winScroll / alto) * 100;
  scrolling.style.width = scrolleo + "%";
}

addEventListener('scroll', barScroll);

////Máquina de escribir
// Seleccionar elementos del DOM
const container = document.getElementById('container');
const textContainer = document.getElementById('textContainer');
const progressText = document.getElementById('progressText');

// Texto a mostrar
const textToType = "¿Cuál es tu deseo? Te concederé tres...";

// Variables para controlar la animación
let typingInterval;
let currentIndex = 0;

// Función para simular la máquina de escribir
function typeWriter() {
    if (currentIndex < textToType.length) {
        // Agregar el siguiente carácter
        progressText.textContent += textToType.charAt(currentIndex);
        currentIndex++;
    } else {
        // Detener la animación cuando se completa el texto
        clearInterval(typingInterval);
    }
}

// Evento al pasar el cursor sobre la imagen
container.addEventListener('mouseenter', () => {
    // Reiniciar variables
    currentIndex = 0;
    progressText.textContent = "";
    
    // Mostrar el contenedor de texto
    textContainer.style.opacity = "1";
    textContainer.style.transform = "translateY(0)";
    
    // Iniciar la animación de escritura
    typingInterval = setInterval(typeWriter, 50);
});

// Evento al quitar el cursor de la imagen
container.addEventListener('mouseleave', () => {
    // Detener la animación
    clearInterval(typingInterval);
    
    // Ocultar el contenedor de texto
    textContainer.style.opacity = "0";
    textContainer.style.transform = "translateY(20px)";
});