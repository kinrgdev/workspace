//$ *************************************************
//$ ****************** H1 ANIMADO *******************
//$ *************************************************
gsap.from("h1", { y: -100, opacity: 0, duration: 1, ease: "power1.in" });

//$ *************************************************
//$ ******************* CAROUSEL ********************
//$ *************************************************

onload = function() {
  const carousel = document.querySelector('.projectsCarousel');
  const cards = document.querySelectorAll('.projectCard');
  const icons = document.getElementById('progressIcons');
  let current = 0;

  cards.forEach((_, i) =>
    icons.innerHTML += `<i class="fas fa-circle progress-icon" onclick="goTo(${i})"></i>`
  );
  document.querySelector('.progress-icon').classList.add('active');

  function goTo(i) {
    current = Math.max(0, Math.min(i, cards.length - 1));
    const x = current * (cards[0].offsetWidth + 32);
    gsap.to(carousel, {
      duration: 0.6,
      ease: "power2.inOut",
      scrollTo: { x }
    });
    updateIcons();
    animateCardIn(current);
  }
function updateIcons() {
  document.querySelectorAll('.progress-icon').forEach((icon, idx) => {
    const isActive = idx === current;
    // Marcamos la clase
    icon.classList.toggle('active', isActive);
    // Ajustamos punto de transformación
    icon.style.transformOrigin = '50% 50%';

    if (isActive) {
      // Primero lo dejamos grande
      gsap.set(icon, { scale: 1.4, opacity: 1 });
      // Shake rápido centrado en su estado grande
      gsap.fromTo(icon,
        { x: -8 },
        { x: 8, duration: 0.1, yoyo: true, repeat: 5, ease: "power1.inOut" }
      );
      // Pequeño “pop” final (opcional beef)
      gsap.to(icon, {
        duration: 0.2,
        scale: 1.5,
        ease: "back.out(2)",
        delay: 0.6
      });
    } else {
      // Inactivos: tamaño normal y semitransparentes
      gsap.to(icon, {
        duration: 0.4,
        scale: 1,
        opacity: 0.5,
        ease: "power2.out"
      });
    }
  });
}

function animateCardIn(index) {
  cards.forEach(card => gsap.set(card, { scale: 1 }));
  gsap.from(cards[index], {
    duration: .7,
    scale: .8,
    ease: "bounce.out"
  });
}

  // Scroll listener para actualizar índices
  carousel.addEventListener('scroll', () => {
    current = Math.round(carousel.scrollLeft / (cards[0].offsetWidth + 32));
    updateIcons();
  });

  // Wheel (rueda) para cambiar tarjeta
  window.addEventListener('wheel', e => {
    e.preventDefault();
    goTo(current + (e.deltaY > 0 ? 1 : -1));
  }, { passive: false });

  // Animación inicial
  animateCardIn(0);
};
