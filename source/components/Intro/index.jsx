import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import Header from '../Header';

class Intro extends React.Component {
  render() {
    return (
      <div className={`intro ${this.props.className}`}>
        <Header />
        <div className="intro-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Intro;
