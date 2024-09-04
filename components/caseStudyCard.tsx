import Link from 'next/link'
import Tilt from 'react-parallax-tilt';
import styles from '../styles/components/_case-study-card.module.css'
import { useEffect, useState, useRef } from 'react';

const TimelineCaseStudy = ({study}) => {
  const [cardProximity, setCardProximity] = useState(100);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - centerY);
        const maxDistance = window.innerHeight / 2 + rect.height / 2;
        const newProximity = 100 - (distanceFromCenter / maxDistance) * 100;
        setCardProximity(Math.max(0, Math.min(100, Number(newProximity.toFixed(6)))));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Tilt
      scale={1.05}
      tiltMaxAngleX={5}
      tiltMaxAngleY={10}
      perspective={2000}
      transitionSpeed={10000}
      className={styles.cardContainer}>
      <Link
        ref={cardRef}
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
      </Link>
    </Tilt>
  )
}

export default TimelineCaseStudy