import React from 'react';
import InlineSVG from '../components/InlineSVG';

class Testimonial extends React.Component {
  render() {
    return (
      <section className="section-testiomonial">
        <div className="section-title">
          They've got nice things to say
        </div>

        <blockquote>
          <p>
            Joshua has the uncanny ability to execute and ship successful design. I am consistently amazed at his breadth and depth of design knowledge. He's also one of the rare designers with the skills and ability to cross over to development while still remaining an expert in design.
            <small className="quote-author">
              Kyle Fielder, Chief Design Officer at <InlineSVG src="source-thoughtbot.svg"/> thoughtbot
            </small>
          </p>
        </blockquote>
      </section>
    );
  }
}

export default Testimonial;
