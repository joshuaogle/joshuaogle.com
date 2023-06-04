import Link from 'next/link'
import styles from '../styles/components/_casestudy-card.module.css'

type Props = {
  summary: any,
  href: any,
}

const CasestudyCard = ({summary, href}: Props) => {
  return (
    <Link href={href}>
      <article
        className={styles.card}
        style={{
          backgroundImage: summary.theme.backgroundImage,
          "--card-background-color": summary.theme.backgroundColor,
          "--card-accent-color": summary.theme.accentColor,
          "--card-highlight-rgb": summary.theme.highlightRGB
        } as React.CSSProperties}
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
    </Link>
  )
}

export default CasestudyCard
