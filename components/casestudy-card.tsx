import Image from 'next/image'
import styles from '../styles/components/_casestudy-card.module.css'

type Props = {
  summary: Array,
  href: String,
}

const CasestudyCard = ({summary, href}: Props) => {
  return (
    <a href={href}>
      <article
        className={styles.card}
        style={{
          backgroundImage: summary.theme.backgroundImage,
          "--card-background-color": summary.theme.backgroundColor,
          "--card-accent-color": summary.theme.accentColor,
          "--card-highlight-rgb": summary.theme.highlightRGB
        }}
      >
        <div className={styles.icon}>
          <img src={summary.theme.icon} />
        </div>
        <h4>
          {summary.title}
        </h4>
        <small className={styles.meta}>
          {summary.meta.role}
        </small>
      </article>
    </a>
  )
}

export default CasestudyCard
