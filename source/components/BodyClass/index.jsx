import React from 'react';

class BodyClass extends React.Component {
  componentDidMount() {
    document.documentElement.setAttribute("data-current", this.props.className)
  }

  componentWillReceiveProps(nextProps) {
    document.documentElement.setAttribute("data-current", nextProps.className)
  }

  componentWillUnmount() {
    document.documentElement.removeAttribute("data-current")
  }

  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}

export default BodyClass;
