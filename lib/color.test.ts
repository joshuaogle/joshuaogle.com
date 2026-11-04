import { describe, expect, it } from 'vitest'
import { INK, contrast, parseColor, readableOn, titleColors } from './color'

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

describe('titleColors', () => {
  it('uses the primary on light paper when it passes', () => {
    expect(titleColors({ primary: 'rgb(92, 78, 229)', darkBackground: '#272C38' }).light).toBe('rgb(92, 78, 229)')
  })

  it("falls back to the brand's secondary, never a darkened primary", () => {
    expect(titleColors({ primary: 'rgb(255, 207, 37)', secondary: '#000000', darkBackground: '#272C31' }).light).toBe('#000000')
  })

  it('falls back to ink when there is no secondary', () => {
    expect(titleColors({ primary: '#00B7F1', darkBackground: '#2A254A' }).light).toBe(INK)
  })

  it('keeps the primary on a dark background when it passes', () => {
    expect(titleColors({ primary: 'rgb(255, 207, 37)', darkBackground: '#272C31' }).dark).toBe('rgb(255, 207, 37)')
  })
})
