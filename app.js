// TODO: IMPLEMENT collapsable navbar

// TODO: IMPLEMENT button for extending the about section

// COLLAPSIBLE NAVBAR
const navIcon = document.getElementsByClassName("nav-icon")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// Expand navbar
navIcon.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
// Hide navbar after clicking a tab
navbarLinks.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
});

// TODO: ADD regex to email input field in contact form
