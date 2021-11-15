import React from 'react';
let params = (new URL(document.location)).searchParams;
let requestedContent = params.get("show");

class PasswordProtected extends React.Component {

  render() {
    if (requestedContent == this.props.contentName) {
      return this.props.children;
    } else {
      return <div/>;
    }
  }
}

export default PasswordProtected;
