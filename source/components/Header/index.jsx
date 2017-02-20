import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import InlineSVG from '../InlineSVG';

class Header extends React.Component {
  render() {
    return (
      <header className="site-header">
        <a href="/" className="logo">
          <InlineSVG src="logo-header.svg" />
        </a>
      </header>
    );
  }
}

export default Header;
