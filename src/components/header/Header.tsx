import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';
import { AboutMe } from './AboutMe';

const HeaderWrapper = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const Header = () => {
  return (
    <HeaderWrapper id='home'>
      <Nav />
      <AboutMe />
    </HeaderWrapper>
  );
};
