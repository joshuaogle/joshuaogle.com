import { useEffect } from 'react'
import { Tab } from '@headlessui/react'
import TimelineDetails from './timeline-details'
import CasestudyCard from './casestudy-card'
import styles from '../styles/components/_timeline.module.css'

import {summary as VaultSummary} from '../pages/work/vault';
import {summary as StructureSummary} from '../pages/work/structure';
import {summary as SharespostSummary} from '../pages/work/sharespost';

const Timeline = () => {
  const highlightTab = (index) => {
    const glider = document.getElementById("tab-glider");
    const selectedTab = document.querySelectorAll(`button[tabindex]`)[index];
    glider.style.width = `${selectedTab.offsetWidth}px`
    glider.style.left = `${selectedTab.offsetLeft}px`
    glider.style.opacity = "1"
  }

  useEffect(() => {
    highlightTab(0);
  })

  return (
    <section>
      <Tab.Group onChange={(index) => highlightTab(index)}>
        <Tab.List className={styles.tabList}>
          <Tab className={styles.tab}>
            HashiCorp
          </Tab>
          <Tab className={styles.tab}>
            thoughtbot
          </Tab>
          <Tab className={styles.tab}>
            Brightbit
          </Tab>
          <a href="https://linkedin.com/in/joshuaogle" target="_new" className={styles.tab}>
            More
            &#8599;
          </a>
          <div className={styles.tabGlider} id="tab-glider" />
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className={styles.tabPanel}>
            <TimelineDetails
              company="HashiCorp"
              when="2017-Present"
              title="Staff Product Designer"
              icon="/images/timeline-hashicorp.svg"
            >
              HashiCorp makes developer-focused infrastructure software, with products that span everything from secrets management to mesh networking. 
              I joined as the second product designer in what would soon become a 20+ person product design team.
              I helped hire our designers, define our process, and created our Product Design System named "Structure".
              Throughout my time at HashiCorp, I have been the design lead for <a href="http://hashicorp.com/products/vault" target="_new">Vault</a> and <a href="http://boundaryproject.io" target="_new">Boundary</a>.
            
              <div className={styles.caseStudies}>
                <CasestudyCard summary={VaultSummary} href="/work/vault" />
                <CasestudyCard summary={StructureSummary} href="/work/structure" />
              </div>
            </TimelineDetails>
          </Tab.Panel>

          <Tab.Panel className={styles.tabPanel}>
            <TimelineDetails
              company="thoughtbot"
              when="2014-2016"
              title="Sr Product Designer"
              icon="/images/timeline-thoughtbot.svg"
            >
              One of the biggest names in Ruby development and a model for how a consulting company should be run,
              thoughtbot is known for their dedication to open-source and the startup community.
              That love for openness and pride in their craft really does run through everything we did together.
              I helped mentor other designers and develop best practices such as thoughtbot's influential Product Design Sprint.
              Advising projects while leading design for client projects helped further my love for working with talented and multidisciplinary people.

              Summit
              <div className={styles.caseStudies}>
                <CasestudyCard summary={SharespostSummary} href="/work/sharespost" />
              </div>
            </TimelineDetails>
          </Tab.Panel>

          <Tab.Panel className={styles.tabPanel}>
            <TimelineDetails
              company="Brightbit"
              when="2010-2014"
              title="Co-Founder & Design Lead"
              icon="/images/timeline-brightbit.svg"
            >
              I co-founded the company and led design and front-end development for a team of seven.
              We focused on Ruby on Rails, Javascript and hybrid mobile apps, folding best practices from companies like thoughtbot into our own.
              Brightbit was one of the leading development shops in the region and I'm really proud of the company and team we built.

              Armada
            </TimelineDetails>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  )

}

export default Timeline