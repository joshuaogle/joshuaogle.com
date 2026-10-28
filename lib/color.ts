export type RGB = [number, number, number]

export function parseColor(color: string): RGB {
  const hex = color.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
  if (hex) {
    const h = hex[1].length === 3 ? hex[1].split('').map(c => c + c).join('') : hex[1]
    return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)) as RGB
  }
  const rgb = color.trim().match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i)
  if (rgb) return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])]
  throw new Error(`Unsupported color: ${color}`)
}

const channel = (c: number) => {
  const v = c / 255
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
}
const luminance = ([r, g, b]: RGB) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)

// WCAG 2 contrast ratio, from 1 to 21
export function contrast(a: RGB, b: RGB): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

// The color, mixed toward white only as much as needed to reach the target ratio on
// the background, so it keeps its hue and still reads as the brand color
export function readableOn(color: string, background: string, target = 4.5): string {
  const fg = parseColor(color), bg = parseColor(background)
  if (contrast(fg, bg) >= target) return color
  for (let t = 0.01; t <= 1; t += 0.01) {
    const mixed = fg.map(c => Math.round(c + (255 - c) * t)) as RGB
    if (contrast(mixed, bg) >= target) return `rgb(${mixed.join(', ')})`
  }
  return 'rgb(255, 255, 255)'
}

// The darker end of the light theme's paper (--background-end), where text has the least contrast
export const LIGHT_PAPER = '#EFE7DA'
// The site's ink (--neutral-900), for a brand with no secondary color to fall back on
export const INK = '#262322'

// A project's title color in each theme. Dark theme uses the brand's primary as is, lightened
// only if it fails on the project's background. Light paper never gets a darkened primary: a
// primary that fails there gives way to the brand's secondary color, or to ink.
export function titleColors({ primary, secondary, darkBackground }: { primary: string, secondary?: string, darkBackground: string }) {
  const passesOnPaper = contrast(parseColor(primary), parseColor(LIGHT_PAPER)) >= 4.5
  return {
    light: passesOnPaper ? primary : (secondary ?? INK),
    dark: readableOn(primary, darkBackground),
  }
}
