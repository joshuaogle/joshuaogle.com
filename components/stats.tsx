import styles from '../styles/components/_stats.module.css'

export type Stat = {
  value: string
  // What the number counts
  label: React.ReactNode
}

// Headline numbers in a row, each over a line saying what it counts, as real text rather
// than an image so every reader (and screening tool) can read them
const Stats = ({ items, label = 'Results' }: { items: Stat[], label?: string }) => {
  return (
    <ul className={`${styles.stats} wide`} aria-label={label}>
      {items.map(({ value, label }, i) => (
        <li key={i} className={styles.stat}>
          <span className={styles.value}>{value}</span>
          <span className={styles.label}>{label}</span>
        </li>
      ))}
    </ul>
  )
}

export default Stats
