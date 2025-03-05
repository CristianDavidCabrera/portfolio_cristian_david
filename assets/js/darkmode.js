// Cambio a modo oscuro
const darkModeToggle = document.getElementById("dark-mode-toggle");
const elementsToToggle = document.querySelectorAll(".dark-mode");

darkModeToggle.addEventListener("click", () => {
  elementsToToggle.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
});
