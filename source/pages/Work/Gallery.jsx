import React from 'react';
import './gallery.sass';

import InlineSVG from '../../components/InlineSVG';

class Gallery extends React.Component {
  renderImage(name, path) {
    return(
      <div className={`gallery-${name}`}><img src={`/source/images/${path}`} /></div>
    )
  }

  renderSvg(name) {
    return(
      <InlineSVG className={`gallery-${name}`} src={`${name}.svg`} />
    )
  }

  render() {
    return (
      <div className="gallery">
        <section>
          {this.renderImage("armada-users", "case-studies/armada-users.png")}
          {this.renderImage("sharespost-chart", "case-studies/sharespost-chart.png")}
          {this.renderImage("summit-map", "case-studies/summit-map.png")}
          {this.renderImage("summit-popover", "case-studies/summit-popover.png")}
          {this.renderImage("armada-home", "case-studies/armada-home.png")}
          {this.renderImage("armada-user", "case-studies/armada-user.png")}
          {this.renderImage("nom-practice", "gallery-nom-practice.png")}
          {this.renderImage("cmr-wires", "gallery-cmr-wires.jpg")}
          {this.renderImage("expedia-fb", "gallery-expedia-fb.jpg")}
          {this.renderImage("smartpanel", "gallery-smartpanel.jpg")}
          {this.renderSvg("brand-armada")}
          {this.renderSvg("brand-wifiguru")}
          {this.renderSvg("brand-brightbit")}
          {this.renderSvg("brand-proteus")}
          {this.renderSvg("brand-gemini")}
          {this.renderSvg("brand-skyhelm")}
        </section>
      </div>
    );
  }
}

export default Gallery;
