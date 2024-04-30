import { useState } from 'react'  
import timelineEvents from '../lib/timelineEvents'
import Surface from './surface'
import TimelineNav from './timelineNav'
import TimelineEmployer from './timelineEmployer'
import TimelinePreview from './timelinePreview'
import styles from '../styles/components/_timeline.module.css'

const Timeline = () => {
  const [activeEmployerIndex, setActiveEmployer] = useState(2);
  const [activeStudyIndex, setActiveStudy] = useState(1);
  const activeEmployer = timelineEvents[activeEmployerIndex];
  const activeStudy = activeEmployer.caseStudies[activeStudyIndex];
  const timelineBackground = activeStudy.summary.theme.backgroundColor;

  const setActive = (employerIndex, studyIndex) => {
    setActiveStudy(studyIndex);
    setActiveEmployer(employerIndex);
    console.log("Set active", employerIndex, studyIndex);
  }

  return (
    <section>
      <div className="centered">
        <h2>Timeline</h2>
      </div>
      <Surface className={styles.surface}>
        <div
          className={styles.timelineContainer}
          style={{ "--timelineContainerBackground": timelineBackground }}
        >
          <TimelineNav timelineEvents={timelineEvents} activeStudyIndex={activeStudyIndex} setActive={setActive}/>

          <div className={styles.timelineContent}>
            <TimelineEmployer employer={activeEmployer} />
            <TimelinePreview timelineEvents={timelineEvents} activeStudyIndex={activeStudyIndex} />
          </div>
        </div>
      </Surface>
    </section>
  )
}

export default Timeline