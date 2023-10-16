import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/_timeline-card.module.css'

type Props = {
  summary: any,
  href: string,
}

const TimelineCard = ({summary, href}: Props) => {
  return (
    <Link href={href} className={`${styles.cardLink} atvImg`}>
      <article
        className={`${styles.card} atvImg-layer`}
        style={{
          "--card-background-color": summary.theme.backgroundColor,
          "--card-highlight-rgb": summary.theme.highlightRGB
        }}
      >
        <header className={`${styles.header}} atvImg-layer`}>
          <img className={styles.icon} src={summary.theme.icon} />
          <h4 className={styles.title}>
            {summary.title}
          </h4>
          <small className={styles.meta}>
            {summary.meta.role}
          </small>
        </header>
      </article>

    </Link>
  )
}

export default TimelineCard
