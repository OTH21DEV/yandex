import { renderStages } from "./renderStages.js";

let stages = [];
let currentPage = 1;
let totalPages = 0;

/**
 * Determines the number of stages card to display per page based on screen width.
 */
function getItemsPerPage(page) {
  if (window.innerWidth >= 768) {
    return stages.length;
  } else {
    return page % 2 === 1 ? 2 : 1;
  }
}

/**
 * Sets the stages data
 * @param {Array} data - The array containing stage information.
 */
export function setStages(data) {
  stages = data;
  totalPages = countPages(stages.length);
  showPageStage(1);
  renderDots(totalPages);
  setButtonState(totalPages);
}

/**
 * Renders the specified page, slicing the appropriate subset of stage data
 * to display and updates page navigation info
 * @param {number} page - The page number to display
 */
export function showPageStage(page) {
  console.log(`Showing page ${page}`);
  const itemsPerPage = getItemsPerPage(page);
  if (window.innerWidth <= 768) {
    currentPage = page;

    let startIndex = 0;
    for (let i = 1; i < page; i++) {
      startIndex += getItemsPerPage(i);
    }

    const endIndex = startIndex + itemsPerPage;
    renderStages(stages.slice(startIndex, endIndex));
  } else {
    renderStages(stages);
  }

  updateDots(currentPage);
}

/**
 * Renders pagination dots based on the total pages
 * @param {number} totalPages - Total number of pages.
 */
export function renderDots(totalPages) {
  const paginationDotsContainer = document.querySelector(".section-chess-stages__pagination-dots");
  paginationDotsContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const dot = document.createElement("span");
    dot.classList.add("section-chess-stages__dot");
    if (i === currentPage) {
      dot.classList.add("section-chess-stages__dot--active");
    }
    paginationDotsContainer.appendChild(dot);
  }

  removeAllEventListeners();
  clickLeft();
  clickRight();
}

/**
 * Updates the active dot based on the current page.
 * @param {number} currentPage - The current page.
 */
function updateDots(currentPage) {
  const dots = document.querySelectorAll(".section-chess-stages__pagination-dots .section-chess-stages__dot");

  dots.forEach((dot, index) => {
    if (index + 1 === currentPage) {
      dot.classList.add("section-chess-stages__dot--active");
    } else {
      dot.classList.remove("section-chess-stages__dot--active");
    }
  });
}

/**
 * Manages the button states for stage navigation.
 */
function setButtonState(totalPages) {
  const btnLeft = document.querySelector(".section-chess-stages__arrow-left");
  const btnRight = document.querySelector(".section-chess-stages__arrow-right");

  btnLeft.classList.remove("section-chess-stages__arrow-left--disabled", "section-chess-stages__arrow-left--default");
  btnRight.classList.remove("section-chess-stages__arrow-right--disabled", "section-chess-stages__arrow-right--default");

  let elements = [btnLeft, btnRight];
  elements.forEach((element) => {
    element.classList.remove(
      "section-chess-stages__arrow-left--disabled",
      "section-chess-stages__arrow-left--default",
      "section-chess-stages__arrow-right--disabled",
      "section-chess-stages__arrow-right--default"
    );

    element.addEventListener("touchstart", () => {
      console.log("Touchstart on:", element);
      element.classList.remove("section-chess-stages__arrow-left--default", "section-chess-stages__arrow-right--default");

      element.classList.add("section-chess-stages__arrow--touch-hover-effect");
    });
    element.addEventListener("touchend", () => {
      console.log("Touchend on:", element);
      element.classList.remove("section-chess-stages__arrow--touch-hover-effect");
      element.classList.add("section-chess-stages__arrow-left--default", "section-chess-stages__arrow-right--default");
    });
  });

  if (currentPage === 1) {
    btnLeft.classList.add("section-chess-stages__arrow-left--disabled");
    btnRight.classList.add("section-chess-stages__arrow-right--default");
  } else if (currentPage > 1 && currentPage < totalPages) {
    btnLeft.classList.add("section-chess-stages__arrow-left--default");
    btnRight.classList.add("section-chess-stages__arrow-right--default");
  } else if (currentPage === totalPages) {
    btnLeft.classList.add("section-chess-stages__arrow-left--default");
    btnRight.classList.add("section-chess-stages__arrow-right--disabled");
  }
}

/**
 *
 */
function clickLeft() {
  document.querySelector(".section-chess-stages__arrow-left").addEventListener("click", () => {
    if (currentPage > 1) {
      showPageStage(currentPage - 1);
      updateDots(currentPage);
      setButtonState(totalPages);
    }
  });
}

/**
 *
 * @param {*} totalPages
 */
function clickRight() {
  document.querySelector(".section-chess-stages__arrow-right").addEventListener("click", () => {
    if (currentPage < totalPages) {
      showPageStage(currentPage + 1);
      updateDots(currentPage);
      setButtonState(totalPages);
    }
  });
}
function removeAllEventListeners() {
  const btnLeft = document.querySelector(".section-chess-stages__arrow-left");
  const btnRight = document.querySelector(".section-chess-stages__arrow-right");

  const clonedBtnLeft = btnLeft.cloneNode(true);
  const clonedBtnRight = btnRight.cloneNode(true);

  btnLeft.parentNode.replaceChild(clonedBtnLeft, btnLeft);
  btnRight.parentNode.replaceChild(clonedBtnRight, btnRight);
}

/**
 * Counts the number of pages for mobile view.
 * @param {number} totalItems - The number of all cards.
 * @returns {number} - The number of pages.
 */
export function countPages(totalItems) {
  let count = 0;
  let remainingItems = totalItems;

  while (remainingItems > 0) {
    count++;
    if (count % 2 === 1) {
      remainingItems -= 2;
    } else {
      remainingItems--;
    }
  }

  return count;
}

/**
 * Handles window resize events.
 */
function handleResize() {
  console.log("resized");
  totalPages = countPages(stages.length);
  showPageStage(currentPage);
  renderDots(totalPages);
  setButtonState(totalPages);
}

window.addEventListener("resize", handleResize);
window.addEventListener("orientationchange", handleResize);
