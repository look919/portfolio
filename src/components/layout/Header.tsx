import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Typist from 'react-typist';
import { device } from './defaultStyles';
import { useMediaQuery } from 'react-responsive';
import { Text, showUp } from '../layout/defaultStyles';

const HeaderContainer = styled.header`
  position: absolute;
  top: 2.5rem;
  left: 4rem;
  display: flex;
  flex-direction: column;

  animation: ${showUp} 1.5s ease-out 0.25s both;

  @media ${device.laptopL} {
    top: 1rem;
    left: 3.75rem;
  }
  @media ${device.tablet} {
    left: 2.5rem;
  }
  @media ${device.mobileL} {
    left: 1.5rem;
    top: 0.5rem;
  }
  @media ${device.mobileS} {
    top: 1rem;
  }
`;
export const TypedH1 = styled(Typist)`
  font-size: 4.8rem;
  font-weight: 100;
  margin-left: -7px;

  @media ${device.laptopL} {
    font-size: 4.4rem;
  }
  @media ${device.mobileLandscape} {
    font-size: 3.6rem;
    margin-left: -6px;
  }
  @media ${device.mobileL} {
    margin-left: 0;
  }
  @media ${device.mobile} {
    font-size: 3.2rem;
  }
  @media ${device.mobileS} {
    font-size: 2.6rem;
  }
`;
const PageTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 100;
  margin-left: -7px;

  @media ${device.laptopL} {
    font-size: 4.4rem;
  }
  @media ${device.mobileLandscape} {
    font-size: 3.6rem;
    margin-left: -6px;
  }
  @media ${device.mobileL} {
    margin-left: 0;
  }
  @media ${device.mobile} {
    font-size: 3.2rem;
  }
  @media ${device.mobileS} {
    font-size: 2.6rem;
  }
`;
const SmallerMarginTop = styled.div`
  margin-top: -0.5rem;
  margin-left: -3px;

  animation: ${showUp} 1s ease-out 1s both;

  @media ${device.laptopL} {
    maring-top: 0;
  }
`;

const _Header = ({ history }: RouteComponentProps) => {
  const [typistDone, setTypistDone] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 30em)' });

  const headerDisplayableAt = ['/skills', '/projects', '/contact'];
  if (!headerDisplayableAt.includes(history.location.pathname)) return null;

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

  history.listen(() => {
    setTypistDone(false);
  });

  return (
    <HeaderContainer>
      {!typistDone ? (
        <TypedH1
          startDelay={1000}
          cursor={cursor}
          onTypingDone={() => setTimeout(() => setTypistDone(true), 100)}
        >
          {page}
        </TypedH1>
      ) : (
        <PageTitle>{page}</PageTitle>
      )}
      {!isMobile && (
        <SmallerMarginTop>
          <Text>Tomasz Wirkus - portfolio</Text>
        </SmallerMarginTop>
      )}
    </HeaderContainer>
  );
};

export const Header = withRouter(_Header);
