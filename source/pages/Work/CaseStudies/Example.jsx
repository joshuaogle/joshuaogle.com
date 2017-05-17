import React from 'react';

import BodyClass from '../../../components/BodyClass';
import Intro from '../../../components/Intro';
import Footer from '../../../components/Footer';

class Example extends React.Component {
  renderCaption() {
    if (this.props.caption) {
      return(
        <figcaption>
          {this.props.caption}
        </figcaption>
      )
    }
  }

  render() {
    return (
      <figure>
        <img src={`/source/images/case-studies/${this.props.image}`} className="case-study-example" />
        {this.renderCaption()}
      </figure>
    );
  }
}

export default Example;
