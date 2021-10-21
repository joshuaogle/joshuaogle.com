import React from 'react';

class BodyClass extends React.Component {
  componentDidMount() {
    document.body.setAttribute("data-current", this.props.className);
    document.body.setAttribute("data-intro", this.props.hasIntro);
    document.body.setAttribute("style", this.props.style);
  }

  componentWillReceiveProps(nextProps) {
    document.body.setAttribute("data-current", nextProps.className);
    document.body.setAttribute("data-intro", nextProps.hasIntro);
    document.body.setAttribute("style", this.props.style);
  }

  componentWillUnmount() {
    document.body.removeAttribute("data-current");
    document.body.removeAttribute("data-intro");
    document.body.removeAttribute("style");
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
