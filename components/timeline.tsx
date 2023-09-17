import { useEffect } from 'react'
import { Tab } from '@headlessui/react'
import TimelineDetails from './timeline-details'
import CasestudyCard from './casestudy-card'
import styles from '../styles/components/_timeline.module.css'

import {summary as VaultSummary} from '../pages/work/vault';
import {summary as StructureSummary} from '../pages/work/structure';
import {summary as SharespostSummary} from '../pages/work/sharespost';
import LogoAmex from '../public/images/client-amex.svg'
import LogoATT from '../public/images/client-att.svg'
import LogoDollarShaveClub from '../public/images/client-dollarshaveclub.svg'
import LogoExpedia from '../public/images/client-expedia.svg'
import LogoSharespost from '../public/images/client-sharespost.svg'

const Timeline = () => {
  return (
    <section>
      <Tab.Group>
        <Tab.Panels>
          <Tab.Panel className={styles.tabPanel}>
            <TimelineDetails
              company="HashiCorp"
              when="2017-Present"
              title="Staff Product Designer"
              icon="/images/timeline-hashicorp.svg"
            >
              HashiCorp makes developer-focused infrastructure software, spanning from secrets management to mesh networking to automated deployments. 
              I led design for some of our most important products and helped grow our design team from 2 designers to 30+ across seven products.
            </TimelineDetails>              
            <div className={styles.caseStudies}>
              <CasestudyCard summary={VaultSummary} href="/work/vault" />
              <CasestudyCard summary={StructureSummary} href="/work/structure" />
            </div>
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

            </TimelineDetails>
            <div className={styles.caseStudies}>
              Summit
              <CasestudyCard summary={SharespostSummary} href="/work/sharespost" />
            </div>
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
            </TimelineDetails>
            <div className={styles.caseStudies}>
              Armada
            </div>
          </Tab.Panel>

          <Tab.Panel className={styles.tabPanel}>
            <div className="surface">
              <h2>Design consulting</h2>
              <p>
                I have led design projects from startups to big enterprise companies.
                No matter the size of the project, I believe in starting small, iterating quickly, and listening to what your users are telling you.
              </p>
              <div className={styles.logos}>
                <LogoExpedia />
                <LogoDollarShaveClub />
                <LogoSharespost />
                <LogoAmex />
                <LogoATT />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
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
          <Tab className={styles.tab}>
            Consulting
          </Tab>
          <a href="https://linkedin.com/in/joshuaogle" target="_new">
            &#8599;
          </a>
        </Tab.List>
      </Tab.Group>
    </section>
  )

}

export default Timeline