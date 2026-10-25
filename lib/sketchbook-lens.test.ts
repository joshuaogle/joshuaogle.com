import { describe, expect, it } from 'vitest'
import { contrastWithWhite, MIN_SHADE, shadeFor, TARGET } from './sketchbook-lens'

const mix = (a: number, [r, g, b]: number[], [tr, tg, tb]: number[]) =>
  [(1 - a) * r + a * tr, (1 - a) * g + a * tg, (1 - a) * b + a * tb] as const

describe('shadeFor', () => {
  const tint = [37, 41, 55] // Boundary's cover, #252937

  it('uses the minimum shade over a dark screenshot', () => {
    expect(shadeFor(20, 20, 24, tint)).toBe(MIN_SHADE)
  })

  it('shades a white screenshot until the arrow reaches 3:1', () => {
    const a = shadeFor(255, 255, 255, tint)
    expect(a).toBeGreaterThan(MIN_SHADE)
    expect(a).toBeLessThan(1)
    expect(contrastWithWhite(...mix(a, [255, 255, 255], tint))).toBeGreaterThanOrEqual(TARGET)
  })

  it('uses the least shade that passes', () => {
    const a = shadeFor(255, 255, 255, tint)
    expect(contrastWithWhite(...mix(a - .01, [255, 255, 255], tint))).toBeLessThan(TARGET)
  })
})
