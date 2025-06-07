function generateShadowString(count, step, direction = 'horizontal') {
  const shadows = ['0px 0px rgba(255, 255, 255, 0.1)'];

  for (let i = 0; i <= count; i++) {
    if (direction === 'horizontal') {
      shadows.push(`0px ${step * i}px rgba(255, 255, 255, 0.1)`);
    } else {
      shadows.push(`${step * i}px 0px rgba(255, 255, 255, 0.1)`);
    }
  }

  return shadows.join(', ');
}

function updateTexture() {
  const step = window.innerWidth <= 768 ? 3 : 5;
  const documentHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
  const documentWidth = Math.max(document.documentElement.scrollWidth, window.innerWidth);
  const horizontalCount = Math.ceil(documentHeight / step);
  const verticalCount = Math.ceil(documentWidth / step);

  const horizontalLines = generateShadowString(horizontalCount, step, 'horizontal');
  const verticalLines = generateShadowString(verticalCount, step, 'vertical');

  document.documentElement.style.setProperty('--horizontal-lines', horizontalLines);
  document.documentElement.style.setProperty('--vertical-lines', verticalLines);
  document.documentElement.style.setProperty('--document-height', documentHeight + 'px');
}

let resizeTimeout;
function debouncedUpdateTexture() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateTexture, 150);
}

// Initialize immediately and on page load
if (typeof window !== 'undefined') {
  // Run immediately if DOM is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateTexture);
  } else {
    updateTexture();
  }

  // Single handler for all viewport changes
  let lastViewportWidth = window.innerWidth;
  let lastViewportHeight = window.innerHeight;

  function checkViewportChange() {
    if (window.innerWidth !== lastViewportWidth || window.innerHeight !== lastViewportHeight) {
      lastViewportWidth = window.innerWidth;
      lastViewportHeight = window.innerHeight;
      debouncedUpdateTexture();
    }
  }

  setInterval(checkViewportChange, 300);
}
