const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarIcon = document.getElementById("sidebar-icon");

const sidebarItems = [
  "home-sidebar",
  "about-sidebar",
  "education-sidebar",
  "skill-sidebar",
  "projects-sidebar",
  "contact-sidebar",
  "toggle-language-tablet-es",
  "toggle-language-tablet-en",
].map(id => document.getElementById(id));

const toggleSidebar = () => {
  sidebar.classList.toggle("open");
  sidebarToggle.classList.toggle("hidden-item");
};

[sidebarToggle, sidebarIcon, ...sidebarItems].forEach(item => 
  item.addEventListener("click", toggleSidebar)
);
