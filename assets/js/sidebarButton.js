const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarIcon = document.getElementById("sidebar-icon");

const sidebarHome = document.getElementById("home-sidebar");
const sidebarAbout = document.getElementById("about-sidebar");
const sidebarEducation = document.getElementById("education-sidebar");
const sidebarSkill = document.getElementById("skill-sidebar");
const sidebarProject = document.getElementById("projects-sidebar");
const sidebarContact = document.getElementById("contact-sidebar");
const sidebarSpanish = document.getElementById("toggle-language-tablet-es");
const sidebarEnglish = document.getElementById("toggle-language-tablet-en");

sidebarToggle.addEventListener("click", () => {
  sidebarToggle.classList.toggle("hidden-item");
  sidebar.classList.toggle("open");
});

sidebarIcon.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});

sidebarHome.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});

sidebarAbout.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});
sidebarEducation.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});
sidebarSkill.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});
sidebarProject.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});
sidebarContact.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});
sidebarSpanish.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});
sidebarEnglish.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
});
