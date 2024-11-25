// Inicializar GSAP y ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Bloquear el scroll ajustando el height del body a la sección .content
const body = document.body;
const contentSection = document.querySelector(".content");
const mouseIcon = document.getElementById("mouseIcon");

// Asegurar que el height del body sea igual a la sección .content
body.style.overflow = "hidden"; // Bloquea el scroll
body.style.height = `${contentSection.offsetHeight}px`;

// Mostrar el mouseIcon a los 8 segundos
mouseIcon.style.opacity = 0; // Inicialmente invisible
mouseIcon.style.transition = "opacity 1s ease"; // Suavidad en la transición

setTimeout(() => {
  mouseIcon.style.opacity = 1; // Aparece gradualmente
}, 2000);

// Habilitar el scroll y ajustar el height del body después de 10 segundos
setTimeout(() => {
  body.style.overflow = "auto"; // Habilitar el scroll
  body.style.height = "auto"; // Devolver a su altura original
},4000);
