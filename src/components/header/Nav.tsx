import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import {
  HomeIcon,
  SkillsIcon,
  ProjectsIcon,
  ContactIcon,
} from '../../img/Svgs';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 12em;
  width: 12em;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: rgb(9, 5, 24);
  }
`;

const NavButton = styled.button`
  width: 100%;
  height: 12em;
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: all 0.2s;

  &:focus {
    outline: none;
  }

  &:hover > #icon::before,
  &:hover > #icon::after {
    left: 35%;
  }
`;
const NavBurger = styled.div`
  position: relative;
  width: 2em;
  height: 2px;
  background-color: white;
  transition: all 0.2s;

  &::before,
  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 2em;
    height: 2px;
    background-color: white;
    transition: all 0.2s;
  }
  &::before {
    top: 8px;
  }
  &::after {
    bottom: 8px;
  }
`;
const NavIcons = styled.div`
  position: fixed;
  top: 12em;
  right: 0;
  height: ${(props: { hght: string }) => props.hght || '0'};
  width: 12em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(9, 5, 24);
  transition: height 0.5s;
`;
const ScrollLink = styled(Link)`
  fill: #ccc;
  width: 2em;
  margin: 1.5em 0;
  height: ${(props: { hght: string }) => props.hght || '0'};
  cursor: pointer;
  transition: height 0.5s;
`;

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavDisplay = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <NavWrapper className={isOpen ? 'nav-open' : 'nav-closed'}>
      <NavButton onClick={handleNavDisplay}>
        <NavBurger id='icon' />
      </NavButton>

      <NavIcons hght={isOpen ? '22em' : '0'}>
        <ScrollLink
          to='home'
          spy={true}
          smooth={true}
          duration={1500}
          hght={isOpen ? '2em' : '0'}
        >
          <HomeIcon className='svg-nav' />
        </ScrollLink>
        <ScrollLink
          to='skills'
          spy={true}
          smooth={true}
          duration={1500}
          hght={isOpen ? '2em' : '0'}
        >
          <SkillsIcon className='svg-nav' />
        </ScrollLink>
        <ScrollLink
          to='projects'
          spy={true}
          smooth={true}
          duration={1500}
          hght={isOpen ? '2em' : '0'}
        >
          <ProjectsIcon className='svg-nav' />
        </ScrollLink>
        <ScrollLink
          to='contact'
          spy={true}
          smooth={true}
          duration={1500}
          hght={isOpen ? '2em' : '0'}
        >
          <ContactIcon className='svg-nav' />
        </ScrollLink>
      </NavIcons>
    </NavWrapper>
  );
};
