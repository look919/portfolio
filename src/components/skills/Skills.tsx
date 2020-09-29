import React from 'react';
import styled from 'styled-components';
import { Page, Info, A } from '../layout/defaultStyles';
import { FormattedMessage } from 'react-intl';
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
          title='Skills.Frontend'
          animationDelay='1s'
        />
        <SkillsContainer
          data={backendData}
          title='Skills.Backend'
          animationDelay='2.5s'
          isInTheMiddle={true}
        />
        <SkillsContainer
          data={toolsData}
          title='Skills.Others'
          animationDelay='4s'
        />
      </Content>
      <Info>
        <FormattedMessage
          id='Skills.Text'
          defaultMessage='Full list of technologies I work with you can find by clicking this '
        />
        <A
          href='https://docs.google.com/document/d/1UUktoP11nRqgAhTEppao9B58RL6dvOz4u9B0DO5Lt74/edit?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FormattedMessage id='Skills.TextLink' defaultMessage='link.' />
        </A>
      </Info>
    </Page>
  );
};
