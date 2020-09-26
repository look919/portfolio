import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

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
const ScrollLink = styled(Link)`
  &:not(:last-of-type) {
    margin-right: 3em;
  }
`;

const Button = styled.button`
  position: relative;
  background-color: transparent;
  font-size: 1.6em;
  letter-spacing: 1px;
  font-family: inherit;
  border: 1px solid #aaa;
  color: #ccc;
  padding: 0.75em 2em;
  text-transform: uppercase;
  cursor: pointer;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    margin-left: -3px;
    height: 12px;
    width: 6px;
    background-color: #ccc;

    transform: translateY(-50%);
    transition: all 0.2s;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: #000;
    background-color: #ccc;
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
        <ScrollLink to='projects' spy={true} smooth={true} duration={1500}>
          <Button>Explore Work</Button>
        </ScrollLink>
        <ScrollLink to='projects' spy={true} smooth={true} duration={1500}>
          <Button>View profile</Button>
        </ScrollLink>
      </ButtonContainer>
    </AboutMeWrapper>
  );
};
