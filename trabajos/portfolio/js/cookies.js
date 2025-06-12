const botones = document.querySelectorAll('button');
const banner = document.getElementById('bannerCookies');

// Al cargar la página
addEventListener('load', checkCookies);

function checkCookies() {
    setTimeout(() => {
        // Solo mostrar si no hay cookie de aceptación NI de rechazo reciente
        if (!document.cookie.includes('cookieAceptada') && 
            !document.cookie.includes('cookieRechazada')) {
            banner.classList.remove('ocultarBanner');
        }
    }, 6500);
}

// Botón "No aceptar"
botones[1].addEventListener('click', function() {
    ocultaBanner();
    // Guardar cookie de rechazo por 1 hora (3600 segundos)
    document.cookie = 'cookieRechazada=1; max-age=3600; path=/';
});

// Botón "Aceptar"
botones[0].addEventListener('click', guardarCookie);

function guardarCookie() {
    // Cookie de aceptación (1 día)
    document.cookie = 'cookieAceptada=1; max-age=86400; path=/';
    // Eliminar cookie de rechazo si existe
    document.cookie = 'cookieRechazada=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    ocultaBanner();
}

function ocultaBanner() {
    banner.classList.add('ocultarBanner');
}