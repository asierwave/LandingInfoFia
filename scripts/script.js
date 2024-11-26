// var animation = lottie.loadAnimation({
//     container: document.getElementById('anim'),
//     renderer:'svg',
//     loop: false,
//     autoplay: true,
//     path: 'OV1.json',

// })




// // Cargar la primera animación en el contenedor #anim
// var animation1 = lottie.loadAnimation({
//   container: document.getElementById('anim'),
//   renderer: 'svg',
//   loop: false, // No en bucle inicialmente
//   autoplay: false, // No se reproduce automáticamente
//   path: 'OV1.json', // Ruta al archivo JSON de la primera animación
// });

// // Retrasar la reproducción de la primera animación por 4 segundos
// setTimeout(() => {
//   animation1.play(); // Iniciar la animación después de 4 segundos
// }, 4000);

// // Configuración de bucle para los últimos 73 fotogramas de la primera animación
// animation1.addEventListener('complete', function onComplete1() {
//   var totalFrames = animation1.totalFrames;
//   var startLoopFrame = totalFrames - 73; // Los últimos 73 fotogramas

//   // Configurar el bucle para el segmento
//   animation1.loop = true; // Activar el bucle
//   animation1.playSegments([startLoopFrame, totalFrames], true); // Definir el segmento

//   // Remover el evento `complete` para evitar conflictos
//   animation1.removeEventListener('complete', onComplete1);
// });

// // Ajustar la velocidad de la animación con el desplazamiento
// var scrollSpeedFactor = 0.02; // Controla la velocidad de aceleración
// var maxSpeed = 10; // Velocidad máxima de la animación

// window.addEventListener('scroll', function() {
//   var scrollPosition = window.scrollY; // Obtén la posición del scroll
//   var scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Altura total de la página
//   var scrollPercent = scrollPosition / scrollHeight; // Porcentaje de desplazamiento

//   // Calcula la velocidad de la animación en función del desplazamiento
//   var newSpeed = 1 + scrollPercent * maxSpeed; // La velocidad aumenta con el desplazamiento
//   animation1.setSpeed(newSpeed); // Establece la nueva velocidad de la animación
// });
// Cargar la animación de Lottie
  // Cargar la animación de Lottie
   // Cargar la animación de Lottie
     // Cargar la animación de Lottie
  var animation1 = lottie.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'canvas',
    loop: false, // Sin bucle inicial
    autoplay: false, // No se reproduce automáticamente
    path: 'OV1.json', // Ruta al archivo JSON de la animación
  });

  animation1.addEventListener('DOMLoaded', function () {
    var totalFrames = animation1.totalFrames;
    var startLoopFrame = totalFrames - 73; // Frame donde comienza el bucle
    var duration = 9; // Duración en segundos para llegar al bucle
    var startTime = null; // Momento inicial de la animación

    function animateToLoop(currentTime) {
      if (!startTime) startTime = currentTime; // Guardar el tiempo inicial
      var elapsed = (currentTime - startTime) / 1000; // Tiempo transcurrido en segundos
      var progress = Math.min(elapsed / duration, 1); // Progreso de 0 a 1
      var easedProgress = easeInOutQuad(progress); // Aplicar suavizado
      var currentFrame = easedProgress * (startLoopFrame); // Calcular el frame actual

      animation1.goToAndStop(currentFrame, true); // Ir al frame correspondiente

      if (progress < 1) {
        // Continuar hasta completar la duración
        requestAnimationFrame(animateToLoop);
      } else {
        // Activar bucle al final del segmento
        animation1.loop = true; // Habilitar el bucle
        animation1.playSegments([startLoopFrame, totalFrames], true); // Reproducir el bucle final
      }
    }

    // Función de easing para suavizar la progresión
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    // Iniciar la animación con aceleración suave hacia el bucle
    requestAnimationFrame(animateToLoop);
  });








// Cargar la segunda animación en el contenedor #anim2
var animation2 = lottie.loadAnimation({
  container: document.getElementById('anim2'),
  renderer: 'svg',
  loop: true, // No en bucle
  autoplay: true, // Se reproduce automáticamente
  path: './careta.json', // Ruta al archivo JSON de la segunda animación
});





// Cargar la tercera animación en el contenedor #anim3
var animation3 = lottie.loadAnimation({
  container: document.getElementById('anim3'),
  renderer: 'svg',
  loop: true, // en bucle
  autoplay: true, // Se reproduce automáticamente
  path: './ojoin.json', // Ruta al archivo JSON de la segunda animación
});


// Cargar la cuarta animación en el contenedor #anim4
var animation4 = lottie.loadAnimation({
  container: document.getElementById('anim4'),
  renderer: 'svg',
  loop: true, // en bucle
  autoplay: true, // Se reproduce automáticamente
  path: './ojoin.json', // Ruta al archivo JSON de la segunda animación
});








// Para entrada de anim2 mascara 

document.addEventListener("DOMContentLoaded", () => {
  // Registro de ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animación del height y left de #anim2
  gsap.fromTo(
    "#anim2",
    { height: "0%", left: "100%" }, // Estado inicial
    {
      height: "100%", // Altura final
      left: "0%", // Posición final
      scrollTrigger: {
        trigger: ".content", // Elemento que activa el efecto
        start: "top +100px", // Comienza cuando la parte superior entra al viewport
        end: "bottom", // Termina cuando la parte inferior sale del viewport
        scrub: true, // Sincroniza con el desplazamiento
      }
    }
  );
});




// Para entrada de anim5 cable izquierda

// Inicializa la animación Lottie en #anim5
var animation5 = lottie.loadAnimation({
  container: document.getElementById('anim5'),
  renderer: 'canvas',
  loop: true,
  autoplay: false, // No se reproducirá automáticamente
  path: './cable5.json', // Reemplaza con la ruta correcta a tu archivo JSON
});

// Sincronizar la animación con el desplazamiento usando ScrollTrigger
gsap.to(animation5, {
  scrollTrigger: {
    trigger: ".content", // Activador para este elemento (debe ser #anim5)
    start: "top +100px", // Inicia cuando la parte superior de #anim5 entra en el viewport
    end: "bottom +100px", // Termina cuando la parte inferior de #anim5 sale del viewport
    scrub: true, // Hacer que la animación siga al desplazamiento de manera fluida
    onUpdate: (self) => {
      // Sincroniza la animación de Lottie con el progreso del scroll
      animation5.goToAndStop(self.progress * animation5.totalFrames, true);
    }
  }
});



// Para entrada de anim5 cable izquierda

// Inicializa la animación Lottie en #anim6
var animation6 = lottie.loadAnimation({
  container: document.getElementById('anim6'),
  renderer: 'svg',
  loop: true,
  autoplay: false, // No se reproducirá automáticamente
  path: './lineasbajas.json', // Reemplaza con la ruta correcta a tu archivo JSON
});

// Sincronizar la animación con el desplazamiento usando ScrollTrigger
gsap.to(animation6, {
  scrollTrigger: {
    trigger: ".contentb", // Activador para este elemento (debe ser #anim5)
    start: "top -200px", // Inicia cuando la parte superior de #anim5 entra en el viewport
    end: "bottom -200px", // Termina cuando la parte inferior de #anim5 sale del viewport
    scrub: 1, // Hacer que la animación siga al desplazamiento de manera fluida
    onUpdate: (self) => {
      // Sincroniza la animación de Lottie con el progreso del scroll
      animation6.goToAndStop(self.progress * animation6.totalFrames, true);
    }
  }
});

