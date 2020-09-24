import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.section`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 14em;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const H1 = styled.h1`
  font-size: 7.5em;
  font-weight: 100;
  margin-left: -7px;
`;
const H2 = styled.h2`
  font-size: 5em;
  font-weight: 100;
`;
const Span = styled.span`
  font-size: 2.25em;
  color: #ccc;
  font-weight: 100;
  margin: 1em 0;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;
`;
const Button = styled.button`
  background-color: transparent;
  font-size: 1.6em;
  letter-spacing: 1px;
  font-family: inherit;
  border: 1px solid #aaa;
  color: #ccc;
  padding: 0.75em 1.5em;
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:not(:last-of-type) {
    margin-right: 3em;
  }
`;

export const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <H1>Tomasz Wirkus</H1>
      <H2>FullStack Developer</H2>
      <Span>
        Hi. I am very pleased to welcome you on my website. I am into web
        programming for one and a half years and my goal is to become MERN Stack
        Developer, so I work hard everyday to become one.
      </Span>
      <ButtonContainer>
        <Button>Explore Work</Button>
        <Button>View Profile</Button>
      </ButtonContainer>
    </AboutMeWrapper>
  );
};
