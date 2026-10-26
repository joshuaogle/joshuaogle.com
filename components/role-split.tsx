import styles from '../styles/components/_role-split.module.css'

type Props = {
  // What Joshua owned, and what was done together with partners
  led: React.ReactNode[]
  partners: React.ReactNode[]
}

// Two lists side by side, so a reader can tell Joshua's own work from the team's
const RoleSplit = ({ led, partners }: Props) => {
  return (
    <div className={styles.split}>
      <List title="I led" items={led} />
      <List title="With my partners" items={partners} />
    </div>
  )
}

const List = ({ title, items }: { title: string, items: React.ReactNode[] }) => (
  <div className={styles.column}>
    <h3 className="label">{title}</h3>
    <ul>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
)

export default RoleSplit
