// SHOW HEADER MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN WE CLICK NAV-LINK
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// SHOW VIDEO POPUP
const showVideo = document.getElementById("home-popup-video");
const btnOpenVideo = document.getElementById("home-video-open");
const btnCloseVideo = document.getElementById("home-video-close");

function openVideo() {
  showVideo.classList.add("show-video");
}
btnOpenVideo.addEventListener("click", openVideo);

function closeVideo() {
  showVideo.classList.remove("show-video");
}
btnCloseVideo.addEventListener("click", closeVideo);

//CHANGE BACKGROUND WHEN WE SCROLL DOWN
const scrollY = window.pageYOffset;
function scrollActive() {
  const header = document.getElementById("header");

  this.scrollY >= 150
    ? header.classList.add("scroll-active")
    : header.classList.remove("scroll-active");
}
window.addEventListener("scroll", scrollActive);
