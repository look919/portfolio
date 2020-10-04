import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Div100vh from 'react-div-100vh';
import './app.css';
import styled from 'styled-components';
import { device } from './layout/defaultStyles';

import { Header } from './layout/Header';
import { LanguageSelector } from './layout/LanguageSelector';
import { Nav } from './layout/Nav';
import { WelcomePage } from './welcomePage/WelcomePage';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Contact } from './contact/Contact';

const FixedMobileVh = styled(Div100vh)`
  padding-top: 10rem;
  padding-bottom: 4rem;

  @media ${device.laptopL} {
    padding-top: 8rem;
    padding-bottom: 2rem;
  }
  @media ${device.mobileL} {
    padding-top: 6rem;
  }
  @media ${device.mobile} {
    padding-bottom: 1rem;
  }
  @media ${device.mobileS} {
    padding-bottom: 0.5rem;
  }
  @media ${device.mobileLandscapeHeight} {
    height: initial !important;
    overflow: visible;
  }
`;

export const App = () => {
  return (
    <BrowserRouter>
      <FixedMobileVh>
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
      </FixedMobileVh>
    </BrowserRouter>
  );
};
