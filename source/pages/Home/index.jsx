import React from 'react';
import './style.sass';

import Intro from '../../components/Intro';
import About from './About';
import InteractionDesign from './InteractionDesign';
import Branding from './Branding';
import Teaching from './Teaching';

class Home extends React.Component {
  componentDidMount() {
    const animates = document.getElementsByClassName("animate");

    function isOnScreen(element) {
      var elementPosition = element.getBoundingClientRect();
      var elementTop = elementPosition.top;
      var scrollTop = window.pageYOffset;
      var screenHeight = window.clientHeight;
      var screenBottom = scrollTop + screenHeight;
      var offset = 150;

      return screenBottom > (elementTop + offset);
    }

    var markAnimated = function() {
      for (var element of animates) {
        if (!element.classList.contains("animated")) {
          if (isOnScreen(element)) {
            element.classList.add("animated");
          }
        }
      }
    };

    if (animates.length > 0) {
      markAnimated();
      window.addEventListener("scroll", markAnimated);
    }
  }

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
