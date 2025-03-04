document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".slide-track");

    if (!track) {
        console.error("No se encontró el elemento .slide-track");
        return;
    }

    const logos = Array.from(track.children);
    
    if (logos.length === 0) {
        console.error("No hay imágenes dentro de .slide-track");
        return;
    }

    // Clonamos los logos para evitar espacios en el carrusel
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
    });
});
