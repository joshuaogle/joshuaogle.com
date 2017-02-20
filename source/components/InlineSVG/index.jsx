import React from 'react';
import {Link} from 'react-router';
import './style.sass';

class InlineSVG extends React.Component {

  imagePath() {
    return (
      require(`../../../assets/images/${this.props.src}`)
    )
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.imagePath()}} />
    );
  }
}

export default InlineSVG;
