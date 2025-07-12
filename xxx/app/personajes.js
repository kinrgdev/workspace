// js/renderVideos.js
import { crearPaginador } from './paginador.js';

export function cargarVideosPorPersonaje(personajeId) {
  const personaje = window.personajes.find(p => p.id === personajeId);

  if (!personaje) {
    document.getElementById("miniaturas").innerHTML = "<p>Personaje no encontrado.</p>";
    return;
  }

  const contenedor = document.getElementById("miniaturas");
  const paginadorContenedor = document.getElementById("paginador");

  const videosPorPagina = 12;
  let paginaActual = 1;

  function mostrarVideos(pagina) {
    paginaActual = pagina;
    contenedor.innerHTML = "";
    const inicio = (pagina - 1) * videosPorPagina;
    const fin = inicio + videosPorPagina;
    const videos = personaje.videos.slice(inicio, fin);

    if (videos.length === 0) {
      contenedor.innerHTML = "<p>No hay videos disponibles.</p>";
      return;
    }

    videos.forEach(video => {
      const div = document.createElement("div");
      div.className = "miniatura";

      div.innerHTML = `
        <article class="video-card">
          <a href="../player.html?${new URLSearchParams({
            iframe: video.iframe,
            title: video.titulo,
            id: video.id
          })}" aria-label="Ver video: ${video.titulo}">
            <div class="img-container">
              <img src="${video.img}" alt="${video.titulo}" loading="lazy">
              <span class="duracion">${video.duracion}</span>
            </div>
            <h3>${video.titulo}</h3>
          </a>
        </article>
      `;
      contenedor.appendChild(div);
    });

    crearPaginador(
      personaje.videos.length,
      paginaActual,
      videosPorPagina,
      mostrarVideos,
      paginadorContenedor
    );
  }

  mostrarVideos(paginaActual);
}