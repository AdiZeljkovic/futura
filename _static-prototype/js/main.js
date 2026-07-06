// Reveal-on-scroll + nav background

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.25 }
);

reveals.forEach((el) => observer.observe(el));

const nav = document.getElementById("nav");

window.addEventListener(
  "scroll",
  () => nav.classList.toggle("nav--scrolled", window.scrollY > 40),
  { passive: true }
);
