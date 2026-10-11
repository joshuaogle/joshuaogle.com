export type ColorScheme = 'light' | 'dark'

const STORAGE_KEY = 'colorScheme'
const ATTRIBUTE = 'data-prefers-color-scheme'

// Inlined into <head> so the theme is set before first paint: a saved choice
// wins, otherwise follow the OS preference. Keep in sync with the helpers below.
export const colorSchemeScript = `(function () {
  try {
    var saved = localStorage.getItem('${STORAGE_KEY}');
    var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('${ATTRIBUTE}', dark ? 'dark' : 'light');
  } catch (e) {}
})();`

export function getColorScheme(): ColorScheme {
  return document.documentElement.getAttribute(ATTRIBUTE) === 'light' ? 'light' : 'dark'
}

export function setColorScheme(colorScheme: ColorScheme) {
  document.documentElement.setAttribute(ATTRIBUTE, colorScheme)
  try {
    localStorage.setItem(STORAGE_KEY, colorScheme)
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the choice just won't persist
  }
}

// Notifies when the theme attribute changes, for useSyncExternalStore
export function subscribeToColorScheme(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: [ATTRIBUTE] })
  return () => observer.disconnect()
}
