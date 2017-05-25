import React from 'react';
import InlineSVG from '../../components/InlineSVG';
import './timeline.sass';

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
            <li>
              <h3 className="timeline-company">
                <InlineSVG src="timeline-citrusbyte.svg" />
                Citrusbyte
              </h3>
              <div className="timeline-span">
                Senior Product Designer, 2016-2017
              </div>
              <p className="timeline-summary">
                Working with both Fortune 500 companies and startups was a great experience.
                This rapidly expanding cosultancy quickly became a big name in New York and Los Angeles, bringing a startup practice to enterprise clients.
                I helped with designer hiring, reviewing and interviewing hundreds of designers.
                Working remotely as a new design team has a lot of challenges but through regular critiques and collaboration, and built a great process to make happy clients.
              </p>
            </li>
            <li>
              <h3 className="timeline-company">
                thoughtbot
                <InlineSVG src="timeline-thoughtbot.svg" />
              </h3>
              <div className="timeline-span">
                Senior Product Designer, 2014-2016
              </div>
              <p className="timeline-summary">
                One of the biggest names in Ruby development and a model for how a consulting company should be run,
                I had the pleasure to work with some of the smartest people in the industry.
                thoughtbot is known for their open source projects and community events, and that love for openness and pride in their craft really does run through everything we did together.
                I was one of the more senior designers and also the one with the most development experience, which led to me helping on a wide variety of client and open source projects.
                I helped mentor other designers and develop best practices such as the Product Design Sprint.
                Advising projects while leading design for client projects helped further my love for working with talented and multidisciplinary people.
              </p>
            </li>
            <li>
              <h3 className="timeline-company">
                <InlineSVG src="timeline-brightbit.svg" />
                Brightbit
              </h3>
              <div className="timeline-span">
                Co-Founder & Creative Director, 2010-2014
              </div>
              <p className="timeline-summary">
                I was co-founder and Creative Director, leading design and front-end development for a team of seven.
                Consulting came easy after working mostly customer service jobs through college, and I think consulting gives invaluable skills for any designer or developer.
                We were one of the leading development shops in the region and I'm really proud of the company and team we built.
              </p>
            </li>
            <li>
              <h3 className="timeline-company">
                The Oklahoman
                <InlineSVG src="timeline-oklahoman.svg" />
              </h3>
              <div className="timeline-span">
                UI/UX Designer, 2008-2010
              </div>
              <p className="timeline-summary">
                This is where I fell in love with product design, after assembling the best team in the state.
                We designed and built one of the first "hyper-local" platforms, connecting people to events and businesses around them.
                A few of the developers and I formed a team for a Startup Weekend competition and loved working together so much so well we left to form Brightbit.
              </p>
            </li>
            <li>
              <p className="timeline-more">
                4+ more years of freelance, designing marketing sites for small local businesses
              </p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Timeline;
