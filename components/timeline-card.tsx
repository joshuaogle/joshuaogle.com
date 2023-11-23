import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { useMemo } from 'react'
import styles from '../styles/components/_timeline-card.module.css'

type Props = {
  summary: any,
  href: string,
}

const TimelineCard = ({ summary, href }: Props) => {
  const cardStyle = useMemo(() => ({
    "--card-background-color": `${summary.theme.backgroundColor}`,
    "--card-background-image": `${summary.theme.backgroundImage || 'none'}`, // Provide a default value if not available
  }), [summary.theme.backgroundColor, summary.theme.backgroundImage]);

  return (
    <Link
      href={href}
      style={cardStyle}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.02}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={2000}
        transitionSpeed={2000}
        className={styles.card}
      >
        <Image
          alt={summary.title}
          className={styles.icon}
          src={summary.theme.icon}
          height={24}
          width={24}
        />

        <div className={styles.titleContainer}>
          <h3 className={styles.title}>
            {summary.title}
          </h3>

          <small className={styles.meta}>
            {summary.meta.role}
          </small>

          <small className={styles.arrow}>
            View details →
          </small>
        </div>
      </Tilt>
    </Link>
  )
}

export default TimelineCard
