import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 14em;
  width: 14em;
  background-color: red;
`;

export const Nav = () => {
  return (
    <NavWrapper>
      Test
      <p>test 2</p>
    </NavWrapper>
  );
};
