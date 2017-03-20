import React from 'react';

import BodyClass from '../../components/BodyClass';
import InteractionDesign from './InteractionDesign';
import Branding from './Branding';
import Dribbble from './Dribbble';
import Footer from '../../components/Footer';

class Work extends React.Component {
  render() {
    return (
      <BodyClass className="work">
        <div className="content">
          <InteractionDesign />
          <Branding />

          <section className="section-quote">
            <div className="section-title">
              I've worked with some nice folks who had nice things to say
            </div>
            <blockquote>
              <p>
                Joshua has the uncanny ability to execute and ship successful design. I am consistently amazed at his breadth and depth of design knowledge. He's also one of the rare designers with the skills and ability to cross over to development while still remaining an expert in design.
                &nbsp;
                <span className="quote-author">
                  Kyle Fielder, Chief Design Officer at thoughtbot
                </span>
              </p>
            </blockquote>
          </section>

          <Dribbble />
        </div>
        <Footer />
      </BodyClass>
    );
  }
}

export default Work;
