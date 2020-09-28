import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Typist from 'react-typist';

import { Text, showUp } from '../layout/defaultStyles';

const HeaderContainer = styled.header`
  position: absolute;
  top: 2.5rem;
  left: 4rem;
  display: flex;
  flex-direction: column;

  animation: ${showUp} 1.5s ease-out 0.25s both;
`;
export const TypedH1 = styled(Typist)`
  font-size: 4.8rem;
  font-weight: 100;
  margin-left: -7px;
`;
const PageTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 100;
  margin-left: -7px;
`;
const SmallerMarginTop = styled.div`
  margin-top: -0.5rem;
  margin-left: -3px;

  animation: ${showUp} 1s ease-out 1s both;
`;

const _Header = ({ history }: RouteComponentProps) => {
  const [typistDone, setTypistDone] = useState(false);

  if (history.location.pathname === '/') return null;

  const page =
    history.location.pathname[1].toUpperCase() +
    history.location.pathname.substring(2);

  const cursor = {
    show: true,
    blink: false,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  };

  history.listen((location) => {
    setTypistDone(false);
  });

  return (
    <HeaderContainer>
      {!typistDone ? (
        <TypedH1
          startDelay={1000}
          cursor={cursor}
          onTypingDone={() => setTimeout(() => setTypistDone(true), 1)}
        >
          {page}
        </TypedH1>
      ) : (
        <PageTitle>{page}</PageTitle>
      )}

      <SmallerMarginTop>
        <Text>Tomasz Wirkus - portfolio</Text>
      </SmallerMarginTop>
    </HeaderContainer>
  );
};

export const Header = withRouter(_Header);
