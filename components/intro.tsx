import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div className="intro container">
        <div className="intro-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Intro;