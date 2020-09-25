import React from 'react';
import styled from 'styled-components';

import { Heading } from '../Heading';
import { frontendData, backendData, toolsData } from './skillsData';
import { SkillsContainer } from './SkillsContainer';

const Roll = require('react-reveal/Roll');
const Fade = require('react-reveal/Fade');

const SkillsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

const SPAN = styled.span`
  width: 60%;
  font-size: 2.25em;
  color: #ccc;
  font-weight: 100;
  margin-top: 3em;
  text-align: center;
`;
const A = styled.a`
  &:visited,
  &:link {
    color: #fff;
    font-weight: 100;
  }
`;
export const Skills = () => {
  return (
    <SkillsWrapper id='skills'>
      <Heading text='Skills' />
      <Content>
        <Roll left>
          <SkillsContainer
            data={frontendData}
            title='front-end'
            animationDelay='1s'
          />
        </Roll>
        <Fade bottom>
          <SkillsContainer
            data={backendData}
            title='back-end'
            animationDelay='2.5s'
          />
        </Fade>
        <Roll right>
          <SkillsContainer
            data={toolsData}
            title='tools&others'
            animationDelay='4s'
          />
        </Roll>
      </Content>
      <SPAN>
        Full list of technologies I work with you can find by clicking this{' '}
        <A
          href='https://docs.google.com/document/d/1UUktoP11nRqgAhTEppao9B58RL6dvOz4u9B0DO5Lt74/edit?usp=sharing'
          target='_blanc'
        >
          link.
        </A>
      </SPAN>
    </SkillsWrapper>
  );
};
