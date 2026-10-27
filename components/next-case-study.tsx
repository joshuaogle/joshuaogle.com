import Link from 'next/link'
import { caseStudyHref, nextCaseStudy, type CaseStudy } from '../lib/case-studies'
import styles from '../styles/components/_next-case-study.module.css'

// The end of a case study: on to the next one, or get in touch
const NextCaseStudy = ({ study }: { study: CaseStudy }) => {
  const next = nextCaseStudy(study)
  return (
    <aside className={`${styles.next} wide`} aria-label="What's next">
      <Link href={caseStudyHref(next)} className={styles.nextLink}>
        <span className="label">Next case study</span>
        <span className={styles.nextTitle}>
          {next.title}
          <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </Link>
      <div className={styles.contact}>
        <div className={styles.buttons}>
          <a className={styles.primaryButton} href="mailto:joshua@joshuaogle.com">Let’s talk</a>
          <a className={styles.button} href="/files/joshuaogle-resume.pdf">Résumé (PDF)</a>
          <a className={styles.button} href="http://linkedin.com/in/joshuaogle" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </aside>
  )
}

export default NextCaseStudy
