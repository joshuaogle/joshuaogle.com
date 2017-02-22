import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './stylesheets/application.sass';
import './fonts/fonts.sass';

import App from './App';
import Home from './pages/Home';
import ArmadaCaseStudy from './pages/case-studies/Armada';
import OOOCaseStudy from './pages/case-studies/OOO';
import SharespostCaseStudy from './pages/case-studies/Sharespost';
import SummitCaseStudy from './pages/case-studies/Summit';
import PageNotFound from './pages/PageNotFound';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="/case-studies/armada" mapMenuTitle="Armada" component={ArmadaCaseStudy} />
    <Route path="/case-studies/ooo" mapMenuTitle="OOO" component={OOOCaseStudy} />
    <Route path="/case-studies/sharespost" mapMenuTitle="Sharespost" component={SharespostCaseStudy} />
    <Route path="/case-studies/summit" mapMenuTitle="Summit" component={SummitCaseStudy} />

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    onUpdate={() => window.scrollTo(0, 0)}
    routes={routes}
  />,
  document.getElementById('root'),
);
