import React from 'react';
import styled from 'styled-components';
import { Page, Info, A } from '../layout/defaultStyles';
import { FormattedMessage } from 'react-intl';
//import { useMediaQuery } from 'react-responsive';
import { device } from '../layout/defaultStyles';

import { frontendData, backendData, toolsData } from './skillsData';
import { SkillsContainer } from './SkillsContainer';

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  width: 75%;

  @media ${device.laptop} {
    width: 90%;
  }
  @media ${device.tablet} {
    width: 95%;
    grid-column-gap: 1.5rem;
    word-wrap: wrap;
  }
  @media ${device.mobileLandscape} {
    grid-template-columns: 100%;
    grid-column-gap: 0;
    grid-template-rows: repeat(3, min-content);
    justify-items: center;
    grid-row-gap: 1rem;
  }
`;

export const Skills = () => {
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
