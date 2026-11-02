/* eslint-env browser */

const mobile = window.matchMedia('(max-width: 768px)')

// Sizes are rounded to whole device pixels: at fractional ratios (e.g. 1.5x)
// CSS-pixel lines land between device pixels and the grid shows moiré bands.
function drawGrid() {
  const dpr = window.devicePixelRatio
  const step = Math.round((mobile.matches ? 3 : 5) * dpr)
  const lineWidth = Math.max(1, Math.round(dpr))

  const canvas = document.createElement('canvas')
  canvas.width = step
  canvas.height = step
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
  ctx.fillRect(0, 0, step, lineWidth)
  ctx.fillRect(0, 0, lineWidth, step)

  const root = document.documentElement.style
  root.setProperty('--grid', `url(${canvas.toDataURL()})`)
  root.setProperty('--grid-size', `${step / dpr}px`)
}

function watchResolution() {
  window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener('change', () => {
    drawGrid()
    watchResolution()
  }, { once: true })
}

mobile.addEventListener('change', drawGrid)
watchResolution()
drawGrid()
