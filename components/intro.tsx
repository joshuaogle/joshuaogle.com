import DateFormatter from './date-formatter'
import styles from '../styles/components/_intro.module.css'

type MetaProps = {
  date: string;
  client?: string;
  client_url?: string;
  role?: string;
  time?: string;
  team?: string;
  source?: string;
  source_icon?: string;
  source_url?: string;
};

type IntroProps = {
  title: string,
  meta: MetaProps,
  theme?: any,
}

type MetaItemProps = {
  label: string,
  children: React.ReactNode,
}

const Intro = ({ title, meta, theme }: IntroProps) => {
  const themeColor = theme ? theme.colorPrimary : 'inherit'
  return (
    <>
      <header className={styles.container + " centered"}>
        <h1
          className={styles.title}
          style={{
            color: themeColor
          } as React.CSSProperties}
          >
          {title}
        </h1>
        <small>
          {<DateFormatter dateString={meta.date} />}
        </small>
      
        <ul className={styles.meta}>
          {meta.client && (
            <MetaItem label="For">
              <a href={meta.client_url}>{meta.client}</a>
            </MetaItem>
          )}
          <MetaItem label="Role">{meta.role}</MetaItem>
          <MetaItem label="Time">{meta.time}</MetaItem>
          <MetaItem label="Team">{meta.team}</MetaItem>
          {meta.source && (
            <MetaItem label="Published by">
              <img className={styles.icon} src={`/images/${meta.source_icon}`} />
              <a href={meta.source_url}>{meta.source}</a>
            </MetaItem>
          )}
        </ul>
      </header>
    </>
  )
}

const MetaItem = ({ label, children }: MetaItemProps) => {
  const template = (
    <li className={styles.metaItem}>
      <label>
        {label}
      </label>
      <div>
        {children}
      </div>
    </li>
  )
  return children ? template : null
}

export default Intro
