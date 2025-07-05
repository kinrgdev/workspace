 // Seleccionar elementos
        const image = document.getElementById('image');
        const textContainer = document.getElementById('textContainer');
        const progressText = document.getElementById('progressText');
        
        // Texto a mostrar
        const textToType = "Este texto aparece con efecto de máquina de escribir cuando pasas el cursor sobre la imagen...";
        
        // Variables de control
        let typingInterval;
        let currentIndex = 0;
        
        // Función que escribe un carácter a la vez
        function typeWriter() {
            if (currentIndex < textToType.length) {
                progressText.textContent += textToType.charAt(currentIndex);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }
        
        // Evento al pasar el cursor sobre la imagen
        image.addEventListener('mouseenter', () => {
            // Reiniciar variables
            currentIndex = 0;
            progressText.textContent = "";
            
            // Mostrar contenedor de texto
            textContainer.style.opacity = "1";
            textContainer.style.transform = "translateY(0)";
            
            // Iniciar efecto máquina de escribir
            typingInterval = setInterval(typeWriter, 50);
        });
        
        // Evento al quitar el cursor de la imagen
        image.addEventListener('mouseleave', () => {
            // Detener animación
            clearInterval(typingInterval);
            
            // Ocultar contenedor de texto
            textContainer.style.opacity = "0";
            textContainer.style.transform = "translateY(20px)";
        });