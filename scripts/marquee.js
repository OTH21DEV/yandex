//Initial offset in pixels
const initialTranslations = {
  largeScreen: -205,
  desktop: -484,
  mobile: -217,
};
// Breakpoints to trigger
const breakpoints = {
  largeScreen: 1920,
  desktop: 1366,
};
/**
 * Provides the offset for keyframe regarding the viewport width
 * @returns {number} the offset to apply in keyframe
 */
function getInitialTranslation() {
  if (window.innerWidth >= breakpoints.largeScreen) {
    return initialTranslations.largeScreen;
  }
  if (window.innerWidth >= breakpoints.desktop) {
    return initialTranslations.desktop;
  }
  return initialTranslations.mobile;
}

/**
 * Measure the width of a single marquee element
 * ( based on the first three phrases)
 * @param {*} marqueeSelector
 * @returns {number} phraseWidth - the calculated width of the marquee (3 phrases) in pixels.
 */
export function marqueeMeasure(marqueeSelector) {
  const marqueeElement = document.querySelector(marqueeSelector);
  const marqueePhrases = marqueeElement.querySelectorAll(".marquee__phrase");
  let phraseWidth = 0;
  // Calculate width based on phrases within specified marquee
  for (let i = 0; i < 3; i++) {
    phraseWidth += marqueePhrases[i].offsetWidth;
  }
  return phraseWidth;
}

/**
 * Generates and applies keyframe animation to
 * scroll marquee content based on its width
 * @param {number} phraseWidth the calculated width of the marquee (3 phrases) in pixels
 * @param {string} marqueeSelector the selector for the marquee element
 * @param {number} index unique identifier for keyframe naming
 */
export function marqueeKeyframes(phraseWidth, marqueeSelector, index) {
  const marqueeElement = document.querySelector(marqueeSelector);
  const marqueeContent = marqueeElement.querySelector(".marquee__content");

  const initialTranslation = getInitialTranslation();
  marqueeContent.style.transform = `translateX(${initialTranslation}px)`;

  const keyframes = `
  @keyframes ticker-${index} {
    from {
      transform: translateX(${initialTranslation}px);
    }
    to {
      transform: translateX(-${phraseWidth + Math.abs(initialTranslation)}px);
    }
  }
`;
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  const speed = 50; // px/s
  const duration = phraseWidth / speed;
  marqueeContent.style.animation = `ticker-${index} ${duration}s linear infinite`;
}
