import React from 'react';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { StarIcon } from '../../img/Svgs';

const starFakeHoverAnimation = keyframes`
  0% {
      fill: #aaa;
  }
  50% {
      fill: yellow;
  }
  100% {
    fill: #aaa;
}
`;
const titleFakeHoverAnimation = keyframes`
  0% {
      color: #ccc;
  }
  50% {
      color: white;
  }
  100% {
    color: #ccc;
}
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

    animation: ${starFakeHoverAnimation} 2s ease
      ${(props: { delay: string }) => props.delay};
  }
  h3 {
    font-size: 3em;
    color: #ccc;
    letter-spacing: 3px;
    text-transform: uppercase;

    animation: ${titleFakeHoverAnimation} 1s ease
      ${(props: { delay: string }) => props.delay};
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

const SkillsBox = styled.div`
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
interface SkillsContainerProps {
  data: { icon: any; fillColor: string; text: string }[];
  title: string;
  animationDelay: string;
}

export const SkillsContainer = ({
  data,
  title,
  animationDelay,
}: SkillsContainerProps) => (
  <SkillsBox>
    <TitleContainer delay={animationDelay}>
      <StarIcon />
      <h3>{title}</h3>
    </TitleContainer>
    {data.map((el) => (
      <ElementContainer fillColor={el.fillColor} key={uuidv4()}>
        {el.icon}
        <span>{el.text}</span>
      </ElementContainer>
    ))}
  </SkillsBox>
);
