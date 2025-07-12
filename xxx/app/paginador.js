// js/paginador.js

export function crearPaginador(totalVideos, paginaActual, videosPorPagina, mostrarVideos) {
  const paginador = document.getElementById("paginador");
  paginador.innerHTML = "";

  const totalPaginas = Math.ceil(totalVideos / videosPorPagina);
  const maxBotones = 5;

  let inicio = Math.max(1, paginaActual - Math.floor(maxBotones / 2));
  let fin = inicio + maxBotones - 1;

  if (fin > totalPaginas) {
    fin = totalPaginas;
    inicio = Math.max(1, fin - maxBotones + 1);
  }

  function crearBoton(texto, pagina) {
    const btn = document.createElement("button");
    btn.textContent = texto;
    btn.disabled = pagina === paginaActual;
    btn.addEventListener("click", () => mostrarVideos(pagina));
    return btn;
  }

  if (paginaActual > 1) {
    paginador.appendChild(crearBoton("<<", 1));
    paginador.appendChild(crearBoton("<", paginaActual - 1));
  }

  for (let i = inicio; i <= fin; i++) {
    const btn = crearBoton(i, i);
    if (i === paginaActual) btn.classList.add("activo");
    paginador.appendChild(btn);
  }

  if (paginaActual < totalPaginas) {
    paginador.appendChild(crearBoton(">", paginaActual + 1));
    paginador.appendChild(crearBoton(">>", totalPaginas));
  }
}