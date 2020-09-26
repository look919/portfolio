import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { H1, Text, showUp } from '../layout/defaultStyles';

const HeaderContainer = styled.header`
  position: absolute;
  top: 2.5rem;
  left: 4rem;
  display: flex;
  flex-direction: column;

  animation: ${showUp} 1.5s ease-out 0.25s both;
`;
const SmallerMarginTop = styled.div`
  margin-top: -0.5rem;
  margin-left: -3px;
`;

const _Header = ({ history }: RouteComponentProps) => {
  if (history.location.pathname === '/') return null;

  const page =
    history.location.pathname[1].toUpperCase() +
    history.location.pathname.substring(2);

  return (
    <HeaderContainer>
      <H1>{page}</H1>
      <SmallerMarginTop>
        <Text>Tomasz Wirkus - portfolio</Text>
      </SmallerMarginTop>
    </HeaderContainer>
  );
};

export const Header = withRouter(_Header);
