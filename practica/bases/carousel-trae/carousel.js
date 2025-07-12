document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const carouselContainer = document.getElementById('carousel-container');
    const slides = document.querySelectorAll('#carousel-container > div');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const progressContainer = document.getElementById('carousel-progress');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Crear indicadores de progreso
    function createProgressDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('progress-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showSlide(i));
            progressContainer.appendChild(dot);
        }
    }
    
    // Actualizar indicadores de progreso
    function updateProgressDots() {
        const dots = document.querySelectorAll('.progress-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Función para mostrar el slide actual
    function showSlide(index) {
        // Asegurarse de que el índice esté dentro del rango
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentIndex = index;
        
        // Calcular el desplazamiento
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
        
        // Actualizar los indicadores de progreso
        updateProgressDots();
    }
    
    // Event listeners para los botones
    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
    
    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
    
    // Event listener para el scroll horizontal
    carousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        if (e.deltaY > 0) {
            // Scroll hacia abajo - siguiente slide
            showSlide(currentIndex + 1);
        } else {
            // Scroll hacia arriba - slide anterior
            showSlide(currentIndex - 1);
        }
    }, { passive: false });
    
    // Inicializar el carrusel
    createProgressDots();
    showSlide(0);
});