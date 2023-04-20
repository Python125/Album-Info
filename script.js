const items = document.querySelectorAll(".timeline-item");
const slider = document.querySelector(".timeline-slider");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const itemWidth =
  items[0].offsetWidth +
  2 * parseFloat(getComputedStyle(items[0]).paddingRight);
const sliderWidth = itemWidth * items.length;
slider.style.width = sliderWidth + "px";

let currentIndex = 0;

function setActiveItem(index) {
  items.forEach((item) => {
    item.classList.remove("active");
  });
  items[index].classList.add("active");
}

function scrollToItem(index) {
  const position = -index * itemWidth;
  slider.style.transform = `translateX(${position}px)`;
}

function showNextItem() {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  setActiveItem(currentIndex);
  scrollToItem(currentIndex);
}

function showPrevItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  }
  setActiveItem(currentIndex);
  scrollToItem(currentIndex);
}

nextBtn.addEventListener("click", showNextItem);
prevBtn.addEventListener("click", showPrevItem);