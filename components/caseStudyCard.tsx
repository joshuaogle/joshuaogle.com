import Link from 'next/link'
import Tilt from 'react-parallax-tilt';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import styles from '../styles/components/_case-study-card.module.css'
import { useState, useEffect } from 'react'

const TimelineCaseStudy = ({study}) => {
  const [cardProximity, setCardProximity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.querySelector(`.${styles.card}`);
      if (cardElement) {
        const cardTop = cardElement.getBoundingClientRect().top;
        const cardHeight = cardElement.getBoundingClientRect().height;
        const viewportHeight = window.innerHeight;
        const proximityPercent = (cardTop + cardHeight) / viewportHeight;
        setCardProximity(Math.min(proximityPercent * 100, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Tilt
      scale={1.05}
      tiltMaxAngleX={5}
      tiltMaxAngleY={15}
      perspective={2000}
      transitionSpeed={10000}
      className={styles.cardContainer}>
      <Link
        href={study.href} 
        className={styles.card}
        style={{
          "--bg-start": study.summary.theme.colorBGLight,
          "--bg-end": study.summary.theme.colorBGDark,
          "--primary": study.summary.theme.colorPrimary,
          "--proximity": cardProximity
        } as React.CSSProperties}>
        <div className={styles.textContent}>
          <small>
            {study.summary.meta.date}
          </small>

          <h3 className={styles.title}>
            {study.summary.title}
          </h3>

          <small>
            {study.summary.name} • {study.summary.meta.role}
          </small>
        </div>

        <img
          src={study.summary.theme.preview}
          className={styles.image}
        />

        <div
          className={styles.arrow}
          style={{
            backgroundColor: study.summary.theme.colorPrimary
          } as React.CSSProperties}>
          <ArrowRightIcon />
        </div>
        <div className={styles.staples}></div>
      </Link>
    </Tilt>
  )
}

export default TimelineCaseStudy