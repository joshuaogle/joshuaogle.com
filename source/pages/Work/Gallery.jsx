import React from 'react';
import Rellax from 'rellax';
import './gallery.sass';

import InlineSVG from '../../components/InlineSVG';

class Gallery extends React.Component {
  componentDidMount() {
    var rellax = new Rellax('.parallax');
  }

  renderImage(name, path, parallax) {
    return(
      <div
        className={`gallery-${name} ${parallax ? 'parallax' : ''}`}
        data-rellax-speed={parallax}
      >
        <img src={`/source/images/${path}`} />
      </div>
    )
  }

  renderSvg(name, parallax) {
    return(
      <InlineSVG
        className={`gallery-${name} ${parallax ? 'parallax' : ''}`}
        src={`${name}.svg`}
        data-rellax-speed={parallax}
      />
    )
  }

  render() {
    return (
      <div className="gallery">
        <section>
          {this.renderImage("armada-users", "case-studies/armada-users.png")}
          {this.renderImage("sharespost-chart", "case-studies/sharespost-chart.png")}
          {this.renderImage("summit-map", "case-studies/summit-map.png")}
          {this.renderImage("summit-popover", "case-studies/summit-popover.png", 1.5)}
          {this.renderImage("armada-home", "case-studies/armada-home.png")}
          {this.renderImage("armada-user", "case-studies/armada-user.png")}
          {this.renderImage("nom-practice", "gallery-nom-practice.png")}
          {this.renderImage("cmr-wires", "gallery-cmr-wires.jpg")}
          {this.renderImage("expedia-fb", "gallery-expedia-fb.jpg", 0.25)}
          {this.renderImage("smartpanel", "gallery-smartpanel.jpg", 0.75)}
          {this.renderSvg("brand-armada", 1.25)}
          {this.renderSvg("brand-wifiguru", 1.5)}
          {this.renderSvg("brand-brightbit")}
          {this.renderSvg("brand-proteus", 0.75)}
          {this.renderSvg("brand-gemini")}
          {this.renderSvg("brand-skyhelm", 1)}
        </section>
      </div>
    );
  }
}

export default Gallery;
