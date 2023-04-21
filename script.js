const items = document.querySelectorAll(".timeline-item");
const slider = document.querySelector(".timeline-slider");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let itemWidth;
let sliderWidth;
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

function calculateWidths() {
  if (window.innerWidth <= 768) {
    itemWidth = slider.offsetWidth / 2;
    sliderWidth = itemWidth * items.length;
  } else {
    itemWidth =
      items[0].offsetWidth +
      2 * parseFloat(getComputedStyle(items[0]).paddingRight);
    sliderWidth = itemWidth * items.length;
  }

  slider.style.width = sliderWidth + "px";
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

calculateWidths();
window.addEventListener("resize", calculateWidths);

nextBtn.addEventListener("click", showNextItem);
prevBtn.addEventListener("click", showPrevItem);