const gifContainer = document.getElementById('gifContainer');
const bouncingGif = document.getElementById('bouncingGif');

// Variables de estado para la animación
let posX; // Se inicializará cuando gifWidth esté disponible
let posY = 0; // Posición vertical inicial
let directionX = 1; // 1 para derecha, -1 para izquierda (para el movimiento horizontal)
let directionY = 1; // 1 para abajo, -1 para arriba (para los pequeños botes)
const speedX = 7; // Velocidad de movimiento horizontal (ajusta a tu gusto)
const bounceHeight = 10; // Altura máxima de los pequeños botes verticales
const bounceSpeed = 0.5; // Velocidad de los pequeños botes verticales (ajusta a tu gusto)

let viewportWidth = window.innerWidth; // Ancho actual del viewport
let gifWidth; // Se inicializará cuando gifWidth esté disponible

// Función para actualizar el ancho del viewport y del GIF en caso de redimensionamiento
const updateDimensions = () => {
    viewportWidth = window.innerWidth;
    gifWidth = bouncingGif.offsetWidth;
    // Asegurarse de que la posición se mantenga coherente si la ventana se redimensiona
    // Si el GIF está fuera del lado derecho y se encoge la ventana, asegúrate de que no quede "atascado"
    if (posX > viewportWidth) {
        posX = viewportWidth; // Ajusta para que el borde izquierdo del GIF esté en el borde derecho del viewport
    }
    // Si el GIF está fuera del lado izquierdo y se agranda la ventana, asegúrate de que no quede "atascado"
    if (posX + gifWidth < 0) {
         posX = -gifWidth; // Asegura que el borde derecho del GIF esté en el borde izquierdo del viewport
    }
};

// Escucha el evento de redimensionamiento de la ventana
window.addEventListener('resize', updateDimensions);

// Función principal de animación
const animate = () => {
    // 1. Movimiento horizontal (eje X)
    posX += directionX * speedX;

    // Comprobar límites del eje X y rebotar completamente fuera del viewport
    // Si el borde derecho del GIF excede el ancho del viewport
    if (posX > viewportWidth) {
        directionX = -1; // Cambia de dirección a izquierda
    }
    // Si el borde izquierdo del GIF está completamente fuera por la izquierda
    else if (posX < -gifWidth) {
        directionX = 1; // Cambia de dirección a derecha
    }

    // 2. Pequeños botes verticales (eje Y)
    posY += directionY * bounceSpeed;

    // Comprobar límites de los botes verticales y rebotar
    if (posY > bounceHeight) {
        posY = bounceHeight;
        directionY = -1; // Sube
    } else if (posY < -bounceHeight) {
        posY = -bounceHeight;
        directionY = 1; // Baja
    }

    // Aplicar la transformación al contenedor del GIF
    // Usamos transform: translate3d para aprovechar la aceleración por hardware
    gifContainer.style.transform = `translate3d(${posX}px, ${posY}px, 0) translateY(-50%)`;

    // Solicitar el próximo frame de animación
    requestAnimationFrame(animate);
};

// Iniciar la animación cuando la ventana se haya cargado completamente
window.onload = () => {
    // Función para verificar que el GIF ha cargado y sus dimensiones están disponibles
    const checkGifDimensions = () => {
        // Solo inicializamos y comenzamos la animación si el ancho del GIF es mayor que 0
        if (bouncingGif.offsetWidth > 0) {
            updateDimensions(); // Asegura que las dimensiones iniciales sean correctas
            posX = -gifWidth; // Inicializa posX para que empiece completamente fuera a la izquierda
            animate(); // Inicia la animación
        } else {
            // Si el ancho del GIF aún no está disponible, intenta de nuevo después de un pequeño retraso
            setTimeout(checkGifDimensions, 50);
        }
    };
    checkGifDimensions(); // Llama a la función de verificación al cargar la página
};