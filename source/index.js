import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import articles from './data/articles';
import './stylesheets/application.sass';
import './fonts/fonts.sass';

import App from './App';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Articles/show';
import ArmadaCaseStudy from './pages/Work/CaseStudies/Armada';
import OOOCaseStudy from './pages/Work/CaseStudies/OOO';
import SharespostCaseStudy from './pages/Work/CaseStudies/Sharespost';
import KitMathCaseStudy from './pages/Work/CaseStudies/KitMath';
import SummitCaseStudy from './pages/Work/CaseStudies/Summit';
import NetkixExercise from './pages/Exercise/netkix';
import PageNotFound from './pages/PageNotFound';

const articleRoutes = articles.map((article) => <Route key={article.title} path={`/articles/${article.path}`} component={Article} article={article} />);

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="/articles" mapMenuTitle="Articles" component={Articles} />

    <Route path="/work/armada" mapMenuTitle="Armada" component={ArmadaCaseStudy} />
      <Redirect from="/Work/CaseStudies/armada" to="/work/armada" />
    <Route path="/work/ooo" mapMenuTitle="OOO" component={OOOCaseStudy} />
      <Redirect from="/Work/CaseStudies/ooo" to="/work/ooo" />
    <Route path="/work/sharespost" mapMenuTitle="Sharespost" component={SharespostCaseStudy} />
      <Redirect from="/Work/CaseStudies/sharespost" to="/work/sharespost" />
    <Route path="/work/kitmath" mapMenuTitle="KitMath" component={KitMathCaseStudy} />
      <Redirect from="/Work/CaseStudies/kitmath" to="/work/kitmath" />
    <Route path="/work/summit" mapMenuTitle="Summit" component={SummitCaseStudy} />
      <Redirect from="/Work/CaseStudies/summit" to="/work/summit" />

    <Route path="/exercise/netkix" mapMenuTitle="Netkix" component={NetkixExercise} />

    {articleRoutes}
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
