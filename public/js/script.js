const neonLine = document.getElementById("neon-line");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { 
        neonLine.style.opacity = "1";
    } else {
        neonLine.style.opacity = "0";
    }
});