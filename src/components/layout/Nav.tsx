import React, { useState } from 'react';
import styled from 'styled-components';
import { showUp } from './defaultStyles';

import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  SkillsIcon,
  ProjectsIcon,
  ContactIcon,
} from '../../img/Svgs';

interface NavItemProps {
  hght: string;
  textofprevious: string;
}

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  height: 7.5rem;
  width: 7.5rem;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: rgb(9, 5, 24);
  }
`;
const NavButton = styled.button`
  width: 100%;
  height: 7.5rem;
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
  width: 1.6rem;
  height: 2px;
  background-color: white;
  transition: all 0.2s;

  &::before,
  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 1.6rem;
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
  top: 7.5rem;
  right: 0;
  height: ${(props: { hght: string }) => props.hght || '0'};
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(9, 5, 24);
  transition: height 0.5s;
`;
const ScrollLink = styled(NavLink)`
  fill: #ccc;
  width: 1.6rem;
  margin: 0.8rem 0;
  height: ${(props: NavItemProps) => props.hght || '0'};
  cursor: pointer;
  transition: all 0.5s;

  &:first-of-type: {
    margin: 0;
    margin-bottom: 0.8rem;
  }

  &::before {
    position: absolute;
    right: 7rem;
    margin-top: -3rem;
    display: none;
    background-color: rgb(9, 5, 24);
    padding: 1.1rem 2.5rem;
    font-size: 0.9rem;
    text-align: center;
    text-transform: uppercase;
    color: #fff;

    content: '${(props) => props.textofprevious}';

    transition: all 1s;
  }

  &:hover + &::before {
    display: flex;
    animation: ${showUp} 1s both;
  }
`;

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavDisplay = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <NavWrapper className={isOpen ? 'nav-open' : 'nav-closed'}>
      <NavButton id='nav-button' onClick={handleNavDisplay}>
        <NavBurger id='icon' />
      </NavButton>

      <NavIcons id='nav-icons' hght={isOpen ? '12.5rem' : '0'}>
        <ScrollLink
          to='/'
          activeStyle={{ fill: '#ccc' }}
          hght={isOpen ? '2em' : '0'}
          textofprevious=''
        >
          <HomeIcon className='svg-nav' />
        </ScrollLink>
        <ScrollLink
          to='/skills'
          activeStyle={{ fill: '#fff' }}
          hght={isOpen ? '2em' : '0'}
          textofprevious='Home'
        >
          <SkillsIcon className='svg-nav' />
        </ScrollLink>
        <ScrollLink
          to='/projects'
          activeStyle={{ fill: '#fff' }}
          hght={isOpen ? '2em' : '0'}
          textofprevious='Skills'
        >
          <ProjectsIcon className='svg-nav' />
        </ScrollLink>
        <ScrollLink
          to='/contact'
          activeStyle={{ fill: '#fff' }}
          hght={isOpen ? '2em' : '0'}
          textofprevious='Projects'
        >
          <ContactIcon className='svg-nav' />
        </ScrollLink>
        <ScrollLink
          to='/'
          activeStyle={{ fill: '#fff' }}
          hght={isOpen ? '2em' : '0'}
          textofprevious='Contact'
        >
          &nbsp;
        </ScrollLink>
      </NavIcons>
    </NavWrapper>
  );
};
