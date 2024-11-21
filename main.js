

document.addEventListener("DOMContentLoaded", (event) => {
 gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase)
 // gsap code here!
});

        
        
        gsap.to("#overlay-dark", 2, {
            top:"-100%",
            ease: "power3.inOut",
            delay: 4,
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
            delay: 2,
            stagger: {
                amount: 1.5,
            },
        });

        gsap.from(".marquee", 1, {
            bottom: "-5%",
            opacity: "0",
            ease: "power3.inOut",
            delay: 4.5,
        });

