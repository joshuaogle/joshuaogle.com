import studies from '../lib/caseStudies'
import CaseStudyCard from './caseStudyCard'
import styles from '../styles/components/_case-studies.module.css'
import { useState, useEffect, useRef } from 'react'

const Timeline = () => {
  const listRef = useRef(null)
  const [activeStudyIndex, setActiveStudyIndex] = useState(0)
  const [studyWidth, setStudyWidth] = useState(0)

  useEffect(() => {
    const updateStudyWidth = () => {
      const firstCard = listRef.current?.firstChild;
      if (firstCard) {
        setStudyWidth(firstCard.clientWidth);
      }
    }

    updateStudyWidth();
    window.addEventListener('resize', updateStudyWidth);

    return () => window.removeEventListener('resize', updateStudyWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const listElement = listRef.current
      if (listElement) {
        const scrollLeft = listElement.scrollLeft
        const clientWidth = listElement.clientWidth

        let activeIndex = Math.round(scrollLeft / studyWidth) // Use dynamic studyWidth

        // Check if scrolled to the end
        if (scrollLeft + clientWidth >= listElement.scrollWidth) {
          activeIndex = studies.length - 1 // Highlight the last item
        }

        setActiveStudyIndex(Math.max(0, Math.min(activeIndex, studies.length - 1))) // Ensure activeIndex is within bounds
      }
    }

    listRef.current?.addEventListener('scroll', handleScroll)
    return () => listRef.current?.removeEventListener('scroll', handleScroll)
  }, [studyWidth]) // Add studyWidth as a dependency

  const handleIndicatorClick = (index) => {
    listRef.current?.scrollTo({
      left: index * studyWidth,
      behavior: 'smooth'
    })
  }

  return (
    <section>
      <div className={`centered ${styles.heading}`}>
        <h2>Case studies</h2>

        <nav className={styles.indicatorContainer}>
          {studies.slice(0).reverse().map((study, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${index === activeStudyIndex ? styles.active : ''}`}
              onClick={() => handleIndicatorClick(index)}>
            </div>
          ))}
        </nav>
      </div>

      <div ref={listRef} className={`${styles.list} ${styles.scrollSnap}`}>
        {studies.slice(0).reverse().map((study, index) => (
          <CaseStudyCard key={study.summary.name} study={study} active={index === activeStudyIndex} />
        ))}
      </div>
    </section>
  )
}

export default Timeline