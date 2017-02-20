import React from 'react';
import {Link} from 'react-router';
import './style.sass';

class Intro extends React.Component {
  render() {
    return (
      <div className="intro home-intro">
        <header className="site-header">
          <Link href="/" className="logo">
            Logo-header.svg
          </Link>
        </header>

        <div className="intro-content">
          <h1>Joshua Ogle</h1>
          <p className="intro-job-title">Digital Product Designer, Developer</p>
          <p>I help make the internet better for humans</p>
        </div>
      </div>
    );
  }
}

export default Intro;
