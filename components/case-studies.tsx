import { featuredCaseStudies } from '../lib/case-studies'
import CaseStudiesSketch from './case-studies-sketch'
import CaseStudyGrid from './case-study-grid'
import SketchbookCover from './sketchbook-cover'
import styles from '../styles/components/_case-studies.module.css'

const CaseStudies = () => {
  return (
    <section className={styles.section} aria-labelledby="case-studies-title">
      <CaseStudiesSketch>
        {/* The heading lines up with the intro text; the covers break out wider, like a
            wide figure on a case study page */}
        <div className="centered">
          <h2 id="case-studies-title" className={styles.heading} data-sketch-id="heading">Case studies</h2>
        </div>
        <CaseStudyGrid>
          {featuredCaseStudies.map((study) => (
            <SketchbookCover key={study.slug} study={study} />
          ))}
        </CaseStudyGrid>
      </CaseStudiesSketch>
    </section>
  )
}

export default CaseStudies
