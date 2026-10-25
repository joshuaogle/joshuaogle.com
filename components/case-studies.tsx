import { caseStudies } from '../lib/case-studies'
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
          {caseStudies.map((study) => (
            <SketchbookCover key={study.slug} study={study} />
          ))}
        </CaseStudyGrid>
      </CaseStudiesSketch>
    </section>
  )
}

export default CaseStudies
