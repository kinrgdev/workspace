document.addEventListener('DOMContentLoaded', () => {
    // Configuración
    const config = {
        ////autoSlideInterval: 8000, // 8 segundos
        swipeThreshold: 50 // Mínimo de píxeles para considerar un deslizamiento
    };

    // Elementos del DOM
    const carousel = document.getElementById('carousel');
    const prevBtnExternal = document.getElementById('prevBtnExternal');
    const nextBtnExternal = document.getElementById('nextBtnExternal');
    const progressIconsContainer = document.getElementById('progressIcons');
    const progressIcons = document.querySelectorAll('.progress-icon');
    const cards = document.querySelectorAll('.card');

    // Variables de estado
    let currentIndex = 0;
    ////let autoSlideInterval;

    // Inicializar el carrusel
    function initCarousel() {
        updateCarousel();
        ////startAutoSlide();
        setupEventListeners();
    }

    // Actualizar estado del carrusel
    function updateCarousel() {
        // Actualizar posición
        carousel.scrollTo({
            left: currentIndex * carousel.offsetWidth,
            behavior: 'smooth'
        });

        // Actualizar clases de tarjetas
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });

        // Actualizar indicadores
        progressIcons.forEach((icon, index) => {
            icon.classList.toggle('active', index === currentIndex);
            // Mejor para accesibilidad: indica el elemento actual en un conjunto.
            icon.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
        });
    }

    // Navegar a un índice específico
    function goTo(index) {
        // Validar índice
        if (index < 0) index = cards.length - 1;
        if (index >= cards.length) index = 0;

        currentIndex = index;
        updateCarousel();
        ////resetAutoSlide();
    }

    // Navegar al anterior
    function prevSlide() {
        goTo(currentIndex - 1);
    }

    // Navegar al siguiente
    function nextSlide() {
        goTo(currentIndex + 1);
    }

    ///// Iniciar auto-desplazamiento (más lento)

    ////function startAutoSlide() {
    ////    autoSlideInterval = setInterval(nextSlide, config.autoSlideInterval);
    ////}

    //// Reiniciar auto-desplazamiento

    ////function resetAutoSlide() {
    ////    clearInterval(autoSlideInterval);
    ////    startAutoSlide();
    ////}


    // Configurar event listeners
    function setupEventListeners() {
        // Botones externos de navegación
        prevBtnExternal.addEventListener('click', prevSlide);
        nextBtnExternal.addEventListener('click', nextSlide);

        // Navegación con teclado en el carrusel (requiere tabindex="0" en el HTML)
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault(); // Evita el scroll horizontal de la página
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault(); // Evita el scroll horizontal de la página
                nextSlide();
            }
        });

        // Evento de rueda del ratón
        carousel.addEventListener('wheel', (e) => {
            // Prevenir desplazamiento vertical accidental
            if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                e.preventDefault();
                e.deltaY > 0 ? nextSlide() : prevSlide();
            }
        });

        // Evento táctil para dispositivos móviles
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        // Manejar gesto de deslizar
        function handleSwipe() {
            if (touchEndX < touchStartX - config.swipeThreshold) {
                nextSlide();
            } else if (touchEndX > touchStartX + config.swipeThreshold) {
                prevSlide();
            }
        }

        // Eventos para los indicadores de progreso (usando delegación de eventos)
        progressIconsContainer.addEventListener('click', (e) => {
            const icon = e.target.closest('.progress-icon');
            if (icon && !icon.classList.contains('active')) {
                const index = parseInt(icon.dataset.index, 10);
                goTo(index);
            }
        });

        //// Pausar auto-desplazamiento al interactuar

        ////carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        ////carousel.addEventListener('mouseleave', startAutoSlide);
        ////carousel.addEventListener('touchstart', () => clearInterval(autoSlideInterval), { passive: true });
        ////carousel.addEventListener('touchend', () => startAutoSlide(), { passive: true });
    }
    // Inicializar el carrusel
    initCarousel();
});

const year = document.getElementById('year');
if (year) {
    const date = new Date();
    year.textContent = date.getFullYear();
}