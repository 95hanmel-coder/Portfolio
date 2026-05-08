// 1. Fade-in animation vid scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .card').forEach(el => {
  observer.observe(el);
});

// 2. Hamburgermeny för mobilen
function toggleMenu() {
  const ul = document.querySelector('nav ul');
  ul.classList.toggle('open');
}

// Stäng menyn vid klick på länk
document.querySelectorAll('nav ul a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav ul').classList.remove('open');
  });
});

// 3. LIVE HEALTH CHECK (Koppling till Snaxers)
async function checkSnaxersHealth() {
  const badge = document.getElementById('snaxers-status');
  if (!badge) return;

  try {
    // Vi anropar hälsokontrollen på din Azure-instans
    const response = await fetch('https://ca-snaxers-dev.swedencentral.azurecontainerapps.io/health/live', {
      method: 'GET',
      mode: 'cors'
    });

    if (response.ok) {
      badge.innerHTML = '● Live & Healthy';
      badge.style.borderColor = '#1D9E75';
      badge.style.color = '#1D9E75';
      badge.style.background = 'rgba(29, 158, 117, 0.1)';
    } else {
      throw new Error();
    }
  } catch (error) {
    badge.innerHTML = '● Maintenance';
    badge.style.color = '#D85A30';
  }
}

// Kör hälsokollen när sidan laddas
window.addEventListener('DOMContentLoaded', checkSnaxersHealth);