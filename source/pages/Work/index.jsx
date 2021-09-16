import React from 'react';

import BodyClass from '../../components/BodyClass';
import Page from '../../components/Page';
import Intro from '../../components/Intro';
import Gallery from '../../sections/Gallery';
import Clients from '../../sections/Clients';
import CaseStudies from '../../sections/CaseStudies';
import InlineSVG from '../../components/InlineSVG';
import Timeline from '../../sections/Timeline';

class Work extends React.Component {
  render() {
    return (
      <BodyClass className="work">
	      <Page>
          <Intro className="work-intro">
            <h1>Make them fall in love</h1>
            <p>
              It's not enough to make something pretty, and you can't just make it functional either.
              A great experience is making the user feel at home, showing them a better way to get things done.
              A great design isn't even about you.
              &nbsp;<mark>It's about what it does for the user.</mark>
            </p>
          </Intro>

          <div className="content">
            <Clients />
            <CaseStudies />
          </div>

          <Timeline />

          <section className="section-quote">
            <div className="section-title">
              They've got nice things to say
            </div>

            <blockquote>
              <p>
                Joshua has the uncanny ability to execute and ship successful design. I am consistently amazed at his breadth and depth of design knowledge. He's also one of the rare designers with the skills and ability to cross over to development while still remaining an expert in design.
                &nbsp;
                <span className="quote-author">
                  Kyle Fielder, Chief Design Officer at <InlineSVG src="source-thoughtbot.svg"/> thoughtbot
                </span>
              </p>
            </blockquote>
          </section>
	      </Page>
      </BodyClass>
    );
  }
}

export default Work;
