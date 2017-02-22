import React from 'react';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';
import InteractionDesign from './InteractionDesign';
import Branding from './Branding';

class Work extends React.Component {
  componentDidMount() {
    const animates = document.getElementsByClassName("animate");

    function isOnScreen(element) {
      var elementPosition = element.getBoundingClientRect();
      var elementTop = elementPosition.top;
      var scrollTop = window.pageYOffset;
      var screenHeight = document.documentElement.clientHeight;
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
      <BodyClass className="work">
        <Intro className="work-intro">
          <h1>Some projects I've worked on</h1>
          <div className="section-title">User Experience & Interface Design</div>
        </Intro>
        <div className="content">
          <InteractionDesign />
          <Branding />
        </div>
      </BodyClass>
    );
  }
}

export default Work;
