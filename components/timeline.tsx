import { useState } from 'react'  
import timelineEvents from '../lib/timelineEvents'
import Surface from './surface'
import TimelineNav from './timelineNav'
import styles from '../styles/components/_timeline.module.css'

const Timeline = () => {
  const [activeStudyIndex, setActiveStudy] = useState(2);
  const [activeEmployerIndex, setActiveEmployer] = useState(1);
  const activeEmployer = timelineEvents[activeEmployerIndex];
  const activeStudy = activeEmployer.caseStudies[activeStudyIndex];

  const setActive = (employerIndex, studyIndex) => {
    setActiveStudy(studyIndex);
    setActiveEmployer(employerIndex);
    console.log("Set active", employerIndex, studyIndex);
  }

  return (
    <section>
      <Surface className={styles.surface}>
        <div
          className={styles.timelineContainer}
          style={{ backgroundColor: activeStudy.summary.theme.backgroundColor }}
        >
          <TimelineNav timelineEvents={timelineEvents} activeStudyIndex={activeStudyIndex} setActive={setActive}/>
          <div className={styles.employerContainer}>
            {timelineEvents.map((employer, employerIndex) => (
              <div
                className={`${styles.employer} ${activeEmployerIndex === employerIndex ? 'active' : ''}`}
                key={employerIndex}
              >
                {employer.company}
                {employer.when}
                {employer.role}
                {employer.title}
                {employer.copy}  
              </div>
            ))}
          </div>

          <div className={styles.previewContainer}>
            {timelineEvents.map((employer) =>
              employer.caseStudies.map((study, studyIndex) => (
                <div className={styles.preview} key={studyIndex}>
                  <img
                    src={study.summary.theme.preview}
                    alt={study.summary.title}
                    className={`${styles.previewImage} ${activeStudyIndex === studyIndex ? 'active' : ''}`}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </Surface>
    </section>
  )
}

export default Timeline