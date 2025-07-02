const mediaQuery = matchMedia('(max-width: 768px)');
const menu = document.getElementById('nav');
const icons = document.getElementById('hamb');
const links = document.querySelectorAll('#nav a');
const hambIcon = icons.querySelector('i');

function toggleMenu() {
    // Alternar clase active en el menú
    menu.classList.toggle('active');

    // Rotar el ícono
    if (menu.classList.contains('active')) {
        hambIcon.classList.remove('fa-bars');
        hambIcon.classList.add('fa-times', 'rotar');
    } else {
        hambIcon.classList.remove('fa-times', 'rotar');
        hambIcon.classList.add('fa-bars');
    }
}

function cerrarMenu() {
    menu.classList.remove('active');
    hambIcon.classList.remove('fa-times', 'rotar');
    hambIcon.classList.add('fa-bars');
}

function menuResponsive() {
    if (mediaQuery.matches) {
        // Móvil: configurar menú
        menu.classList.add('menuResponsive');
        menu.classList.remove('active');
        icons.style.display = 'block';

        // Resetear ícono
        hambIcon.classList.remove('fa-times', 'rotar');
        hambIcon.classList.add('fa-bars');

        // Event listeners
        icons.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', cerrarMenu));
    } else {
        // Escritorio: resetear menú
        menu.classList.remove('menuResponsive', 'active');
        menu.style.maxHeight = '';
        icons.style.display = 'none';

        // Resetear ícono
        hambIcon.classList.remove('fa-times', 'rotar');
        hambIcon.classList.add('fa-bars');

        // Remover listeners
        icons.removeEventListener('click', toggleMenu);
        links.forEach(link => link.removeEventListener('click', cerrarMenu));
    }
}

function clicFueraMenu(e) {
    if (
        mediaQuery.matches &&
        menu.classList.contains('active') &&
        !menu.contains(e.target) &&
        !icons.contains(e.target)
    ) {
        cerrarMenu();
    }
}

// Inicialización
menuResponsive();
mediaQuery.addEventListener('change', menuResponsive);
document.addEventListener('click', clicFueraMenu);