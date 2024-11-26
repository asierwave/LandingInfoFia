// Inicializar GSAP y ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Seleccionar todos los elementos del body excepto los scripts y algunos elementos específicos
const elements = document.querySelectorAll("p, h3, .containerc h2, .item, .titulo, form");

// Aplicar animación a cada elemento de forma individual
elements.forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50, // Desplazado hacia abajo
    },
    {
      opacity: 1,
      y: 0, // En su posición original
      duration: 1.2,
      scrollTrigger: {
        trigger: element, // El elemento activa su propia animación
        start: "top 85%", // Inicia cuando el elemento está al 85% del viewport
        end: "top 80%",   // Termina al 60% del viewport
        scrub: 2,      // Sincroniza la animación con el scroll
        toggleActions: "play none none reverse", // Animación reversible al scrollear hacia arriba
      },
    }
  );
});
