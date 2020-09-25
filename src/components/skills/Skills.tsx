import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import * as Icon from '../../img/Svgs';

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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.5s;
  margin-bottom: 3em;
  margin-left: -3px;

  svg {
    fill: #aaa;
    height: 2.75em;
    width: 2.75em;
    margin-right: 2.5em;

    transition: all 1.2s;
  }
  h3 {
    font-size: 3em;
    color: #ccc;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`;
const ElementContainer = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.5s;
  &:not(:last-of-type) {
    margin-bottom: 1em;
  }

  svg {
    fill: ${(props: { fillColor: string }) =>
      props.fillColor || '#aaa'} !important;
    height: 2.25em;
    width: 2.25em;
    margin-right: 2.5em;

    transition: all 1s;
  }
  span {
    color: #ccc;
    font-size: 2.25em;
    letter-spacing: 1px;
  }
`;

const SkillsContainer = styled.div`
  width: 40em;
  height: 35em;
  background-color: rgb(54, 63, 78);
  display: flex;
  flex-direction: column;
  padding: 5em 3em;
  padding-bottom: 0;

  transition: all 0.5s;

  &:hover {
    background-color: rgb(64, 73, 88);
  }
  &:hover > ${TitleContainer} {
    svg {
      fill: yellow;
    }
    h3 {
      color: white;
    }
  }
  &:not(:hover) > ${ElementContainer} {
    svg {
      fill: #aaa !important;
    }
    span {
      font-size: 2.25em;
      color: #aaa;
      letter-spacing: 1px;
    }
  }
`;

export const Skills = () => {
  return (
    <SkillsWrapper id='skills'>
      <Heading text='Skills' />
      <Content>
        <SkillsContainer>
          <TitleContainer>
            <Icon.StarIcon />
            <h3>Front-end</h3>
          </TitleContainer>
          <ElementContainer fillColor='#1572b6'>
            <Icon.CSSIcon />
            <span>CSS | Sass | BEM</span>
          </ElementContainer>
          <ElementContainer fillColor='#61dafb'>
            <Icon.ReactIcon />
            <span>React</span>
          </ElementContainer>
          <ElementContainer fillColor='#764ABC'>
            <Icon.ReduxIcon />
            <span>Redux</span>
          </ElementContainer>
          <ElementContainer fillColor='#DB7093'>
            <Icon.StyledComponentsIcon />
            <span>Styled components</span>
          </ElementContainer>
          <ElementContainer fillColor='#CB3837'>
            <Icon.NpmIcon />
            <span>3rd party components</span>
          </ElementContainer>
        </SkillsContainer>

        <SkillsContainer>
          <TitleContainer>
            <Icon.StarIcon />
            <h3>Back-end</h3>
          </TitleContainer>
          <ElementContainer fillColor='#339933'>
            <Icon.NodeJsIcon />
            <span>Node.js</span>
          </ElementContainer>
          <ElementContainer fillColor='#000000'>
            <Icon.ExpressIcon />
            <span>Express</span>
          </ElementContainer>
          <ElementContainer fillColor='#47a248'>
            <Icon.MongoDBIcon />
            <span>MongoDB | Mongoose</span>
          </ElementContainer>
          <ElementContainer fillColor='#000000'>
            <Icon.JWTIcon />
            <span>JWT</span>
          </ElementContainer>
        </SkillsContainer>

        <SkillsContainer>
          <TitleContainer>
            <Icon.StarIcon />
            <h3>Tools&Others</h3>
          </TitleContainer>
          <ElementContainer fillColor='#f05032'>
            <Icon.GitIcon />
            <span>Git</span>
          </ElementContainer>
          <ElementContainer fillColor='#007ACC'>
            <Icon.TypescriptIcon />
            <span>TypeScript</span>
          </ElementContainer>
          <ElementContainer fillColor='#8DD6F9'>
            <Icon.WebpackIcon />
            <span>Webpack | npm | yarn</span>
          </ElementContainer>
          <ElementContainer fillColor='#000000'>
            <Icon.AWSIcon />
            <span>AWS EC2 | S3</span>
          </ElementContainer>
          <ElementContainer fillColor='#430098'>
            <Icon.HerokuIcon />
            <span>Heroku</span>
          </ElementContainer>
        </SkillsContainer>
      </Content>
    </SkillsWrapper>
  );
};
