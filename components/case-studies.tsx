import Link from 'next/link'
import { caseStudyHref, earlierCaseStudies, featuredCaseStudies } from '../lib/case-studies'
import CaseStudiesSketch from './case-studies-sketch'
import CaseStudyGrid from './case-study-grid'
import SketchbookCover from './sketchbook-cover'
import styles from '../styles/components/_case-studies.module.css'

const CaseStudies = () => {
  return (
    <section className={styles.section} aria-labelledby="case-studies-title">
      <CaseStudiesSketch>
        <h2 id="case-studies-title" className={styles.heading} data-sketch-id="heading">Case studies</h2>
        <CaseStudyGrid>
          {featuredCaseStudies.map((study) => (
            <SketchbookCover key={study.slug} study={study} />
          ))}
        </CaseStudyGrid>
      </CaseStudiesSketch>
      {/* Consulting work from before HashiCorp: still here, but not competing with the lead stories */}
      <p className={styles.earlier}>
        Earlier work:{' '}
        {earlierCaseStudies.map((study, i) => (
          <span key={study.slug}>
            {i > 0 && ' · '}
            <Link href={caseStudyHref(study)}>{study.name}</Link> ({study.meta.date})
          </span>
        ))}
      </p>
    </section>
  )
}

export default CaseStudies
