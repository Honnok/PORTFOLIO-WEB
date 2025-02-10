const header = document.getElementById("header");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            // Fonction pour animer une barre et son pourcentage
            function animateBar(barFillClass, percentageElement, targetHeight, delay) {
                gsap.fromTo(
                    barFillClass,
                    { height: "0%" },
                    {
                        height: targetHeight,
                        duration: 2,
                        ease: "power2.out",
                        delay: delay,
                        onUpdate: function () {
                            // Mettre à jour le texte du pourcentage en fonction de la progression
                            const currentHeight = parseFloat(this.targets()[0].style.height);
                            percentageElement.textContent = `${Math.round(currentHeight)}%`;
                        },
                        onComplete: function () {
                            // S'assurer que le pourcentage est exact à la fin de l'animation
                            percentageElement.textContent = `${Math.round(parseFloat(targetHeight))}%`;
                        },
                    }
                );
            }
        
            // Animation pour la barre Web Design (100%)
            animateBar(".barfillhtml", document.querySelector(".bar:nth-child(1) .percentage"), "100%", 0);
        
            // Animation pour la barre Python (40%)
            animateBar(".barfillcss", document.querySelector(".bar:nth-child(2) .percentage"), "40%", 0.5);
        
            // Animation pour la barre C# (35%)
            animateBar(".barfillc", document.querySelector(".bar:nth-child(3) .percentage"), "35%", 1);
        });