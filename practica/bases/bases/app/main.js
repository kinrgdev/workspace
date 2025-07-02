function barScroll() {
  let scrolling = document.getElementById('barra');
  let winScroll = scrollY;
  let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolleo = (winScroll / alto) * 100;
  scrolling.style.width = scrolleo + "%";
}

addEventListener('scroll', barScroll);