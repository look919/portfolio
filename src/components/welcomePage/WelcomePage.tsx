import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { H1, H2, Text, ButtonContainer, Button } from '../layout/defaultStyles';
import { FormattedMessage } from 'react-intl';

const WelcomePageWrapper = styled.section`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 7.5rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  transition: all 1s;
`;

const ScrollLink = styled(Link)`
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`;

export const WelcomePage = () => {
  return (
    <WelcomePageWrapper>
      <H1>Tomasz Wirkus</H1>
      <H2>FullStack Developer</H2>
      <Text>
        <FormattedMessage
          id='WelcomePage.Description'
          defaultMessage=' Hi. I am very pleased to welcome you on my website. I am into web
        programming for one and a half years and my goal is to become MERN Stack
        Developer, so I work hard everyday to become one.'
        />
      </Text>
      <ButtonContainer>
        <ScrollLink to='/projects'>
          <Button>
            <FormattedMessage
              id='WelcomePage.ExploreBtn'
              defaultMessage='Explore Work'
            />
          </Button>
        </ScrollLink>
        <ScrollLink to='/projects'>
          <Button>
            <FormattedMessage
              id='WelcomePage.ViewProfileBtn'
              defaultMessage='View Profile'
            />
          </Button>
        </ScrollLink>
      </ButtonContainer>
    </WelcomePageWrapper>
  );
};
