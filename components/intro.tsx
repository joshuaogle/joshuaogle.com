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
  scope?: string;
  users?: string;
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
  // Case studies: the line over the title, and the one under it
  kicker?: string,
  dek?: string,
}

type MetaItemProps = {
  label: string,
  children: React.ReactNode,
}

const Intro = (props: IntroProps) => props.theme ? <FeatureIntro {...props} /> : <ArticleIntro {...props} />

// A case study opens like a magazine feature: the kicker, a big headline in the project's
// color, a one-line summary, then the facts a reader checks first
const FeatureIntro = ({ title, meta, logos, kicker, dek }: IntroProps) => {
  return (
    <header className={`${styles.feature} centered`}>
      {kicker && <p className={styles.kicker}>{kicker}</p>}
      <h1 className={styles.featureTitle}>{title}</h1>
      {dek && <p className={styles.dek}>{dek}</p>}

      <dl className={styles.facts}>
        {meta.client && (
          <Fact label="For">
            <span className={styles.client}>
              {logos}
              <a href={meta.client_url}>{meta.client}</a>
            </span>
          </Fact>
        )}
        <Fact label="Role">{meta.role}</Fact>
        <Fact label="Team">{meta.team}</Fact>
        <Fact label="Time">{meta.time}</Fact>
        <Fact label="Scope">{meta.scope}</Fact>
        <Fact label="Users">{meta.users}</Fact>
      </dl>
    </header>
  )
}

const Fact = ({ label, children }: MetaItemProps) => {
  return children ? (
    <div>
      <dt className={styles.factLabel}>{label}</dt>
      <dd className={styles.factValue}>{children}</dd>
    </div>
  ) : null
}

const ArticleIntro = ({ title, meta }: IntroProps) => {
  return (
    <>
      <header className={styles.container + " centered"}>
        <h1 className={styles.title}>
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
          <MetaItem label="Team">{meta.team}</MetaItem>
          <MetaItem label="Time">{meta.time}</MetaItem>
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
