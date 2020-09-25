import React from 'react';
import styled from 'styled-components';
import { Header } from './header/Header';
import { Skills } from './skills/Skills';

const AppWrapper = styled.main`
  position: relative;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Skills />
    </AppWrapper>
  );
};

export default App;
