const carousel = document.getElementById('carousel');
        const cards = carousel.querySelectorAll('.card');
        const iconsContainer = document.getElementById('progressIcons');
        let current = 0;

        // Crear indicadores sin innerHTML (usando métodos DOM seguros)
        cards.forEach((_, i) => {
            const icon = document.createElement('div');
            icon.className = 'progress-icon';
            icon.addEventListener('click', () => goTo(i));
            iconsContainer.appendChild(icon);
        });

        // Actualizar indicador inicial
        updateIndicators();

        function goTo(index) {
            current = index;
            const cardWidth = cards[0].offsetWidth;
            carousel.scrollTo({
                left: current * cardWidth,
                behavior: 'smooth'
            });
            updateIndicators();
        }

        function updateIndicators() {
            document.querySelectorAll('.progress-icon').forEach((icon, idx) => {
                icon.classList.toggle('active', idx === current);
            });
        }

        // Scroll listener para actualizar indicadores
        carousel.addEventListener('scroll', () => {
            const cardWidth = cards[0].offsetWidth;
            const newCurrent = Math.round(carousel.scrollLeft / cardWidth);
            
            if (newCurrent !== current) {
                current = newCurrent;
                updateIndicators();
            }
        });

        // Control del scroll vertical
        carousel.addEventListener('wheel', (e) => {
            // Solo permitir scroll horizontal
            if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                e.preventDefault();
                
                // Determinar la dirección del scroll vertical
                if (e.deltaY > 0 && current < cards.length - 1) {
                    goTo(current + 1);
                } else if (e.deltaY < 0 && current > 0) {
                    goTo(current - 1);
                }
            }
        });