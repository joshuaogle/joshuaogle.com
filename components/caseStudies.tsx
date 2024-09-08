import studies from '../lib/caseStudies'
import CaseStudyCard from './caseStudyCard'
import styles from '../styles/components/_case-studies.module.css'
import { useState, useEffect, useRef } from 'react'

const Timeline = () => {
  const listRef = useRef(null)
  const [activeStudyIndex, setActiveStudyIndex] = useState(0)
  const [studyWidth, setStudyWidth] = useState(0) // New state for study width

  useEffect(() => {
    const updateStudyWidth = () => {
      const firstCard = listRef.current?.firstChild; // Get the first study card
      if (firstCard) {
        setStudyWidth(firstCard.clientWidth); // Set the width based on the first card
      }
    }

    updateStudyWidth(); // Initial width calculation
    window.addEventListener('resize', updateStudyWidth); // Update on resize

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
      left: index * (listRef.current?.clientWidth / 2),
      behavior: 'smooth'
    })
  }

  return (
    <section>
      <div className="centered">
        <h2>Case studies</h2>
      </div>

      <div ref={listRef} className={`${styles.list} ${styles.scrollSnap}`}>
        {studies.slice(0).reverse().map((study, index) => (
          <CaseStudyCard key={study.summary.name} study={study} />
        ))}
      </div>

      <div className={styles.indicatorContainer}>
        {studies.slice(0).reverse().map((study, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${index === activeStudyIndex ? styles.active : ''}`}
            onClick={() => handleIndicatorClick(index)}>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline