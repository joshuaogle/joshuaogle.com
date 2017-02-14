import React, { PropTypes } from 'react';

function PageNotFound({ location }) {
  return (
    <article>
      Page not found
    </article>
  );
}

PageNotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PageNotFound;
