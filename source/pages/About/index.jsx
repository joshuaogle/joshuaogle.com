import React from 'react';
import './style.sass';

import BodyClass from '../../components/BodyClass';
import Teaching from './Teaching';

class About extends React.Component {
  render() {
    return (
      <BodyClass className="about">
        <div className="content card">
          <section className="section-about">
            <div className="about-portrait">
              <img src="/source/images/portrait.png" />
            </div>

            <div className="about-content">
              <div className="section-title">
                A little bit about me
              </div>
              <h2>
                Designer. Developer. I make things.
              </h2>
              <p>
                For over ten years, I've been helping companies of all sizes to establish their brand and <mark>improve their connection to their users</mark>.
                I live in Denver, where I work at <a href="http://citrusbyte.com">Citrusbyte</a>, helping companies of all sizes realize their ideal product.
                I previously worked at <a href="http://thoughtbot.com">thoughtbot</a>, and before that I was co-founder and Creative Director of a consultancy in OKC called <a href="http://brightbit.com">Brightbit</a>.
              </p>
              <p>
                I have a passion for visual communication, problem-solving, usability, and storytelling.
                Designing with code and working side-by-side with developers helps to create a better product, and I like to encourage designers to get into code and vice versa.
              </p>
            </div>
          </section>

          <Teaching />
        </div>
      </BodyClass>
    );
  }
}

export default About;
