const testimonials = document.querySelectorAll(".testimonial");
const nbSlide = testimonials.length;
let count = 0;

function nextSlide() {
  testimonials[count].classList.remove("active");
  testimonials[count].classList.remove("right");
  count = (count + 1) % nbSlide;
  testimonials[count].classList.add("active");
  testimonials[count].classList.add("right");
}

function previewSlide() {
  testimonials[count].classList.remove("active");
  testimonials[count].classList.remove("right");
  testimonials[count].classList.remove("left");
  count = (count - 1 + nbSlide) % nbSlide;
  testimonials[count].classList.add("active");
  testimonials[count].classList.add("left");
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
