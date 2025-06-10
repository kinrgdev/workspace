const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas a la pantalla
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
    this.speed = Math.random() * 8 + 5; // Mayor velocidad inicial
    this.length = Math.random() * 20 + 10; // Longitud de la línea
    this.width = Math.random() * 2 + 1; // Grosor de la línea
    this.opacity = Math.random() * 0.2 + 0.6; // Opacidad de la estrella
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
    ctx.strokeStyle = `rgba(135,178,214,255${this.opacity})`;
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
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

animate();

// Ajustar el tamaño del canvas si la ventana cambia de tamaño
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});