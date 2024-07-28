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
  marqueeContent.style.transform = `translateX(0)`;

  const keyframes = `
      @keyframes ticker-${index} {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-${phraseWidth}px);
        }
      }
    `;
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  const speed = 50; // px/s
  const duration = phraseWidth / speed;
  marqueeContent.style.animation = `ticker-${index} ${duration}s linear infinite`;
}
