/**
 * Detect OS dark mode — canvas probe when prefers-color-scheme is unreliable.
 */
export function detectSystemDarkMode() {
  if (typeof window === 'undefined') return true

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true
  }

  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return false
  }

  try {
    const probe = document.createElement('div')
    probe.style.cssText =
      'position:fixed;left:-9999px;background-color:canvas;color:canvastext;color-scheme:light dark'
    document.documentElement.appendChild(probe)
    const bg = getComputedStyle(probe).backgroundColor
    probe.remove()

    const parts = bg.match(/[\d.]+/g)
    if (parts && parts.length >= 3) {
      const [r, g, b] = parts.map(Number)
      const luminance = (r * 299 + g * 587 + b * 114) / 1000
      return luminance < 128
    }
  } catch {
    /* ignore */
  }

  return true
}

/** macOS alert sheets default to dark unless system is explicitly light */
export function detectMacDialogDark() {
  if (typeof window === 'undefined') return true
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return false
  return true
}

export function subscribeSystemDarkMode(onChange) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const mqLight = window.matchMedia('(prefers-color-scheme: light)')
  const handler = () => onChange(detectSystemDarkMode())
  mq.addEventListener('change', handler)
  mqLight.addEventListener('change', handler)
  return () => {
    mq.removeEventListener('change', handler)
    mqLight.removeEventListener('change', handler)
  }
}

export function subscribeMacDialogDark(onChange) {
  const mqLight = window.matchMedia('(prefers-color-scheme: light)')
  const handler = () => onChange(detectMacDialogDark())
  mqLight.addEventListener('change', handler)
  return () => mqLight.removeEventListener('change', handler)
}
