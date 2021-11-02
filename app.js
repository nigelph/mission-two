const aboutWebsiteButtton = document.getElementById("about-website-button");
const arrow = document.getElementsByClassName("fas fa-chevron-down fa-4x")[0];

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

// COLLAPSIBLE NAVBAR
const navIcon = document.getElementsByClassName("nav-icon")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

function expandNav() {
  navbarLinks.classList.toggle("active");
}

function collapseNavOnClick() {
  navbarLinks.classList.remove("active");
}

navIcon.addEventListener("click", expandNav);
navbarLinks.addEventListener("click", collapseNavOnClick);
// TODO: ADD regex to email input field in contact form

const userHover = document.getElementsByClassName("fab fa-github-square fa-9x");
const firstText = document.querySelectorAll(".about-website-img-box-title")[0];
const secondText = document.querySelectorAll(".about-website-img-box-title")[1];

function toggleOpacity(event) {
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

userHover[0].addEventListener("mouseover", toggleOpacity);
userHover[0].addEventListener("mouseout", toggleOpacity);

userHover[1].addEventListener("mouseover", toggleOpacity);
userHover[1].addEventListener("mouseout", toggleOpacity);
