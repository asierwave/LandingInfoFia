// Inicializar GSAP y ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Seleccionar todos los elementos dentro de las secciones que deseas animar
const elements = document.querySelectorAll(".contentb .description p, .contentb #anim2, .contentb #anim5, .contentc .list .item");

// Aplicar animación a cada elemento de forma individual
elements.forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50, // Comienza desplazado hacia abajo
    },
    {
      opacity: 1,
      y: 0, // Termina en su posición normal
      duration: 1,
      scrollTrigger: {
        trigger: element, // Cada elemento dispara su propia animación
        start: "top 85%", // Comienza cuando el 85% del elemento entra en el viewport
        end: "top 60%", // Finaliza cuando el 60% queda visible
        scrub: true, // Sincroniza con el desplazamiento del scroll
        toggleActions: "play none none reverse", // Reproduce y vuelve hacia atrás al scrollear hacia arriba
      },
    }
  );
});
