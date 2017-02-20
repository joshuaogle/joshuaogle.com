import React from 'react';
import './style.sass';

import Intro from './Intro';
import About from './About';
import InteractionDesign from './InteractionDesign';
import Branding from './Branding';
import Teaching from './Teaching';

class Home extends React.Component {
  render() {
    return (
      <article>
        <Intro />

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
