import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Div100vh from 'react-div-100vh';
import './app.css';

import { Header } from './layout/Header';
import { LanguageSelector } from './layout/LanguageSelector';
import { Nav } from './layout/Nav';

import { WelcomePage } from './welcomePage/WelcomePage';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Contact } from './contact/Contact';

export const App = () => {
  return (
    <BrowserRouter>
      <Div100vh>
        <Header />
        <LanguageSelector />
        <Nav />
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} exact />
          <Route path='/contact' component={Contact} exact />
          <Route component={WelcomePage} />
        </Switch>
      </Div100vh>
    </BrowserRouter>
  );
};
