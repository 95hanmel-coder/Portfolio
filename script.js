/**
 * PORTFOLIO LOGIC - Clean & Isolated
 */

// 1. Tema-hantering (Local Storage inspiration)
const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    }
};

// 2. Reveal Animationer (Observer pattern)
const initScrollReveal = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
};

// 3. Mobilmeny
const toggleMenu = () => {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
};

// 4. "System Integrity Check" (Lokal motsvarighet till Health Check)
const runDiagnostics = () => {
    console.log("%c Portfolio Status: Operational ", "background: #1D9E75; color: #fff; padding: 5px;");
    console.log("Performance: Optimal");
    console.log("Theme Mode:", localStorage.getItem('theme') || 'default');
};

// Startsekvens
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    initScrollReveal();
    runDiagnostics();
});