/**
 * Measures and sets the width of
 * the marquee based on the first three phrases
 * @returns {number} phraseWidth - the calculated width of the marquee (3 phrases) in pixels.
 */
export function marqueeMeasure() {
  const marqueePhrases = document.querySelectorAll(".marquee__phrase");
  let phraseWidth = 0;
  for (let i = 0; i < 3; i++) {
    phraseWidth += marqueePhrases[i].offsetWidth;
  }

//   document.querySelector(".marquee").style.width = `${phraseWidth}px`;

  return phraseWidth;
}
/**
 * Generates and applies keyframe animation to
 * scroll marquee content based on its width
 * @param {number} phraseWidth the calculated width of the marquee (3 phrases) in pixels
 */
export function marqueeKeyframes(phraseWidth) {
  const marqueeContent = document.querySelector(".marquee__content");
  marqueeContent.style.transform = `translateX(0)`;

  const keyframes = `
      @keyframes ticker {
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
  marqueeContent.style.animation = `ticker ${duration}s linear infinite`;
}
