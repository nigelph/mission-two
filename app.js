// TODO: IMPLEMENT button for extending the about section
const aboutWebsiteButtton = document.getElementById("about-website-button");
const aboutSection = document.getElementsByClassName("about-website")[0];

function expandAbout() {
  aboutSection.classList.toggle("expand-about");
}

aboutWebsiteButtton.addEventListener("click", expandAbout);

// COLLAPSIBLE NAVBAR
const navIcon = document.getElementsByClassName("nav-icon")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// Expand or collapse navbar when clicking the navbar icon
function expandNav() {
  navbarLinks.classList.toggle("active");
}

// Hide navbar after clicking a tab
function collapseNavOnClick() {
  navbarLinks.classList.remove("active");
}

navIcon.addEventListener("click", expandNav);
navbarLinks.addEventListener("click", collapseNavOnClick);
// TODO: ADD regex to email input field in contact form
