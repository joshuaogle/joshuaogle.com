import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './application.sass';

import App from './components/App';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
