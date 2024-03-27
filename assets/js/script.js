const testimonials = document.querySelectorAll(".testimonial");
const nbSlide = testimonials.length;
let count = 0;

function nextSlide() {
  testimonials[count].classList.remove("active");
  count = (count + 1) % nbSlide;
  testimonials[count].classList.add("active");
}

function previewSlide() {
  testimonials[count].classList.remove("active");
  count = (count - 1 + nbSlide) % nbSlide;
  testimonials[count].classList.add("active");
}

function keyPress(e) {
  if (e.keyCode === 39) {
    nextSlide();
  } else if (e.keyCode === 37) {
    previewSlide();
  }
}

document.querySelector(".next").addEventListener("click", nextSlide);

document.querySelector(".prev").addEventListener("click", previewSlide);

document.addEventListener("keydown", keyPress);
