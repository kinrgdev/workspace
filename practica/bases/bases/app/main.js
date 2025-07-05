function barScroll() {
  let scrolling = document.getElementById('barra');
  let winScroll = scrollY;
  let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolleo = (winScroll / alto) * 100;
  scrolling.style.width = scrolleo + "%";
}

addEventListener('scroll', barScroll);

////Ir arriba

let btnTop = document.getElementById('btnUp');
function irArriba() {
  if (scrollY > 100) {
    btnTop.classList.add('btnUpActive');
  } else {
    btnTop.classList.remove('btnUpActive');
  }
}

window.addEventListener('scroll', irArriba);