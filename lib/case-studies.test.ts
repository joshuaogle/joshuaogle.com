import { describe, expect, it } from 'vitest'
import { caseStudies, caseStudyKicker, caseStudyMetadata, featuredCaseStudies, getCaseStudy, nextCaseStudy, unlistedCaseStudies } from './case-studies'
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
    expect(caseStudyKicker({ ...getCaseStudy('vault'), meta: { ...getCaseStudy('vault').meta, years: '2016–2020' } }))
      .toBe('HashiCorp Vault · Enterprise security · 2016–2020')
  })

  it("doesn't repeat a client named after the product, and falls back to the date", () => {
    expect(caseStudyKicker(getCaseStudy('armada'))).toBe('Armada Telematics · 2015')
  })
})

describe('nextCaseStudy', () => {
  it('goes back to the first after the last', () => {
    expect(nextCaseStudy(featuredCaseStudies[featuredCaseStudies.length - 1])).toBe(featuredCaseStudies[0])
    expect(nextCaseStudy(featuredCaseStudies[0])).toBe(featuredCaseStudies[1])
  })

  it('never leads to an unlisted case study', () => {
    caseStudies.forEach(study => expect(unlistedCaseStudies).not.toContain(nextCaseStudy(study)))
    expect(nextCaseStudy(unlistedCaseStudies[0])).toBe(featuredCaseStudies[0])
  })
})

describe('unlisted case studies', () => {
  it('ask search engines not to index them', () => {
    unlistedCaseStudies.forEach(study => expect(caseStudyMetadata(study).robots).toEqual({ index: false }))
    featuredCaseStudies.forEach(study => expect(caseStudyMetadata(study).robots).toBeUndefined())
  })
})
