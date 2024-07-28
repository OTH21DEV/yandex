/**
 * Sets the stages data
 * @param {Array} data - The array containing stages information
 */
export function renderStages(data) {
  const container = document.getElementById("section-chess-stages__container");
  container.innerHTML = "";

  data.forEach((stage, index) => {
    const card = document.createElement("div");
    card.classList.add("section-chess-stages__stage-item");
    card.id = `stage-${stage.id}`;

    card.innerHTML = `
      <div class="section-chess-stages__stage-number">
        <p>${stage.id}</p>
      </div>
      <div class="section-chess-stages__stage-content">
        <p>${stage.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}
