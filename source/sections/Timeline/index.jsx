import React from 'react';
import InlineSVG from '../../components/InlineSVG';
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
            <li>
              <h3 className="timeline-company">
                <InlineSVG src="timeline-hashicorp.svg" />
                HashiCorp
              </h3>
              <div className="timeline-span">
                Product Designer, 2017-Present
              </div>
              <p className="timeline-summary">
                I joined the HashiCorp design team as the second product designer in what would soon become a full product design team.
                I am proud to have helped hire our designers, define our process, and develop a custom Design System named "Structure".
                I am the lead design of the Web UI for <a href="http://hashicorp.com/products/vault" target="_new">Vault</a>, a secrets management tool used by some of the world's biggest companies.
                After a complete redesign, we brought the UI from Enterprise to the Open Source edition for thousands of users.
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
                I helped build the company and led design and front-end development for a team of seven.
                We focused on Ruby on Rails, Javascript and hybrid mobile apps, refining best practices from companies like thoughtbot into our own.
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
