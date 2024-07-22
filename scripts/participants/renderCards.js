
/**
 * Sets the participant data.
 * @param {Array} data - The array containing participant information.
 */
export function renderCards(data) {
  const container = document.getElementById("section-participant-cards__container");
  container.innerHTML = "";

  data.forEach((participant) => {
    const card = document.createElement("div");
    card.classList.add("section-participant-cards__card-item");
    card.id = participant.id;
    card.innerHTML = `
      <div class="section-participant-cards__card-image">
        <img src="${participant.image}" alt="участник ${participant.name}"/>
      </div>
      <div class="section-participant-cards__card-content">
        <h3>${participant.name}</h3>
        <h4>${participant.description}</h4>
        <button class="section-participant-cards__btn-more">Подробнее</button>
      </div>
    `;
    container.appendChild(card);
  });
}