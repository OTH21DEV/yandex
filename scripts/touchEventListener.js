/**
 * Adds touchEvenetListener to the element
 * @param {HTMLElement} element the target element
 * @param {string} className the selector
 */
export function addTouchEventListener(element, className) {
  if (window.innerWidth <= 768) {
    element.addEventListener("touchstart", () => {
      element.classList.add(className);
    });
    element.addEventListener("touchend", () => {
      element.classList.remove(className);
    });
  }
}
