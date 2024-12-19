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









// menu y cambio mouse icon

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
  const IconMouse = document.querySelector('.mouseIconIcon');



  menu.classList.add('open');
  body.classList.add('menu-open');
  // main.style.marginTop='260px' '300px';
  main.style.marginTop='235px';
  IconMouse.innerHTML = "&#10006;";



}

function closeMenu() {
  const menu = document.querySelector('.menu');
  const body = document.body;
  const main = document.querySelector('main');
  const IconMouse = document.querySelector('.mouseIconIcon');



  menu.classList.remove('open');
  body.classList.remove('menu-open');
  main.style.marginTop='0';
  IconMouse.innerHTML = "&#9776";






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









// NAV MASTER FILOSOFIA 


const navMasterButton1 = document.querySelector('.navMasterButton1');
const navMasterButton2 = document.querySelector('.navMasterButton2');
const navMasterList = document.querySelector ('.navMasterList')

navMasterButton1.addEventListener('click', () => {
  navMasterList.style.margin = '0 0 0 -89vw';
  navMasterList.style.width = 'fit-content';
  navMasterList.style.justifyContent = 'flex-end';
  navMasterList.style.right = '0';


  navMasterButton1.style.display='none';
  navMasterButton2.style.display='flex';

});

navMasterButton2.addEventListener('click', () => {
  navMasterList.style.margin = '0 0 0 0';
  navMasterButton2.style.display='none';
  navMasterButton1.style.display='flex';

});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 800) {
    navMasterList.style.margin='0 0 0 0';
    navMasterButton1.style.display='none';
    navMasterButton2.style.display='none';
  } else {
    navMasterButton1.style.display='flex';
    navMasterList.style.margin='0 0 0 0';
  }
});






// Hacer desaparecer MouseIcon al final de la pág

document.addEventListener('scroll', () => {
  const mouse = document.querySelector('#mouseIcon'); 
  const scrollTop = window.scrollY; 
  const windowHeight = window.innerHeight; 
  const documentHeight = document.documentElement.scrollHeight; 

  if (scrollTop + windowHeight >= documentHeight) {
      mouse.style.opacity = '0';
  } else {
      mouse.style.opacity = '1'; 
  }
});
