

document.addEventListener("DOMContentLoaded", (event) => {
 gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase)
 // gsap code here!
});

        
        
        gsap.to("#overlay-dark", 2, {
            top:"-100%",
            ease: "power3.inOut",
            delay: 2,
        });

        gsap.from(".divider", 3, {
            scaleX: 0,
            ease: "power3.inOut",
            delay:1,
            stagger: {
                amount:1,
            },
        });

        gsap.from(".row > .col", 2, {
            opacity: 0,
            ease: "power3.inOut",
            delay: 1,
            stagger: {
                amount: 1.5,
            },
        });

        gsap.from(".marquee", 1, {
            right: "-50%",
            opacity: "0",
            ease: "power3.inOut",
            delay: 2,
        });







        document.addEventListener('DOMContentLoaded', function() {
            // Obtén todos los botones de reproducción y los contenedores de videos
            const playButtons = document.querySelectorAll('.play-button');
            const videoContainers = document.querySelectorAll('.video-container');
            
            // Función para manejar el clic en el botón de reproducción
            playButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const container = button.closest('.video-container'); // Contenedor del video (iframe)
                    const iframe = container.querySelector('iframe'); // iframe del video
                    const thumbnail = container.querySelector('.video-thumbnail'); // Miniatura del video
        
                    // Verifica si el iframe ya está visible
                    if (iframe.style.display === 'none' || iframe.style.display === '') {
                        // Muestra el iframe (video)
                        iframe.style.display = 'block'; // Asegura que el video se vea
                        button.style.display = 'none'; // Oculta el botón de reproducción
                        thumbnail.style.display = 'none'; // Oculta la miniatura
        
                        // Reproduce el video automáticamente
                        iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
                    } else {
                        // Detiene el video (esto es un truco de YouTube para detener el video)
                        iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
                        iframe.style.display = 'none'; // Oculta el iframe
                        button.style.display = 'block'; // Vuelve a mostrar el botón de reproducción
                        thumbnail.style.display = 'block'; // Vuelve a mostrar la miniatura
                    }
                });
            });
        });
        