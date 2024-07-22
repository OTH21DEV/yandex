import { renderCards } from "./renderCards.js";

//Initialisation to hold participants data and set the initial current page
let participants = [];
let currentPage = 1;

/**
 * Determines the number of items to display per page based on screen width.
 */
function getItemsPerPage() {
  return window.innerWidth >= 768 ? 3 : 1;
}

/**
 * Sets the participant data
 * @param {Array} data - The array containing participant information.
 */
export function setParticipants(data) {
  participants = data;
}

/**
 * Renders the specified page, slicing the appropriate subset of participant data
 * to display and updates page navigation info
 * @param {number} page - The page number to display
 */

export function showPage(page) {
  const itemsPerPage = getItemsPerPage();
  currentPage = page;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  renderCards(participants.slice(startIndex, endIndex));
  updatePageInfo(itemsPerPage);
}

/**
 * Updates the pagination information
 * @param {number} itemsPerPage - The number of items displayed per page
 */
function updatePageInfo(itemsPerPage) {
  document.getElementById("section-participant-cards__current-page").textContent = `${Math.min(currentPage * itemsPerPage, participants.length)}`;
  document.getElementById("section-participant-cards__total-pages").textContent = participants.length;

  //   document.getElementById("current-page").textContent = `${Math.min(currentPage * itemsPerPage, participants.length)}/${participants.length}`;
}

// Left arrow button for pagination
document.querySelector(".section-participant-cards__arrow-left").addEventListener("click", () => {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
});
// right arrow button for pagination
document.querySelector(".section-participant-cards__arrow-right").addEventListener("click", () => {
  if (currentPage < Math.ceil(participants.length / getItemsPerPage())) {
    showPage(currentPage + 1);
  }
});

/**
 * Starts an interval that changes the page every 4 seconds
 */
export function startAutoSlide() {
  setInterval(() => {
    const totalPages = Math.ceil(participants.length / getItemsPerPage());
    currentPage = currentPage < totalPages ? currentPage + 1 : 1;
    showPage(currentPage);
  }, 4000);
}

 