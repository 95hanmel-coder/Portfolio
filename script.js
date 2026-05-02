// Smooth scroll-animering på alla sektioner
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Hamburger-meny för mobil
function toggleMenu() {
  const ul = document.querySelector('nav ul');
  ul.classList.toggle('open');
}

// Stäng menyn när man klickar en länk
document.querySelectorAll('nav ul a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav ul').classList.remove('open');
  });
});