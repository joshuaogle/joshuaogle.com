import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div className={`intro ${this.props.className}`} style={this.props.styles}>
        <div className="intro-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Intro;