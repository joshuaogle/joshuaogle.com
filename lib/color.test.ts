import { describe, expect, it } from 'vitest'
import { contrast, parseColor, readableOn } from './color'

describe('parseColor', () => {
  it('reads hex and rgb() strings', () => {
    expect(parseColor('#2A0A0D')).toEqual([42, 10, 13])
    expect(parseColor('rgb(223, 70, 76)')).toEqual([223, 70, 76])
    expect(parseColor('#000')).toEqual([0, 0, 0])
  })

  it('rejects anything else', () => {
    expect(() => parseColor('tomato')).toThrow()
  })
})

describe('contrast', () => {
  it('matches the WCAG ratio for black on white', () => {
    expect(contrast([0, 0, 0], [255, 255, 255])).toBeCloseTo(21, 1)
  })

  it('is symmetric', () => {
    expect(contrast([223, 70, 76], [37, 41, 55])).toBeCloseTo(contrast([37, 41, 55], [223, 70, 76]), 6)
  })
})

describe('readableOn', () => {
  it('leaves a color alone when it already passes', () => {
    expect(readableOn('rgb(255, 207, 37)', '#272C31', 4.8)).toBe('rgb(255, 207, 37)')
  })

  it('lightens a color just enough to pass', () => {
    // Structure's purple fails on its own cover (2.44:1)
    const result = readableOn('rgb(92, 78, 229)', '#272C38', 4.8)
    expect(contrast(parseColor(result), parseColor('#272C38'))).toBeGreaterThanOrEqual(4.8)
    expect(result).toBe('rgb(149, 140, 238)')
  })
})
