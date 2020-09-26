import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import { WelcomePage } from './welcomePage/WelcomePage';
// import { Skills } from './skills/Skills';
// import { Projects } from './projects/Projects';

export const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={WelcomePage} exact={true} />
        {/* <Route path='/skills' component={SkillsPage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/contact' component={ContactPage} />
        <Route component={NotFoundPage} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);
