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

/* --------- SLIDER ---------*/
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const textSlides = document.querySelectorAll(".slide-text");
  const btnRight = document.querySelector(".slide-btn--right");
  const btnLeft = document.querySelector(".slide-btn--left");

  let curSlide = 0;
  const maxSlide = slides.length;
  // const textMaxSlide = textSlides.length;

  // Functions
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );

    textSlides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
  };

  goToSlide(0);

  // Event Handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
};

slider();
