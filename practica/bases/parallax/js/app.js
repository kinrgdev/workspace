function parallax() {
  let scroll = window.pageYOffset;
  let altura =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scroleado = (scroll / altura) * 100;
  let mitadScroleado = scroleado / 2;
  let body = document.querySelector("body");

  body.style.backgroundPositionY = scroleado + "%, " + mitadScroleado + "%";
  body.style.backgroundSize = scroleado + 100 + "%, " + (scroleado / 2 + 100) + "%";
}

window.addEventListener("scroll", parallax);