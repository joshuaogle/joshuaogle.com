import React from 'react';
import {Link} from 'react-router';

class InlineSVG extends React.Component {

  imagePath() {
    return (
      require(`../../images/${this.props.src}`)
    )
  }

  render() {
    const className = this.props.className || "";
    return (
      <div dangerouslySetInnerHTML={{__html: this.imagePath()}} className={className} />
    );
  }
}

export default InlineSVG;
