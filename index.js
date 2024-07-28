import { fetchParticipants } from "./scripts/participants/fetchParticipants.js";
import { setParticipants, showPage, startAutoSlide } from "./scripts/participants/pagination.js";
import { fetchStages } from "./scripts/stages/fetchStages.js";
import { renderDots, showPageStage, setStages } from "./scripts/stages/pagination.js";
import { renderStages } from "./scripts/stages/renderStages.js";
import { marqueeMeasure, marqueeKeyframes } from "./scripts/marquee.js";
import { adjustContent } from "./scripts/dynamicSection.js";
import { applyLineBreaks } from "./scripts/lineBreaks.js";
import { countPages } from "./scripts/stages/pagination.js";
import { addTouchEventListener } from "./scripts/touchEventListener.js";

let stagesData = [];
let btnPrimary = document.querySelector(".btn.btn-primary");
let btnSecondary = document.querySelector(".btn.btn-secondary");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    //Gets data of stages and participants
    const participantsData = await fetchParticipants();
    stagesData = await fetchStages();
    //Sets received data
    setParticipants(participantsData);
    setStages(stagesData);
    //Displays first page
    showPage(1);
    //Starts autoslide for the participants
    startAutoSlide();

    // Measures marquee
    const marquees = document.querySelectorAll(".marquee");
    marquees.forEach((marquee, index) => {
      const phraseWidth = marqueeMeasure(`.marquee:nth-of-type(${index + 1})`);
      marqueeKeyframes(phraseWidth, `.marquee:nth-of-type(${index + 1})`, index + 1);
    });
    //Displays dynamic sections
    adjustContent();
    applyLineBreaks();
    //Adds the touch listener to the banner buttons
    addTouchEventListener(btnPrimary, "primary-touch-hover-effect");
    addTouchEventListener(btnSecondary, "secondary-touch-hover-effect");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

function handleResize() {
  adjustContent();
  applyLineBreaks();
  addTouchEventListener(btnPrimary, "primary-touch-hover-effect");
  addTouchEventListener(btnSecondary, "secondary-touch-hover-effect");
}

window.addEventListener("resize", handleResize);
