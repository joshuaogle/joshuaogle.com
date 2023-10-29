import Link from 'next/link'
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
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.02}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={2000}
        transitionSpeed={2000}
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
