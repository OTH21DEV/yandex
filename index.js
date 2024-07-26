import { fetchParticipants } from "./scripts/participants/fetchParticipants.js";
import { setParticipants, showPage, startAutoSlide } from "./scripts/participants/pagination.js";
import { fetchStages } from "./scripts/stages/fetchStages.js";
import { renderDots, showPageStage, setStages } from "./scripts/stages/pagination.js";
import { renderStages } from "./scripts/stages/renderStages.js";
import { marqueeMeasure, marqueeKeyframes } from "./scripts/marquee.js";
import { adjustContent } from "./scripts/dynamicSection.js";
import { applyLineBreaks } from "./scripts/lineBreaks.js";
import { countPages } from "./scripts/stages/pagination.js";

let stagesData = [];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const participantsData = await fetchParticipants();
    stagesData = await fetchStages();

    setParticipants(participantsData);
    //test
    setStages(stagesData);
    //
    showPage(1);
    startAutoSlide();

    // Measure marquee
    const measuredWidth = marqueeMeasure();
    marqueeKeyframes(measuredWidth);

    adjustContent();
    applyLineBreaks();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  // handleResize();
});

// function handleResize() {

//   setStages(stagesData);

//   adjustContent();
//   applyLineBreaks();
// }

// window.addEventListener("resize", handleResize);
