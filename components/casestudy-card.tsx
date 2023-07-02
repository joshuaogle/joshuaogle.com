import Link from 'next/link'
import styles from '../styles/components/_casestudy-card.module.css'

type Props = {
  summary: any,
  href: string,
}

const CasestudyCard = ({summary, href}: Props) => {
  return (
    <Link href={href}>
      <article
        className={styles.card}
        style={{
          "--card-background-color": summary.theme.backgroundColor,
          "--card-highlight-rgb": summary.theme.highlightRGB
        }}
      >
        <img className={styles.icon} src={summary.theme.icon} />
        <div className={styles.copy}>
          <h4 className={styles.title}>
            {summary.title}
          </h4>
          <small className={styles.meta}>
            {summary.meta.role}
          </small>
        </div>
      </article>
    </Link>
  )
}

export default CasestudyCard
