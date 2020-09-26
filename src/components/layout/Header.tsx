import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { H1, Text } from '../layout/defaultStyles';

const HeaderContainer = styled.header`
  position: absolute;
  top: 2.5rem;
  left: 4rem;
  height: 12em;
  display: flex;
  flex-direction: column;
`;
const SmallerMarginTop = styled.div`
  margin-top: -0.5em;
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
