import React from 'react';
import InlineSVG from '../../components/InlineSVG';
import TimelineItem from '../../components/TimelineItem';
import './style.sass';

class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline-section">
        <section>
          <div className="section-title">
            Where I've been
          </div>
          <h2>I've worked with some amazing people</h2>

          <ul className="timeline">
            <TimelineItem
              company="HashiCorp"
              when="2017-Present"
              title="Sr Product Designer"
              icon="timeline-hashicorp.svg"
            >
              I joined the HashiCorp design team as the second product designer in what would soon become a full product design team.
              I am proud to have helped hire our designers, define our process, and develop a custom Design System named "Structure".
              I am the lead design of the Web UI for <a href="http://hashicorp.com/products/vault" target="_new">Vault</a>, a secrets management tool used by some of the world's biggest companies.
              After a complete redesign, we brought the UI from Enterprise to the Open Source edition for thousands of users.  
            </TimelineItem>

            <TimelineItem
              company="thoughtbot"
              when="2014-2016"
              title="Sr Product Designer"
              icon="timeline-thoughtbot.svg"
            >
              One of the biggest names in Ruby development and a model for how a consulting company should be run,
              I had the pleasure to work with some of the smartest people in the industry.
              thoughtbot is known for their open source projects and community events, and that love for openness and pride in their craft really does run through everything we did together.
              I was one of the more senior designers and also the one with the most development experience, which led to me helping on a wide variety of client and open source projects.
              I helped mentor other designers and develop best practices such as the Product Design Sprint.
              Advising projects while leading design for client projects helped further my love for working with talented and multidisciplinary people.
            </TimelineItem>

            <TimelineItem
              company="Brightbit"
              when="2010-2014"
              title="Co-Founder & Design Manager"
              icon="timeline-brightbit.svg"
            >
              I helped build the company and led design and front-end development for a team of seven.
              We focused on Ruby on Rails, Javascript and hybrid mobile apps, refining best practices from companies like thoughtbot into our own.
              Consulting came easy after working mostly customer service jobs through college, and I think consulting gives invaluable skills for any designer or developer.
              We were one of the leading development shops in the region and I'm really proud of the company and team we built.
            </TimelineItem>
            <li>
              <p className="timeline-more">
                <a href="/files/joshuaogle-resume.pdf" target="_new">Read more about my work history on my resume</a>
              </p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Timeline;
