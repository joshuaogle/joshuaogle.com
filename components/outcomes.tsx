import Stats, { type Stat } from './stats'
import styles from '../styles/components/_outcomes.module.css'

type Props = {
  // Headline numbers, each with a line saying what it counts
  results?: Stat[]
  // What changed, for each audience. A group with nothing in it is left out.
  customers?: React.ReactNode[]
  business?: React.ReactNode[]
  organization?: React.ReactNode[]
}

// What changed: the numbers first, for a skimmer, then the results for customers, for the
// business, and for the organization (reuse across products, people grown)
const Outcomes = ({ results = [], customers = [], business = [], organization = [] }: Props) => {
  const groups = [
    { title: 'For customers', items: customers },
    { title: 'For the business', items: business },
    { title: 'For the organization', items: organization },
  ].filter(group => group.items.length)

  return (
    <>
      {results.length > 0 && <Stats items={results} />}
      {groups.length > 0 && (
        <div className={`${styles.groups} wide`}>
          {groups.map(group => <Group key={group.title} {...group} />)}
        </div>
      )}
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
