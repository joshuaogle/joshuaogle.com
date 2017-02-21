import React from 'react';
import {Link} from 'react-router';

class InlineSVG extends React.Component {

  imagePath() {
    return (
      require(`../../images/${this.props.src}`)
    )
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.imagePath()}} />
    );
  }
}

export default InlineSVG;
