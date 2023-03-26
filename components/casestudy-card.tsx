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
          backgroundColor: summary.theme.color,
          backgroundImage: `url('${summary.theme.background}')`
        }}
      >
        <div className={styles.icon}>
          <img src={summary.theme.icon} />
        </div>
        <h4>{summary.title}</h4>
        <p>{summary.meta.role}</p>
        <div className={styles.thumbnail}>
          <img src={summary.theme.thumbnail} />
        </div>
      </article>
    </a>
  )
}

export default CasestudyCard
