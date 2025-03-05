const scrollTopBtn = document.getElementById("scroll-top-btn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTopBtn.style.display = "block"; // Muestra el botón
  } else {
    scrollTopBtn.style.display = "none"; // Oculta el botón
  }
};

// Funcionalidad de desplazamiento hacia arriba
scrollTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
