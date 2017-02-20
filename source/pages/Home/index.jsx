import React from 'react';
import './style.sass';

import Intro from '../../components/Intro';
import About from './About';
import InteractionDesign from './InteractionDesign';
import Branding from './Branding';
import Teaching from './Teaching';

class Home extends React.Component {
  render() {
    return (
      <article>
        <Intro className="home-intro">
          <h1>Joshua Ogle</h1>
          <p className="intro-job-title">Digital Product Designer, Developer</p>
          <p>I help make the internet better for humans</p>
        </Intro>

        <div className="content">
          <About />
          <InteractionDesign />
          <Branding />
          <Teaching />
        </div>
      </article>
    );
  }
}

export default Home;
