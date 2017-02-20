import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

function App({ children, routes }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

export default App;
