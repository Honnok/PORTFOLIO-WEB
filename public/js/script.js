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
        
            
            animateBar(".barfillhtml", document.querySelector(".bar:nth-child(1) .percentage"), "90%", 0);
            
            animateBar(".barfillcss", document.querySelector(".bar:nth-child(2) .percentage"), "25%", 0.5);
        
            animateBar(".barfillc", document.querySelector(".bar:nth-child(3) .percentage"), "43%", 1);
        });

const neonLine = document.getElementById("neon-line");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { // Ajustez la valeur pour déclencher l'effet
        neonLine.style.opacity = "1"; // Affiche la ligne de néon
    } else {
        neonLine.style.opacity = "0"; // Masque la ligne de néon
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const neonLine = document.getElementById("neon-line");
    const ctpSection = document.querySelector(".ctp");
    const pieChartCanvas = document.getElementById("pieChart");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            neonLine.style.opacity = "1";
        } else {
            neonLine.style.opacity = "0";
        }

        // Vérifiez si la section ctp est dans la vue
        const ctpPosition = ctpSection.getBoundingClientRect();
        if (ctpPosition.top < window.innerHeight && ctpPosition.bottom >= 0) {
            animateCtpSection();
        }
    });

    function animateCtpSection() {
        // Animation du slide avec GSAP
        gsap.to("#pieChart", {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                createPieChart();
            }
        });
    }

    function createPieChart() {
        const ctx = pieChartCanvas.getContext("2d");
        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['HTML', 'CSS', 'JavaScript'],
                datasets: [{
                    label: 'Compétences',
                    data: [20, 50, 30],
                    backgroundColor: [
                        '#FFFFFF',
                        '#00FFFF',
                        '#FF1493',
                    ],
                    borderColor: [
                        'rgb(0, 0, 0)',
                        'rgb(0, 0, 0)',
                        'rgb(0, 0, 0)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }
});