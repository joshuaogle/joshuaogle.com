import studies from '../lib/caseStudies'
import CaseStudyCard from './caseStudyCard'
import styles from '../styles/components/_case-studies.module.css'

const Timeline = () => {
  return (
    <section>
      <div className="centered">
        <h2>Case studies</h2>
      </div>

      <div className={styles.list}>
        {studies.slice(0).reverse().map((study) => (
          <CaseStudyCard key={study.summary.name} study={study} />
        ))}
      </div>
    </section>
  )
}

export default Timeline