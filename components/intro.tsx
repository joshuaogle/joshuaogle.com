import DateFormatter from './date-formatter'
import type { CaseStudyTheme } from '../lib/case-studies'
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
  theme?: CaseStudyTheme,
  // Logos to show beside the company name
  logos?: React.ReactNode,
}

type MetaItemProps = {
  label: string,
  children: React.ReactNode,
}

const Intro = ({ title, meta, theme, logos }: IntroProps) => {
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
              <span className={styles.client}>
                {logos}
                <a href={meta.client_url}>{meta.client}</a>
              </span>
            </MetaItem>
          )}
          <MetaItem label="Role">{meta.role}</MetaItem>
          <MetaItem label="Time">{meta.time}</MetaItem>
          <MetaItem label="Team">{meta.team}</MetaItem>
          {meta.source && (
            <MetaItem label="Published by">
              {/* eslint-disable-next-line @next/next/no-img-element -- small SVG, nothing to optimize */}
              <img className={styles.icon} src={`/images/${meta.source_icon}`} alt="" />
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
      <span className={styles.metaLabel}>
        {label}
      </span>
      <div>
        {children}
      </div>
    </li>
  )
  return children ? template : null
}

export default Intro
