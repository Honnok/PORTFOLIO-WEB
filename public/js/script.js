const header = document.getElementById("header");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });

document.addEventListener("DOMContentLoaded", function() {
// Animation pour la barre Web Design
gsap.fromTo(".barfillhtml", 
    { height: "0%" }, 
    { height: "100%", duration: 2, ease: "power2.out" }
);
        
 // Animation pour la barre Python
 gsap.fromTo(".barfillcss", 
    { height: "0%" }, 
    { height: "100%", duration: 2, ease: "power2.out", delay: 0.5 }
);
        
// Animation pour la barre C#
gsap.fromTo(".barfillc", 
    { height: "0%" }, 
    { height: "100%", duration: 2, ease: "power2.out", delay: 1 }
);
});