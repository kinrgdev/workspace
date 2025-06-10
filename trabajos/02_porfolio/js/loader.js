const canvas = document.getElementById('loader');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 1200;

class Star {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.angle = Math.random() * 2 * Math.PI;
    this.speed = Math.random() * 2 + 1; // Mayor velocidad inicial
    this.length = Math.random() * 30 + 20; // Longitud de la línea
    this.width = Math.random() * 2 + 1; // Grosor de la línea
    this.opacity = Math.random() * 0.3 + 0.7; // Opacidad de la estrella
  }
  update() {
    // Movimiento radial desde el centro
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // Alargar la línea conforme avanza
    this.length += 2;

    // Si la estrella sale de la pantalla, se reinicia
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y); // Punto de inicio
    // Punto final estirado en la dirección del movimiento
    ctx.lineTo(
      this.x + Math.cos(this.angle) * this.length,
      this.y + Math.sin(this.angle) * this.length
    );
    ctx.strokeStyle = `rgba(95,130,204, ${this.opacity})`;
    ctx.lineWidth = this.width;
    ctx.stroke();
  }
}

// Crear estrellas
for (let i = 0; i < numStars; i++) {
  stars.push(new Star());
}

function animate() {
  // Fondo negro con un leve desenfoque de las estrellas anteriores
  ctx.fillStyle = 'rgba(9, 19, 37, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

animate();

// Retardo
setTimeout(() => {
  const loaderWrapper = document.getElementById('loader-wrapper');
  const mainContent = document.querySelector('main');
  loaderWrapper.style.opacity = '0';
  setTimeout(() => {
    loaderWrapper.style.display = 'none';
    document.body.classList.add('loader-completed');
    mainContent.style.display = 'grid';
  }, 3000); 
}, 3000);

setTimeout(() => {
  document.body.classList.add("loader-completed");
  
  // Fuerza un reflow para activar la transición
  void document.getElementById('hamb').offsetWidth; 
}, 3000);


// Ajustar el tamaño del canvas si la ventana cambia de tamaño
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Ajustar para usar dimensiones visuales del viewport
function setCanvasSize() {
  // Usa el tamaño visible real
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  
  canvas.width = vw;
  canvas.height = vh;
}

// Inicializar
setCanvasSize();

// Actualizar en resize y orientationchange
window.addEventListener('resize', setCanvasSize);
window.addEventListener('orientationchange', function() {
  setTimeout(setCanvasSize, 100); // Retardo para esperar cambio de orientación
});