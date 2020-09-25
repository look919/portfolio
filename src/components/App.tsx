import React from 'react';
import styled from 'styled-components';
import './app.css';
import { Header } from './header/Header';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';

const AppWrapper = styled.main`
  position: relative;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Skills />
      <Projects />
    </AppWrapper>
  );
};

export default App;
