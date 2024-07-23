import { fetchParticipants } from "./scripts/participants/fetchParticipants.js";
import { setParticipants, showPage, startAutoSlide } from "./scripts/participants/pagination.js";
import { fetchStages } from "./scripts/stages/fetchStages.js";
import { renderDots, showPageStage, setStages } from "./scripts/stages/pagination.js";
import { renderStages } from "./scripts/stages/renderStages.js";
import { marqueeMeasure, marqueeKeyframes } from "./scripts/marquee.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const participantsData = await fetchParticipants();
    const stagesData = await fetchStages();
    setParticipants(participantsData);

    showPage(1);
    startAutoSlide();
    //
    setStages(stagesData);
    showPageStage(1);
    renderDots(stagesData.length);
    renderStages(stagesData);
    // marquee measure and keyframe for infinite loop of 3 phrases
    const measuredWidth = marqueeMeasure();
    marqueeKeyframes(measuredWidth);
  } catch (error) {
    console.error("Error fetching", error);
  }
});
