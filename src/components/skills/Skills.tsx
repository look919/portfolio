import React from 'react';
import styled from 'styled-components';
import { Page, Text, A } from '../layout/defaultStyles';
//import { useMediaQuery } from 'react-responsive';

import { frontendData, backendData, toolsData } from './skillsData';
import { SkillsContainer } from './SkillsContainer';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const Skills = () => {
  //const isIPadOrSmaller = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <Page>
      <Content>
        <SkillsContainer
          data={frontendData}
          title='front-end'
          animationDelay='1s'
        />
        <SkillsContainer
          data={backendData}
          title='back-end'
          animationDelay='2.5s'
          isInTheMiddle={true}
        />
        <SkillsContainer
          data={toolsData}
          title='tools&others'
          animationDelay='4s'
        />
      </Content>
      <Text>
        Full list of technologies I work with you can find by clicking this{' '}
        <A
          href='https://docs.google.com/document/d/1UUktoP11nRqgAhTEppao9B58RL6dvOz4u9B0DO5Lt74/edit?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          link.
        </A>
      </Text>
    </Page>
  );
};
