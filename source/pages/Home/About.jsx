import React from 'react';
import {Link} from 'react-router';
import './about.sass';

class About extends React.Component {
  render() {
    return (
      <div>
        <section className="section-about">
          <div className="about-portrait">
            <img src="/source/images/portrait.png" />
          </div>

          <div className="about-content">
            <div className="section-title">
              A little bit about me
            </div>
            <h2>
              I make things
            </h2>
            <p>
              For over ten years, I've been helping companies of all sizes to establish their brand and <mark>improve their connection to their users</mark>.
              I live in Denver, where I work at <Link to="http://thoughtbot.com">thoughtbot</Link>, helping companies of all sizes realize their ideal product.
              Before that, I was a co-founder and Creative Director at a consultancy in OKC called <Link to="http://brightbit.com">Brightbit</Link>.
            </p>
            <p>
              I have a passion for visual communication, problem-solving, usability, and storytelling.
              Designing with code and working side-by-side with developers helps to create a better product, and I like to encourage designers to get into code and vice versa.
              I also help maintain and develop the <Link to="http://bourbon.io">Bourbon Suite of design tools</Link> to help designers and front-end developers write better CSS.
            </p>
          </div>
        </section>

        <section className="section-quote">
          <div className="section-title">
            I've worked with some nice folks who had nice things to say
          </div>
          <blockquote>
            <p>
              Joshua has the uncanny ability to execute and ship successful design. I am consistently amazed at his breadth and depth of design knowledge. He's also one of the rare designers with the skills and ability to cross over to development while still remaining an expert in design.
              <span className="quote-author">
                Kyle Fielder, Chief Design Officer at thoughtbot
              </span>
            </p>
          </blockquote>
        </section>
      </div>
    );
  }
}

export default About;
