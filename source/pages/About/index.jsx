import React from 'react';
import './style.sass';
import './timeline.sass';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';
import Clients from './Clients';
import Teaching from './Teaching';
import Timeline from './Timeline';
import Footer from '../../components/Footer';

class About extends React.Component {
  render() {
    return (
      <BodyClass className="about">
        <Intro>
          <h1>Designer. Developer. I make things</h1>
        </Intro>

        <div className="content">
          <section>
            <p>
              For over ten years, I've been helping companies of all sizes to establish their brand and <mark>improve their connection to their users</mark>.
              I live in Denver, where I work at <a href="http://citrusbyte.com" target="_new">Citrusbyte</a>, helping companies of all sizes realize their ideal product.
              I previously worked at <a href="http://thoughtbot.com" target="_new">thoughtbot</a>, and before that I was co-founder and Creative Director of a consultancy in OKC called Brightbit.
            </p>
            <p>
              <a href="/files/joshuaogle-resume.pdf" target="_new">You can read more about my work history on my resume</a>
            </p>
          </section>

          <Timeline />

          <Clients />

          <Teaching />
        </div>
        <Footer />
      </BodyClass>
    );
  }
}

export default About;
