import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <Fragment>
        <Header />
        <LanguageSelector />
        <Nav />
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} exact />
          <Route path='/contact' component={Contact} exact />
          {/*
        <Route component={NotFoundPage} /> */}
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};
