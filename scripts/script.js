"use strict";
/*--------- SELECTORS ---------*/
const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const overlay = document.querySelector(".overlay");

/* --------- FUNCTIONS ---------*/

/* --------- EVENT LISTENERS ---------*/
openMenu.addEventListener("click", () => {
  menu.classList.add("show-menu");
  overlay.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("show-menu");
  overlay.style.display = "none";
});
