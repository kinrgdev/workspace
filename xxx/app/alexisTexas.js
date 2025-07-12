// Ejemplo para miaMalkova.js (aplicar mismo formato a los demás)

import { crearPaginador } from './paginador.js';

const contenedor = document.getElementById("miniaturas");
const paginador = document.getElementById("paginador");
// Usar ruta relativa en lugar de baseURL
// const baseURL = window.location.origin;

const videosPorPagina = 10;
let paginaActual = 1;

// Filtra los videos del personaje específico
const videosPersonaje = window.todosLosVideos.filter(v => v.personajeId === "alexisTexas");

function mostrarVideos(pagina) {
  paginaActual = pagina;
  contenedor.innerHTML = "";
  const inicio = (pagina - 1) * videosPorPagina;
  const fin = inicio + videosPorPagina;
  const videos = videosPersonaje.slice(inicio, fin);

  if (!videos || videos.length === 0) {
    contenedor.innerHTML = "<p>No hay videos disponibles.</p>";
    return;
  }

  videos.forEach(video => {
    // Extraer src del iframe
    const match = video.iframe.match(/src="([^"]+)"/i);
    const iframeSrc = match ? match[1] : "";
    
    // Crear objeto con parámetros
    const params = {
      id: video.id,
      title: encodeURIComponent(video.titulo),
      img: encodeURIComponent(video.img),
      src: encodeURIComponent(iframeSrc)
    };
    
    // Construir cadena de parámetros manualmente
    const queryString = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

    const div = document.createElement("div");
    div.className = "miniatura";

    div.innerHTML = `
      <article class="video-card">
        <a href="../player.html?${queryString}" aria-label="Ver video: ${video.titulo}">
          <div class="img-container">
            <h2 class="titulo-personaje">${video.personajeNombre}</h2>
            <img src="${video.img}" alt="${video.titulo}" loading="lazy">
            <span class="duracion">${video.duracion}</span>
          </div>
          <h3>${video.titulo}</h3>
        </a>
      </article>
    `;
    contenedor.appendChild(div);
  });

  crearPaginador(videosPersonaje.length, paginaActual, videosPorPagina, mostrarVideos);
}

mostrarVideos(1);

