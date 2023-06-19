import DateFormatter from './date-formatter'
import styles from '../styles/components/_intro.module.css'

type Props = {
  title: string,
  meta: string,
}

const MetaItem = ({ label, key, children }: Props) => {
  return (
    <li className={styles.metaItem}>
      <label for={key}>
        {label}
      </label>
      <div id="{key}">
        {children}
      </div>
    </li>
  )
}

const Intro = ({ title, meta }: Props) => {
  return (
    <>
      <header className={styles.container} >
        <h1 className={styles.title}>{title}</h1>
        <small>{meta.date}</small>

      
        <ul className={styles.meta}>
          <MetaItem label="Role" key="meta.role">{meta.role}</MetaItem>
          <MetaItem label="Time" key="meta.time">{meta.time}</MetaItem>
          <MetaItem label="Team" key="meta.team">{meta.team}</MetaItem>
          <MetaItem label="Client" key="meta.client">
            <a href={meta.client_url}>{meta.client}</a>
          </MetaItem>
        </ul>
      </header>
    </>
  )
}

export default Intro
