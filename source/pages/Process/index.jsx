import React from 'react';
import './style.sass';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';

class About extends React.Component {
  render() {
    return (
      <BodyClass className="about">
        <Intro>
          <h1>How I Work</h1>
        </Intro>

        <div className="content">
          <section>
            <h2>Research</h2>
            <p>
              Design Sprint
              User Testing
              A/B Testing
            </p>
          </section>

          <section>
            <h2>Ideation</h2>
            <p>
              Yo
            </p>
          </section>

          <section>
            <h2>Prototyping</h2>
            <p>
              Yo
            </p>
          </section>

          <section>
            <h2>Design</h2>
            <p>
              Yo
            </p>
          </section>

          <section>
            <h2>Development</h2>
            <p>
              Yo
            </p>
          </section>

          <section>
            <h2>Project & Team</h2>
            <p>
              Yo
            </p>
          </section>
        </div>
      </BodyClass>
    );
  }
}

export default About;
