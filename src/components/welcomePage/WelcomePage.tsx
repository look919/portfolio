import React from 'react';
import styled from 'styled-components';
import { Nav } from '../../layout/Nav';
import { AboutMe } from './AboutMe';

export const WelcomePage = () => {
  return (
    <main>
      <Nav />
      <AboutMe />
    </main>
  );
};
