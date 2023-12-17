import { useState } from 'react'
import TimelineItem from './timeline-item'
import styles from '../styles/components/_timeline.module.css'

import {summary as VaultSummary} from '../pages/work/vault';
import {summary as StructureSummary} from '../pages/work/structure';
import {summary as SharespostSummary} from '../pages/work/sharespost';
import {summary as ArmadaSummary} from '../pages/work/armada';

const timelineEvents = [
  {
    title: "A small but mighty studio",
    company: "Brightbit",
    when: "2010 to 2014",
    role: "Co-Founder & Design Lead",
    icon: "/images/timeline-brightbit.svg",
    caseStudies: [
      {summary: ArmadaSummary, href: "/work/armada"}
    ],
    copy: "\
      I co-founded a consultancy in Oklahoma City and led design for a team of seven. \
      We worked with local startups to build Ruby on Rails, Javascript and hybrid mobile apps."
  },
  {
    title: "Taking companies from zero to launch",
    company: "thoughtbot",
    when: "2014 to 2016",
    role: "Sr Product Designer",
    icon: "/images/timeline-thoughtbot.svg",
    caseStudies: [
      {summary: SharespostSummary, href: "/work/sharespost"}
    ],
    copy: "\
      Known for their dedication to open-source and pride in their craft,\
      thoughtbot does software consulting right.\
      This is also where I found my love for mentoring other designers and developed their influential Product Design Sprint."
  },
  {
    title: "Designing infrastructure automation tools",
    company: "HashiCorp",
    when: "2017 to Now",
    role: "Staff Product Designer",
    icon: "/images/timeline-hashicorp.svg",
    caseStudies: [
      {summary: VaultSummary, href: "/work/vault"},
      {summary: StructureSummary, href: "/work/structure"}
    ],
    copy: "\
      HashiCorp makes developer-focused infrastructure software. \
      I lead design for some of our most popular products and helped grow our design team from 2 designers to 30+ across seven teams."
  }
]

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section>
      <div
        className={styles.tabPanels}
        data-is-active={activeIndex}>
        {timelineEvents.map((event, panelIndex) => {
          const tabPanelClasses = [
            `surface`,
            styles.tabPanel,
            (panelIndex === activeIndex ? styles.panelActive : '')
          ].join(' ')

          return (
            <div className={styles.tabPanelContainer}>
              <div
                onClick={() => setActiveIndex(panelIndex)}
                className={tabPanelClasses}>
                <TimelineItem
                  company={event.company}
                  when={event.when}
                  role={event.role}
                  title={event.title}
                  icon={event.icon}
                  caseStudies={event.caseStudies}>
                  {event.copy}
                </TimelineItem>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.tabNavs}>
        {timelineEvents.map((event, navIndex) => {
          const navClasses = [
            styles.tabNav,
            (navIndex === activeIndex ? styles.navActive : '')
          ].join(' ')

          return (
            <div
              className={navClasses}
              onClick={() => setActiveIndex(navIndex)}
              key={navIndex}>
              <span className={styles.navDot} />
              <span className={styles.navLabel}>
                {event.when}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )

}

export default Timeline