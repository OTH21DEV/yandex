
/**
 * Adds dynamically the heading text and breaks the lines
 * regarding the viewport size 
 */
export function applyLineBreaks() {
  const heading = document.querySelector(".section-simultaneous-play__heading");
  const originalHTML = `
        И сеанс 
        <span class="highlighted-text">одновременной игры <br>в шахматы на 160 досках</span><br>
        гроссмейстера О. Бендера
    `;

  const mobileHTML = `
        И сеанс<br>
        <span class="highlighted-text">одновременной</span><br>
        <span class="highlighted-text">игры в шахматы</span><br>
        <span class="highlighted-text">на 160 досках</span><br>
        гроссмейстера<br>
        О. Бендера
    `;

  if (window.innerWidth <= 768) {
    heading.innerHTML = mobileHTML;
  } else {
    heading.innerHTML = originalHTML;
  }
}
