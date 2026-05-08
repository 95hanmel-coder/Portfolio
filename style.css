/**
 * PORTFOLIO LOGIC
 */

/* =========================
   THEME
========================= */

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark-mode");

  const isDark =
    document.documentElement.classList.contains("dark-mode");

  localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
  );
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  }
};

/* =========================
   MOBILE MENU
========================= */

const toggleMenu = () => {
  document
    .querySelector("nav ul")
    .classList.toggle("active");
};

/* =========================
   SCROLL REVEAL
========================= */

const initScrollReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  document
    .querySelectorAll(".fade-in")
    .forEach((el) => observer.observe(el));
};

/* =========================
   PROJECT CARDS
========================= */

const initCards = () => {
  document
    .querySelectorAll(".card")
    .forEach((card) => {
      card.addEventListener("click", () => {
        const link = card.dataset.link;

        if (link) {
          window.open(link, "_blank");
        }
      });
    });
};

/* =========================
   DIAGNOSTICS
========================= */

const runDiagnostics = () => {
  console.log(
    "%c Portfolio Status: Operational ",
    "background: #1D9E75; color: white; padding: 6px;"
  );

  console.log("Theme:",
    localStorage.getItem("theme") || "default"
  );
};

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

  loadTheme();

  initScrollReveal();

  initCards();

  runDiagnostics();

  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);
});