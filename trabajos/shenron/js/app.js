const container = document.getElementById('animate');
const shenron = document.querySelector('#animate img:nth-of-type(2)');
const dragonBalls = Array.from(document.querySelectorAll('#animate div img'));
const textContainer = document.getElementById('textContainer');
const progressText = document.getElementById('progressText');

// Configuración de animación
let angle = 0;
const radiusX = 150; // Radio horizontal de la órbita
const radiusY = 90; // Radio vertical de la órbita
const speed = 0.03; // Velocidad de rotación
const rotation = 45 * Math.PI / 180; // Inclinación de la órbita
let progress = 0; // Progreso de la animación (0 = fuera, 1 = órbita)

// Texto
const languageSelector = document.getElementById('language');
const translations = {
  ca: "Quin és el teu desig? Et concediré tres...",
  es: "¿Cuál es tu deseo? Te concederé tres...",
  en: "What is your wish? I shall grant you three..."
};

let currentIndex = 0;
let fullText = translations[languageSelector.value];
let typingInterval;

function typeWriter(text, destination, speed = 70) {
  clearInterval(typingInterval);
  destination.textContent = "";
  currentIndex = 0;

  typingInterval = setInterval(() => {
    if (currentIndex < text.length) {
      destination.textContent += text[currentIndex];
      currentIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}

function mostrarTextoConAnimacion() {
  textContainer.classList.add("visible");
  setTimeout(() => {
    typeWriter(fullText, progressText);
  }, 1000);
}

// Iniciar animación de texto directamente (sin esperar al evento)
mostrarTextoConAnimacion();

// Cambiar idioma dinámicamente
languageSelector.addEventListener('change', () => {
  fullText = translations[languageSelector.value];
  textContainer.classList.add("visible");
  typeWriter(fullText, progressText);
});

// Posiciones iniciales (fuera del viewport)
const initialPositions = [
  { x: -100, y: -100 },
  { x: window.innerWidth + 100, y: -100 },
  { x: -100, y: window.innerHeight + 100 },
  { x: window.innerWidth + 100, y: window.innerHeight + 100 },
  { x: window.innerWidth / 2, y: -200 },
  { x: -200, y: window.innerHeight / 2 },
  { x: window.innerWidth + 200, y: window.innerHeight / 2 }
];

// Asignar posiciones iniciales
dragonBalls.forEach((ball, index) => {
  ball.style.left = initialPositions[index].x + 'px';
  ball.style.top = initialPositions[index].y + 'px';
});

// Animación principal
function animate() {
  const shenronRect = shenron.getBoundingClientRect();
  const centerX = shenronRect.left + shenronRect.width / 2;
  const centerY = shenronRect.top + shenronRect.height / 2;

  for (let index = 0; index < dragonBalls.length; index++) {
    const ball = dragonBalls[index];
    const offset = (index / dragonBalls.length) * (2 * Math.PI);
    const currentAngle = angle + offset;

    // Posición final en órbita
    const xRawFinal = Math.cos(currentAngle) * radiusX;
    const yRawFinal = Math.sin(currentAngle) * radiusY;

    // Interpolación entre posición inicial y final
    const xRaw = initialPositions[index].x + (xRawFinal - initialPositions[index].x) * progress;
    const yRaw = initialPositions[index].y + (yRawFinal - initialPositions[index].y) * progress;

    // Rotación de la órbita
    const xRotated = xRaw * Math.cos(rotation) - yRaw * Math.sin(rotation);
    const yRotated = xRaw * Math.sin(rotation) + yRaw * Math.cos(rotation);

    ball.style.left = centerX + xRotated - ball.offsetWidth / 2 + 'px';
    ball.style.top = centerY + yRotated - ball.offsetHeight / 2 + 'px';
  }

  if (progress < 1) {
    progress += 0.01; // Velocidad de entrada
    requestAnimationFrame(animate);
  } else {
    startOrbitRotation(); // Iniciar rotación continua
  }
}

// Rotación continua después de la animación de entrada
function startOrbitRotation() {
  function rotate() {
    angle += speed;
    const shenronRect = shenron.getBoundingClientRect();
    const centerX = shenronRect.left + shenronRect.width / 2;
    const centerY = shenronRect.top + shenronRect.height / 2;

    for (let index = 0; index < dragonBalls.length; index++) {
      const ball = dragonBalls[index];
      const offset = (index / dragonBalls.length) * (2 * Math.PI);
      const currentAngle = angle + offset;

      const xRaw = Math.cos(currentAngle) * radiusX;
      const yRaw = Math.sin(currentAngle) * radiusY;

      const xRotated = xRaw * Math.cos(rotation) - yRaw * Math.sin(rotation);
      const yRotated = xRaw * Math.sin(rotation) + yRaw * Math.cos(rotation);

      ball.style.left = centerX + xRotated - ball.offsetWidth / 2 + 'px';
      ball.style.top = centerY + yRotated - ball.offsetHeight / 2 + 'px';
    }
    requestAnimationFrame(rotate);
  }
  rotate();
}

// Animación de texto
function texto() {
  if (currentIndex < fullText.length) {
    progressText.textContent += fullText[currentIndex];
    currentIndex++;
    setTimeout(texto, 150);
  }
}

shenron.addEventListener('mouseenter', () => {
  textContainer.classList.remove('hidden');
  textContainer.classList.add('visible');
  currentIndex = 0;
  progressText.textContent = "";
  texto();
});

shenron.addEventListener('mouseleave', () => {
  textContainer.classList.remove('visible');
  textContainer.classList.add('hidden');
});

window.onload = () => {
  animate();
};