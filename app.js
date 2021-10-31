// TODO: IMPLEMENT button for extending the about section
const aboutWebsiteButtton = document.getElementById("about-website-button");
const aboutSection = document.getElementsByClassName("about-website")[0];
const arrow = document.getElementsByClassName("fas fa-chevron-down fa-4x")[0];

function expandAbout() {
  aboutSection.classList.toggle("expand-about");
}

function changeArrow() {
  if (arrow.classList.contains("fa-chevron-down")) {
    arrow.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    arrow.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}

aboutWebsiteButtton.addEventListener("click", () => {
  expandAbout();
  changeArrow();
});

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
for (var i = 0; i < arrow.length; i++) {
  console.log(arrow[i]);
}
