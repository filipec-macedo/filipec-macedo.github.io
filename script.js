console.log("Bem-vindo(a) ao portfólio de Filipe Carvalho Macedo! 🚀");

// Efeito clique nos botões
document.querySelectorAll('.project a').forEach(link => {
  link.addEventListener('click', (e) => {
    link.style.transform = "scale(0.96)";
    setTimeout(() => {
      link.style.transform = "scale(1)";
    }, 150);
  });
});

// Scroll Reveal: animações ao rolar
ScrollReveal().reveal('header', {
  delay: 200,
  origin: 'top',
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  reset: false
});

ScrollReveal().reveal('.project', {
  interval: 200,
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  easing: 'ease-out',
  reset: false
});

const topButton = document.getElementById('topButton');

// Mostra botão quando rola
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topButton.classList.add('show');
  } else {
    topButton.classList.remove('show');
  }
});

// Rola suavemente até o topo ao clicar
topButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
