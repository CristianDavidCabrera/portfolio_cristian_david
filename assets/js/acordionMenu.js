document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".accordion-toggle");
    const content = document.querySelector(".accordion-content");
  
    toggle.addEventListener("click", function () {
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
  