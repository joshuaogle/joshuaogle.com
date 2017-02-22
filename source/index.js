import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import './stylesheets/application.sass';
import './fonts/fonts.sass';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Articles from './pages/Articles';
import ArmadaCaseStudy from './pages/case-studies/Armada';
import OOOCaseStudy from './pages/case-studies/OOO';
import SharespostCaseStudy from './pages/case-studies/Sharespost';
import SummitCaseStudy from './pages/case-studies/Summit';
import PageNotFound from './pages/PageNotFound';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="/about" mapMenuTitle="About" component={About} />
    <Route path="/articles" mapMenuTitle="Articles" component={Articles} />

    <Route path="/work" mapMenuTitle="Work" component={Work} />
    <Route path="/work/armada" mapMenuTitle="Armada" component={ArmadaCaseStudy} />
      <Redirect from="/case-studies/armada" to="/work/armada" />
    <Route path="/work/ooo" mapMenuTitle="OOO" component={OOOCaseStudy} />
      <Redirect from="/case-studies/ooo" to="/work/ooo" />
    <Route path="/work/sharespost" mapMenuTitle="Sharespost" component={SharespostCaseStudy} />
      <Redirect from="/case-studies/sharespost" to="/work/sharespost" />
    <Route path="/work/summit" mapMenuTitle="Summit" component={SummitCaseStudy} />
      <Redirect from="/case-studies/summit" to="/work/summit" />

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    onUpdate={() => window.scrollTo(0, 0)}
    routes={routes}
  />,
  document.getElementById('root')
);
