import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Typist from 'react-typist';

import { Text, showUp } from '../layout/defaultStyles';
import { FormattedMessage } from 'react-intl';

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

  let lang = localStorage.getItem('lang') || 'en';
  const page =
    history.location.pathname[1].toUpperCase() +
    history.location.pathname.substring(2);
  let heading = '';
  if (lang === 'pl') {
    switch (page) {
      case 'Skills':
        heading = 'Umiejętności';
        break;
      case 'Projects':
        heading = 'Projekty';
        break;
      case 'Contact':
        heading = 'Kontakt';
        break;
      default:
        heading = '';
        break;
    }
  }

  const cursor = {
    show: true,
    blink: false,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  };

  history.listen(() => {
    setTypistDone(false);
    lang = localStorage.getItem('lang') || 'en';
  });

  return (
    <HeaderContainer>
      {!typistDone ? (
        <TypedH1
          startDelay={1000}
          cursor={cursor}
          onTypingDone={() => setTimeout(() => setTypistDone(true), 100)}
        >
          {heading}
        </TypedH1>
      ) : (
        <PageTitle>
          <FormattedMessage id={`Nav.${page}`} defaultMessage={page} />
        </PageTitle>
      )}

      <SmallerMarginTop>
        <Text>Tomasz Wirkus - portfolio</Text>
      </SmallerMarginTop>
    </HeaderContainer>
  );
};

export const Header = withRouter(_Header);
