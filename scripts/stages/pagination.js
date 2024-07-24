import { renderStages } from "./renderStages.js";

//Initialisation to hold stages data and set the initial current page
let stages = [];
let currentPage = 1;

/**
 * Determines the number of stages card to display per
 *  page based on screen width.
 */
function getItemsPerPage(page) {
 
  if (window.innerWidth >= 768) {
    console.log("desktop")
    return stages.length; 
  } else {
    console.log("mobile")
    return page % 2 === 1 ? 2 : 1;
  }
}

/**
 * Sets the stages data
 * @param {Array} data - The array containing stage information.
 */
export function setStages(data) {
  stages = data;

   showPageStage(1);
  
}
/**
 * Renders the specified page, slicing the appropriate subset of stage data
 * to display and updates page navigation info
 * @param {number} page - The page number to display
 */

export function showPageStage(page) {
  const itemsPerPage = getItemsPerPage(page);
  //slice stages data (display 1 or 2 per page if mobile view)
  if (window.innerWidth <= 768) {
    currentPage = page;
   
    let startIndex = 0;
    for (let i = 1; i < page; i++) {
      startIndex += getItemsPerPage(i);
    }

    const endIndex = startIndex + itemsPerPage;

    renderStages(stages.slice(startIndex, endIndex));
    updateDots(currentPage);
    
  } else {
    renderStages(stages);
  }
}
/**
 * Renders pagination dots based on the total pages
 * @param {number} totalPages - Total number of pages.
 */


export function renderDots(totalPages) {
  if (window.innerWidth <= 768) {
    totalPages = countPages(totalPages);

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
    updateDots(currentPage);
  }
});
// right arrow button for pagination
document.querySelector(".section-chess-stages__arrow-right").addEventListener("click", () => {
  if (currentPage < Math.ceil(stages.length / getItemsPerPage())) {
    showPageStage(currentPage + 1);
    updateDots(currentPage);
  }
});

/**
 * Counts the number of pages for mobile view 
 * @param {number} totalItems - the number of all cards
 * @returns {number} - the number of pages
 */
function countPages(totalItems) {
  let count = 0;
  for (let i = 1; i < totalItems; i++) {
    if (i % 2 === 0) {
      count += 1;
      totalItems -= 1;
    } else {
      count += 2;
      totalItems-= 2;
    }
  }
  return count;
}
