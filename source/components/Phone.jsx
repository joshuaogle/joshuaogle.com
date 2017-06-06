import React from 'react';

import BodyClass from './BodyClass';
import Intro from './Intro';

class Phone extends React.Component {
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
        <div className="case-study-phone">
          <img src={`/source/images/case-studies/${this.props.image}`} />
        </div>
        {this.renderCaption()}
      </figure>
    );
  }
}

export default Phone;
