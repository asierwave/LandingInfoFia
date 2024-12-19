

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





        document.addEventListener("DOMContentLoaded", function() {
            // Seleccionamos todos los botones de reproducción
            const playButtons = document.querySelectorAll(".play-button");
            const iframes = document.querySelectorAll("iframe");

        
            playButtons.forEach((button, index) => {
                button.addEventListener("click", function() {
                    const iframe = iframes[index];
                    const container = iframe.parentElement;
                    const thumbnail = container.querySelector(".video-thumbnail");
                    // Cambiamos la URL del iframe para permitir que se reproduzca automáticamente
                    const iframeSrc = iframe.src;
                    iframe.src = iframeSrc.replace("autoplay=0", "autoplay=1");
                    // Ocultamos el botón de play y la imagen de portada
                    button.style.display = "none";
                    iframe.style.display = "block";
                    thumbnail.style.opacity = "0";   
                    setTimeout(() => {
                        thumbnail.style.display = "none";
                    }, 280);
                });
            });
        });
        