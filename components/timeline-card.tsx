import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import styles from '../styles/components/_timeline-card.module.css'

type Props = {
  summary: any,
  href: string,
}

const TimelineCard = ({summary, href}: Props) => {
  return (
    <Link href={href} className={styles.cardLink}>
      <Tilt
        perspective={2000}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.02}
        className={styles.card}
        style={{
          "--card-background-color": summary.theme.backgroundColor,
          "--card-highlight-rgb": summary.theme.highlightRGB
        }}
      >
        <header className={styles.header}>
          <img className={styles.icon} src={summary.theme.icon} />
          <h4 className={styles.title}>
            {summary.title}
          </h4>
          <small className={styles.meta}>
            {summary.meta.role}
          </small>
        </header>
      </Tilt>
    </Link>
  )
}

export default TimelineCard