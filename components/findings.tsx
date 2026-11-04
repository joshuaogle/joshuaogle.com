import styles from '../styles/components/_findings.module.css'

export type Finding = {
  hypothesis: React.ReactNode
  verdict: 'confirmed' | 'disproved' | 'new'
  // What was learned, set large, and the decision it led to
  learning: React.ReactNode
  decision: React.ReactNode
}

const VERDICTS: Record<Finding['verdict'], string> = {
  confirmed: 'Confirmed',
  disproved: 'Disproved',
  new: 'New learning',
}

// What research taught: each hypothesis, whether it held up, what was learned, and what
// the team did about it. The verdict is a word, with a marker beside it that doesn't rely
// on color: solid for confirmed, hollow for disproved, the project's color for new.
const Findings = ({ items }: { items: Finding[] }) => {
  return (
    <ol className={`${styles.findings} wide`}>
      {items.map((item, i) => (
        <li key={i} className={styles.finding}>
          <div className={styles.hypothesis}>
            <p className="label">Hypothesis</p>
            <p className={styles.hypothesisText}>{item.hypothesis}</p>
          </div>
          <div className={styles.result}>
            <p className={`label ${styles.verdict}`} data-verdict={item.verdict}>{VERDICTS[item.verdict]}</p>
            <h3 className={styles.learning}>{item.learning}</h3>
            <p className={styles.decision}><strong className="label">So we</strong> {item.decision}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Findings
