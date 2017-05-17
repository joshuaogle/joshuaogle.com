import React from 'react';

import BodyClass from '../../../components/BodyClass';
import Intro from '../../../components/Intro';
import Footer from '../../../components/Footer';

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
