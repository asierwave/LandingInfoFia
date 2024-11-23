// var animation = lottie.loadAnimation({
//     container: document.getElementById('anim'),
//     renderer:'svg',
//     loop: false,
//     autoplay: true,
//     path: 'OV1.json',

// })
 // Cargar la animación Lottie
var animation = lottie.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: false, // No en bucle inicialmente
    autoplay: false, // No se reproduce automáticamente
    path: 'OV1.json', // Ruta al archivo JSON de la animación
  });
  
  // Retrasar la reproducción de la animación por 4 segundos
  setTimeout(() => {
    animation.play(); // Iniciar la animación después de 4 segundos
  }, 4000);
  
  // Cuando la animación completa su reproducción inicial
  animation.addEventListener('complete', function onComplete() {
    var totalFrames = animation.totalFrames;
    var startLoopFrame = totalFrames - 73; // Los últimos 73 fotogramas funcionan, el doble tambien
  
    // Configurar los últimos 45 fotogramas en bucle infinito
    animation.loop = true; // Activar el bucle para el segmento
    animation.playSegments([startLoopFrame, totalFrames], true); // Definir el segmento
  
    // Remover el evento `complete` para evitar conflictos
    animation.removeEventListener('complete', onComplete);
  });
  