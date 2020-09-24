import React from 'react';
import styled from 'styled-components';
import { Header } from './header/Header';

const AppWrapper = styled.main`
  position: relative;
  width: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
};

export default App;
