import { caseStudies } from '../lib/case-studies'
import CaseStudiesSketch from './case-studies-sketch'
import SketchbookCover from './sketchbook-cover'
import styles from '../styles/components/_case-studies.module.css'

const CaseStudies = () => {
  return (
    <section className={styles.section} aria-labelledby="case-studies-title">
      <CaseStudiesSketch>
        <h2 id="case-studies-title" className={styles.heading} data-sketch-id="heading">Case studies</h2>
        <div className={styles.grid} data-sketch-id="grid">
          {caseStudies.map((study) => (
            <SketchbookCover key={study.slug} study={study} />
          ))}
        </div>
      </CaseStudiesSketch>
    </section>
  )
}

export default CaseStudies
