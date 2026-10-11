'use client'

import { caseStudies } from '../lib/case-studies'
import CaseStudyCard from './case-study-card'
import styles from '../styles/components/_case-studies.module.css'
import { useState, useEffect, useRef } from 'react'

const CaseStudies = () => {
  const listRef = useRef<HTMLDivElement>(null)
  const [activeStudyIndex, setActiveStudyIndex] = useState(0)
  const [studyWidth, setStudyWidth] = useState(0)

  useEffect(() => {
    const updateStudyWidth = () => {
      const firstCard = listRef.current?.firstElementChild;
      if (firstCard) {
        setStudyWidth(firstCard.clientWidth);
      }
    }

    updateStudyWidth();

    window.addEventListener('resize', updateStudyWidth);
    return () => window.removeEventListener('resize', updateStudyWidth);
  }, []);

  useEffect(() => {
    const listElement = listRef.current
    if (!listElement) return

    const handleScroll = () => {
      const scrollLeft = listElement.scrollLeft
      const clientWidth = listElement.clientWidth

      let activeIndex = Math.round(scrollLeft / studyWidth)

      // Check if scrolled to the end
      if (scrollLeft + clientWidth >= listElement.scrollWidth) {
        activeIndex = caseStudies.length - 1 // Highlight the last item
      }

      setActiveStudyIndex(Math.max(0, Math.min(activeIndex, caseStudies.length - 1))) // Ensure activeIndex is within bounds
    }

    listElement.addEventListener('scroll', handleScroll)
    return () => listElement.removeEventListener('scroll', handleScroll)
  }, [studyWidth])

  const handleIndicatorClick = (index: number) => {
    listRef.current?.scrollTo({
      left: index * studyWidth,
      behavior: 'smooth'
    })
  }

  return (
    <section
      style={{
        "--active-primary": caseStudies[activeStudyIndex]?.theme.colorPrimary || "#000"
      } as React.CSSProperties}>
      <div className={`centered ${styles.heading}`}>
        <h2>Case studies</h2>

        <nav className={styles.indicatorContainer} aria-label="Case studies">
          {caseStudies.map((study, index) => (
            <button
              key={study.slug}
              type="button"
              className={`${styles.indicator} ${index === activeStudyIndex ? styles.active : ''}`}
              aria-label={`${study.name}: ${study.title}`}
              aria-current={index === activeStudyIndex ? 'true' : undefined}
              onClick={() => handleIndicatorClick(index)}>
            </button>
          ))}
        </nav>
      </div>

      <div ref={listRef} className={`${styles.list} ${styles.scrollSnap}`}>
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} active={index === activeStudyIndex} />
        ))}
      </div>
    </section>
  )
}

export default CaseStudies
