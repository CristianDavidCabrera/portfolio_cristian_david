const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarIcon = document.getElementById("sidebar-icon");

sidebarToggle.addEventListener("click", () => {
  sidebarToggle.classList.toggle("hidden-item");
  sidebar.classList.toggle("open");
});



sidebarIcon.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});
