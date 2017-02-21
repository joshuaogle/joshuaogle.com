import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './stylesheets/application.sass';
import './fonts/fonts.sass';

import App from './App';
import Home from './pages/Home';
import ArmadaCaseStudy from './pages/case-studies/Armada';
import OOOCaseStudy from './pages/case-studies/OOO';
import SchoolkeepCaseStudy from './pages/case-studies/Schoolkeep';
import PageNotFound from './pages/PageNotFound';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="/case-studies/armada" mapMenuTitle="Armada" component={ArmadaCaseStudy} />
    <Route path="/case-studies/ooo" mapMenuTitle="OOO" component={OOOCaseStudy} />
    <Route path="/case-studies/schoolkeep" mapMenuTitle="Schoolkeep" component={SchoolkeepCaseStudy} />

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
