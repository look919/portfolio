import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Profile } from './Profile';
import {
  device,
  H1,
  H2,
  ButtonContainer,
  Button,
  showUp,
} from '../layout/defaultStyles';

const WelcomePageWrapper = styled.section`
  width: calc(100% - 60rem);
  position: absolute;
  top: ${({ moveTop }: { moveTop: boolean }) => (!moveTop ? '50%' : '40%')};
  left: 7.5rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  transition: all 0.4s;

  @media ${device.desktop} {
    width: calc(100% - 40rem);
    top: ${({ moveTop }: { moveTop: boolean }) => (!moveTop ? '50%' : '35%')};
    left: 3.75rem;
  }
  @media ${device.laptop} {
    width: calc(100% - 20rem);
  }
  @media ${device.tabletS} {
    width: calc(100% - 10rem);
    left: 2.5rem;
  }
  @media ${device.mobileLandscape} {
    width: calc(100% - 4rem);
    left: 2rem;
  }
  @media ${device.mobileL} {
    width: 90%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
const WelcomPageDescription = styled.p`
  font-size: 1.5rem;
  color: #ccc;
  font-weight: 100;
  margin-top: 1rem;

  animation: ${showUp} 1s ease-out 1s both;

  @media ${device.mobile} {
    margin-top: 0.5rem;
  }
`;
const ButtonLink = styled(Link)`
  margin-right: 2rem;
`;

export const WelcomePage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileOpening = () => {
    return !isProfileOpen ? setIsProfileOpen(true) : setIsProfileOpen(false);
  };

  return (
    <Fragment>
      <WelcomePageWrapper moveTop={isProfileOpen}>
        <H1>Tomasz Wirkus</H1>
        <H2>FullStack Developer</H2>
        <WelcomPageDescription>
          <FormattedMessage
            id='WelcomePage.Description'
            defaultMessage=' Hi. I am very pleased to welcome you on my website. I am into web
        programming for one and a half years and my goal is to become MERN Stack
        Developer, so I work hard everyday to become one.'
          />
        </WelcomPageDescription>
        <ButtonContainer>
          <ButtonLink to='/projects'>
            <Button>
              <FormattedMessage
                id='WelcomePage.ExploreBtn'
                defaultMessage='Explore Work'
              />
            </Button>
          </ButtonLink>
          <Button onClick={handleProfileOpening}>
            {!isProfileOpen ? (
              <FormattedMessage
                id='WelcomePage.ShowProfileBtn'
                defaultMessage='Show Profile'
              />
            ) : (
              <FormattedMessage
                id='WelcomePage.HideProfileBtn'
                defaultMessage='Hide Profile'
              />
            )}
          </Button>
        </ButtonContainer>
      </WelcomePageWrapper>
      {isProfileOpen && <Profile />}
    </Fragment>
  );
};
