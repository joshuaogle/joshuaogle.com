import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import InlineSVG from '../InlineSVG';

class Header extends React.Component {
  render() {
    return (
      <header className="site-header">
        <Link to="/" className="logo">
          <InlineSVG src="logo-header.svg" />
        </Link>

        <nav className="site-nav">
          <ul>
            <li>
              <Link data-link-to="about" to="/about">About</Link>
            </li>
            <li>
              <Link data-link-to="work" to="/work">Work</Link>
            </li>
            <li>
              <Link data-link-to="articles" to="/articles">Articles</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
