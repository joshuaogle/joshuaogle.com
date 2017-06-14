import React from 'react';

import BodyClass from './BodyClass';
import Intro from './Intro';

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
        <img src={`/source/images/${this.props.image}`} className="case-study-example" />
        {this.renderCaption()}
      </figure>
    );
  }
}

export default Example;
