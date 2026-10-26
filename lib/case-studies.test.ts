import { describe, expect, it } from 'vitest'
import { caseStudies, caseStudyKicker, getCaseStudy, nextCaseStudy } from './case-studies'
import { LIGHT_PAPER, contrast, parseColor, titleColors } from './color'

describe('title colors', () => {
  it.each(caseStudies.map(study => [study.slug, study]))('%s reads in both themes', (_, study) => {
    const { colorPrimary, colorSecondary, colorBGLight } = study.theme
    const { light, dark } = titleColors({ primary: colorPrimary, secondary: colorSecondary, darkBackground: colorBGLight })
    expect(contrast(parseColor(light), parseColor(LIGHT_PAPER))).toBeGreaterThanOrEqual(4.5)
    expect(contrast(parseColor(dark), parseColor(colorBGLight))).toBeGreaterThanOrEqual(4.5)
  })
})

describe('caseStudyKicker', () => {
  it('names the product, its field and its years', () => {
    expect(caseStudyKicker(getCaseStudy('vault'))).toBe('HashiCorp Vault · Enterprise security · 2017–2021')
  })

  it("doesn't repeat a client named after the product, and falls back to the date", () => {
    expect(caseStudyKicker(getCaseStudy('armada'))).toBe('Armada Telematics · 2015')
  })
})

describe('nextCaseStudy', () => {
  it('goes back to the first after the last', () => {
    expect(nextCaseStudy(caseStudies[caseStudies.length - 1])).toBe(caseStudies[0])
    expect(nextCaseStudy(caseStudies[0])).toBe(caseStudies[1])
  })
})
