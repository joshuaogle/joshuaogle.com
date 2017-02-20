import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Footer from './components/Footer';

function App({ children, routes }) {
  return (
    <div>
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
