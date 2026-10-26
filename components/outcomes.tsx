import styles from '../styles/components/_outcomes.module.css'

type Props = {
  // Headline numbers, each with a line saying what it counts
  results: { value: string, label: string }[]
  // What changed, for each audience
  customers: React.ReactNode[]
  business: React.ReactNode[]
  organization: React.ReactNode[]
}

// What changed: the numbers first, for a skimmer, then the results for customers, for the
// business, and for the organization (reuse across products, people grown)
const Outcomes = ({ results, customers, business, organization }: Props) => {
  return (
    <>
      <ul className={`${styles.results} wide`} aria-label="Results">
        {results.map(({ value, label }) => (
          <li key={label} className={styles.result}>
            <span className={styles.value}>{value}</span>
            <span className={styles.resultLabel}>{label}</span>
          </li>
        ))}
      </ul>
      <div className={`${styles.groups} wide`}>
        <Group title="For customers" items={customers} />
        <Group title="For the business" items={business} />
        <Group title="For the organization" items={organization} />
      </div>
    </>
  )
}

const Group = ({ title, items }: { title: string, items: React.ReactNode[] }) => (
  <div className={styles.group}>
    <h3 className="label">{title}</h3>
    <ul>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
)

export default Outcomes
