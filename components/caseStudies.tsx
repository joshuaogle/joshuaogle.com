import studies from '../lib/caseStudies'
import CaseStudyCard from './caseStudyCard'
import styles from '../styles/components/_case-studies.module.css'

const Timeline = () => {
  return (
    <section>
      <div class="centered">
        <h2>Case studies</h2>
      </div>

      <div className="h-stack">
        <div className={styles.list}>
          {studies.slice(0).reverse().map((study) => (
            <CaseStudyCard study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline