import DateFormatter from './date-formatter'
import styles from '../styles/components/_intro.module.css'

type Props = {
  title: string,
  meta: string,
}

const MetaItem = ({ label, key, children }: Props) => {
  const template = (
    <li className={styles.metaItem}>
      <label for={key}>
        {label}
      </label>
      <div id="{key}">
        {children}
      </div>
    </li>
  )
  return children ? template : null
}

const Intro = ({ title, meta }: Props) => {
  return (
    <>
      <header className={styles.container + " centered"}>
        <h1 className={styles.title}>{title}</h1>
        <small><DateFormatter dateString={meta.date} /></small>
      
        <ul className={styles.meta}>
          {meta.client && (
            <MetaItem label="For" key="meta.client">
              <a href={meta.client_url}>{meta.client}</a>
            </MetaItem>
          )}
          <MetaItem label="Role" key="meta.role">{meta.role}</MetaItem>
          <MetaItem label="Time" key="meta.time">{meta.time}</MetaItem>
          <MetaItem label="Team" key="meta.team">{meta.team}</MetaItem>
          {meta.source && (
            <MetaItem label="Published by" key="meta.source">
              <img className={styles.icon} src={`/images/${meta.source_icon}`} />
              <a href={meta.source_url}>{meta.source}</a>
            </MetaItem>
          )}
        </ul>
      </header>
    </>
  )
}

export default Intro
