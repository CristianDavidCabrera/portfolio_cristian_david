// Obtener el botón de scroll hacia arriba
const scrollTopBtn = document.getElementById('scroll-top-btn');

// Mostrar el botón cuando el usuario se desplace hacia abajo
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = 'block';  // Muestra el botón
    } else {
        scrollTopBtn.style.display = 'none';   // Oculta el botón
    }
};

// Funcionalidad de desplazamiento hacia arriba
scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
