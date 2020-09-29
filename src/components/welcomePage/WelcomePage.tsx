import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { H1, H2, Info, ButtonContainer, Button } from '../layout/defaultStyles';
import { FormattedMessage } from 'react-intl';
import { device } from '../layout/defaultStyles';

import { Profile } from './Profile';

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
        <Info>
          <FormattedMessage
            id='WelcomePage.Description'
            defaultMessage=' Hi. I am very pleased to welcome you on my website. I am into web
        programming for one and a half years and my goal is to become MERN Stack
        Developer, so I work hard everyday to become one.'
          />
        </Info>
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
