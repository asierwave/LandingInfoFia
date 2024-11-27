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
},0);


// menu

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const body = document.body;

  // Alternar el menú al hacer clic en el botón de alternancia
  if (menu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  const menu = document.querySelector('.menu');
  const body = document.body;
  const main = document.querySelector('main');


  menu.classList.add('open');
  body.classList.add('menu-open');
  main.style.marginTop='260px';

}

function closeMenu() {
  const menu = document.querySelector('.menu');
  const body = document.body;
  const main = document.querySelector('main');


  menu.classList.remove('open');
  body.classList.remove('menu-open');
  main.style.marginTop='0';

}

// Detectar clics fuera del menú y cerrarlo
document.addEventListener('click', (event) => {
  const menu = document.querySelector('.menu');
  const toggleButton = document.querySelector('.menu-toggle');

  if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
    closeMenu();
  }
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', closeMenu);
});


// táctiles

// Selecciona todos los elementos usando querySelectorAll con una lista de selectores
const botones = document.querySelectorAll('#item1, .btn-mapa, .btn, .menucard');

// Itera sobre cada elemento seleccionado
botones.forEach(boton => {
  boton.addEventListener('touchstart', () => {
    boton.classList.add('activo'); // Agrega la clase "activo" al elemento tocado
  });

  boton.addEventListener('touchend', () => {
    boton.classList.remove('activo'); // Elimina la clase "activo" cuando se suelta
  });
});
