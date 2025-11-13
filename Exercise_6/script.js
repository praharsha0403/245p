document.addEventListener("DOMContentLoaded", () => {
  // grabbed elements
  const slideContainer = document.querySelector(".slide__container");
  const images = document.querySelectorAll(".slide__container img");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  // set up counter and image width
  let counter = 1;
  const imgSize = images[0].clientWidth;

  // show the first real image
  slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;

  // next button
  nextButton.addEventListener("click", () => {
    if (counter >= images.length - 1) return;
    counter++;
    slideContainer.style.transition = "transform 0.3s ease-in-out";
    slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
  });

  // prev button
  prevButton.addEventListener("click", () => {
    if (counter <= 0) return;
    counter--;
    slideContainer.style.transition = "transform 0.3s ease-in-out";
    slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
  });

  // handle seamless looping
  slideContainer.addEventListener("transitionend", () => {
    if (images[counter].id === "lastClone") {
      slideContainer.style.transition = "none";
      counter = images.length - 2;
      slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
    }
    if (images[counter].id === "firstClone") {
      slideContainer.style.transition = "none";
      counter = 1;
      slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
    }
  });
});
