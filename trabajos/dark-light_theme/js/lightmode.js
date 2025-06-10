// Obtener estado del tema del DOM al cargar la web
let lightmode = localStorage.getItem('lightmode') //'active' si el tema claro estaba activado
const themeSwitch = document.getElementById('theme-switch') //Botón interruptor del tema

// Función para activar el tema claro
const enableLightmode = () => {
    // Añade la clase CSS al body para aplicar el tema claro
    document.body.classList.add('lightmode')
    // Guarda el estado en localStorage para persistir entre sesiones
    localStorage.setItem('lightmode', 'active')
}

// Función para desactivar el tema claro
const disableLightmode = () => {
    // Remueve la clase CSS del body para volver al tema oscuro
    document.body.classList.remove('lightmode')
    // Elimina el estado del localStorage o lo establece como null
    localStorage.setItem('lightmode', null)
}
// Al cargar la página: aplicar tema almacenado si existe
if (lightmode === "active") enableLightmode() // Si había tema claro activado, aplicarlo


// Evento click del interruptor del tema
themeSwitch.addEventListener("click", () => {
    // Obtener el estado actualizado del tema
    lightmode = localStorage.getItem('lightmode')
    //Actica y desactiva el modo light
    lightmode !== "active" ? enableLightmode() : disableLightmode()
})