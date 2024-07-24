import { fetchParticipants } from "./scripts/participants/fetchParticipants.js";
import { setParticipants, showPage, startAutoSlide } from "./scripts/participants/pagination.js";
import { fetchStages } from "./scripts/stages/fetchStages.js";
import { renderDots, showPageStage, setStages } from "./scripts/stages/pagination.js";
import { renderStages } from "./scripts/stages/renderStages.js";
import { marqueeMeasure, marqueeKeyframes } from "./scripts/marquee.js";
import { adjustContent } from "./scripts/dynamicSection.js";
import { applyLineBreaks } from "./scripts/lineBreaks.js";

let stagesData = [];
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const participantsData = await fetchParticipants();
    stagesData = await fetchStages();

    setStages(stagesData);
    renderDots(stagesData.length);

    setParticipants(participantsData);

    showPage(1);
    startAutoSlide();

    // Measure marquee
    const measuredWidth = marqueeMeasure();
    marqueeKeyframes(measuredWidth);

    adjustContent();
    applyLineBreaks();
  } catch (error) {
    console.error("Error fetching", error);
  }
});

function handleResize() {
  setStages(stagesData);
  renderDots(stagesData.length);
  adjustContent();
  applyLineBreaks();
}

window.addEventListener("resize", handleResize);
