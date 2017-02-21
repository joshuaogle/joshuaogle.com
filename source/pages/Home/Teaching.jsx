import React from 'react';
import {Link} from 'react-router';
import './teaching.sass';

class Teaching extends React.Component {
  render() {
    return (
      <section className="teaching">
        <div className="teaching-portrait">
          <img src="/source/images/speaking.png" alt="Speaking" />
        </div>

        <div className="teaching-content">
          <div className="section-title">Paying it forward</div>
          <h2>Speaking, writing, etc</h2>
          <p>
            I want the next generation of designers and developers to have an easier time learning than we did when I was getting started.
            That's why I spend time speaking (most recently at <a href="http://thunderplainsconf.com">Thunder Plains</a> and <a href="http://www.meetup.com/refreshdenver">Refresh Denver</a>), and running workshops
            to teach people about the <a href="https://github.com/joshuaogle/presentation-design-sprints">Product Design Sprint</a>.
            I have been working on a book on Design for the Web while working at thoughtbot, and I've been recording videos for a large online learning platform.
            I look forward to helping others learn however I can.
          </p>
        </div>
      </section>
    );
  }
}

export default Teaching;
