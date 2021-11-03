// Collapsible navbar variables
const navIcon = document.getElementsByClassName("nav-icon")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
// About website icon hover variable
const userHover = document.getElementsByClassName("fab fa-github-square fa-9x");
// Change about website arrow button variables
const aboutWebsiteButtton = document.getElementById("about-website-button");
const arrow = document.getElementsByClassName("fas fa-chevron-down fa-4x")[0];

// COLLAPSIBLE NAVBAR
function expandNav() {
  navbarLinks.classList.toggle("active");
}

function collapseNavOnClick() {
  navbarLinks.classList.remove("active");
}

navIcon.addEventListener("click", expandNav);
navbarLinks.addEventListener("click", collapseNavOnClick);

// Toggle expand button for about website section
function expandAbout() {
  const aboutSection = document.getElementsByClassName("about-website")[0];

  aboutSection.classList.toggle("expand-about");
}

function changeArrow() {
  if (arrow.classList.contains("fa-chevron-down")) {
    arrow.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    arrow.classList.transition = "10s ease-in-out";

    arrow.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}

aboutWebsiteButtton.addEventListener("click", () => {
  expandAbout();
  changeArrow();
});

// Opacity for img boxes in about website section
function toggleOpacity(event) {
  const firstText = document.querySelectorAll(
    ".about-website-img-box-title"
  )[0];
  const secondText = document.querySelectorAll(
    ".about-website-img-box-title"
  )[1];

  // First
  if ((event.type = "mouseoever" && event.target.innerText === "Version 1")) {
    event.target.style.opacity = 0.5;
    event.target.style.transition = "0.8s ease";
    firstText.classList.add("show-title");
  }
  if (event.type === "mouseout" && event.target.innerText === "Version 1") {
    event.target.style.opacity = 1;
    event.target.style.transition = "0.8s ease";
    firstText.classList.remove("show-title");
  }
  // Second
  if ((event.type = "mouseoever" && event.target.innerText === "Version 2")) {
    event.target.style.opacity = 0.5;
    event.target.style.transition = "0.8s ease";
    secondText.classList.add("show-title");
  }
  if (event.type === "mouseout" && event.target.innerText === "Version 2") {
    event.target.style.opacity = 1;
    event.target.style.transition = "0.8s ease";
    secondText.classList.remove("show-title");
  }
}

for (let index = 0; index < userHover.length; index++) {
  userHover[index].addEventListener("mouseover", toggleOpacity);
  userHover[index].addEventListener("mouseout", toggleOpacity);
}

// TODO: ADD regex to email input field in contact form
