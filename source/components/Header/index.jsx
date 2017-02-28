import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import InlineSVG from '../InlineSVG';

class Header extends React.Component {
  componentDidMount() {
    const nav = document.getElementsByClassName("site-header")[0];
    nav.addEventListener("mouseover", function() {
      document.body.classList.add("nav-active")
    });

    nav.addEventListener("mouseout", function() {
      document.body.classList.remove("nav-active")
    });
  }

  render() {
    return (
      <header className="site-header">
        <Link to="/" className="logo">
          <InlineSVG src="logo-header.svg" />
        </Link>

        <nav className="site-nav">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
