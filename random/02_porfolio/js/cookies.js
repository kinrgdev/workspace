let botones = document.querySelectorAll('button');
let banner = document.getElementById('bannerCookies');

addEventListener('load', checkCookies);

function checkCookies() {
    if (!document.cookie.includes('cookieAceptada')) {
        banner.classList.remove('ocultarBanner'); 
    }
}

botones[1].addEventListener('click', function() {
    ocultaBanner();
    const unaHora = 3600 * 1000;
    setTimeout(() => {
        if (!document.cookie.includes('cookieAceptada')) {
            banner.classList.remove('ocultarBanner');
        }
    }, unaHora);
});

function ocultaBanner() {
    banner.classList.add('ocultarBanner');
}

botones[0].addEventListener('click', guardarCookie);
function guardarCookie() {
    document.cookie = 'cookieAceptada=1; max-age=86400; path=/';
    ocultaBanner();
}