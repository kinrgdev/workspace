// app/player.js
console.log("Ubicación actual:", window.location.href);

function getParamFromURL(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param) ? decodeURIComponent(params.get(param)) : "";
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("Parámetros de URL:", window.location.search);
  
  const videoTitle = getParamFromURL("title") || "Video sin título";
  const videoImg = getParamFromURL("img");
  const videoSrc = getParamFromURL("src");

  console.log("Título:", videoTitle);
  console.log("Imagen:", videoImg);
  console.log("Fuente:", videoSrc);

  // Actualizar título
  document.title = videoTitle;
  const titleElement = document.getElementById("video-title");
  if (titleElement) {
    titleElement.textContent = videoTitle;
  }

  // Insertar reproductor
  const reproductor = document.getElementById("reproductor");
  if (reproductor) {
    if (videoSrc) {
      reproductor.innerHTML = `
        <div class="video-container">
          <iframe 
            src="${videoSrc}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      `;
    } else {
      reproductor.innerHTML = `
        <p class='error'>
          Error: No se encontró el video.<br>
          Parámetros recibidos: ${window.location.search}
        </p>
      `;
    }
  }
});