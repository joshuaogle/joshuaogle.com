import React from 'react';
import {Link} from 'react-router';
import './style.sass';

class Intro extends React.Component {
  componentDidMount() {
    const fadeIntro = function() {
      const scrollTop = window.pageYOffset;
      const intros = document.getElementsByClassName("intro");

      for (var intro of intros) {
        var percent = scrollTop / intro.clientHeight;
        var slideUp = "translateY(-" + ((intro.clientHeight / 5) * percent) + "px)";
        var zoomOut = "scale(" + (1 - (percent / 10)) + ")";
        var blur = "blur(" + (percent * 5) + "px)";

        var content = intro.querySelector(".intro-content");
        Object.assign(content.style, {
          "opacity": 1 - percent,
          "transform": slideUp + " " + zoomOut,
          "webkitFilter": blur,
        });
      }
    };

    if (document.getElementsByClassName("intro-content").length > 0) {
      window.addEventListener("scroll", fadeIntro);
    }
  }

  render() {
    return (
      <div className={`intro ${this.props.className}`}>
        <div className="intro-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Intro.defaultProps = {
  className: ""
}

export default Intro;
