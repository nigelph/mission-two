// TODO: IMPLEMENT button for extending the about section

// COLLAPSIBLE NAVBAR
const navIcon = document.getElementsByClassName("nav-icon")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// Expand or collapse navbar when clicking the navbar icon
function expandNav(e) {
  navbarLinks.classList.toggle("active");
  console.log(e);
}

// Hide navbar after clicking a tab
function collapseNavOnClick(e) {
  navbarLinks.classList.remove("active");
}

navIcon.addEventListener("click", expandNav);
navbarLinks.addEventListener("click", collapseNavOnClick);
// TODO: ADD regex to email input field in contact form
