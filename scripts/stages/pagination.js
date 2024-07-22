import { renderStages } from "./renderStages.js";

//Initialisation to hold stages data and set the initial current page
let stages = [];
let currentPage = 1;

/**
 * Determines the number of stages card to display per page based on screen width.
 */
function getItemsPerPage() {
  return window.innerWidth >= 768 ? stages.length : 1;
}

/**
 * Sets the stages data
 * @param {Array} data - The array containing stage information.
 */
export function setStages(data) {
  stages = data;
}
/**
 * Renders the specified page, slicing the appropriate subset of stage data
 * to display and updates page navigation info
 * @param {number} page - The page number to display
 */

export function showPageStage(page) {
  const itemsPerPage = getItemsPerPage();
  //slice stages data (display 1 per page if mobile view)
  if (window.innerWidth <= 768) {
    currentPage = page;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    renderStages(stages.slice(startIndex, endIndex));
    updateDots(currentPage)
    // renderDots(totalPages)
  } else {
    renderStages(stages);
  }
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
}

/**
 * Updates the active dot based on the current page
 * @param {number} currentPage - The current page
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



// Left arrow button for pagination
document.querySelector(".section-chess-stages__arrow-left").addEventListener("click", () => {
  if (currentPage > 1) {
    showPageStage(currentPage - 1);
    updateDots(currentPage)
  }
});
// right arrow button for pagination
document.querySelector(".section-chess-stages__arrow-right").addEventListener("click", () => {
  if (currentPage < Math.ceil(stages.length / getItemsPerPage())) {
    showPageStage(currentPage + 1);
    updateDots(currentPage)
  }
});



window.addEventListener("resize", () => {
  showPageStage(currentPage);
});
