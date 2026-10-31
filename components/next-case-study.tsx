import Link from 'next/link'
import LetsTalk from './lets-talk'
import { caseStudyHref, nextCaseStudy, type CaseStudy } from '../lib/case-studies'
import styles from '../styles/components/_next-case-study.module.css'

// The end of a case study: a "continue reading" button on to the next one, then the same
// Let's talk as the home page
const NextCaseStudy = ({ study }: { study: CaseStudy }) => {
  const next = nextCaseStudy(study)
  return (
    <div className={styles.end} data-case-study-end>
      <nav className={styles.next} aria-label="Next case study">
        <Link href={caseStudyHref(next)} className={styles.button}>
          <span className={styles.label}>Next:</span>
          <span className={styles.title}>{next.title}</span>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </nav>
      <LetsTalk centered={false} />
    </div>
  )
}

export default NextCaseStudy
