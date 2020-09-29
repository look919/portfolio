import React from 'react';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { StarIcon } from '../../img/Svgs';
import { FormattedMessage } from 'react-intl';
import { device } from '../layout/defaultStyles';

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
const backgroundFakeHoverAnimation = keyframes`
  0% {
    background-color: rgb(54, 63, 78);
  }
  50% {
      background-color: rgb(74, 83, 98);
  }
  100% {
    background-color: rgb(54, 63, 78);
}
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.5s;
  margin-bottom: 2rem;
  margin-left: -3px;

  @media ${device.tabletS} {
    margin-top: 0.7rem;
    margin-bottom: 1rem;
  }
  @media ${device.mobileLandscape} {
    margin-bottom: 5px;
  }

  svg {
    fill: #aaa;
    height: 1.8rem;
    width: 1.8rem;
    margin-right: 1.4rem;

    transition: all 1.2s;

    animation: ${starFakeHoverAnimation} 2s ease
      ${(props: { delay: string }) => props.delay};

    @media ${device.desktop} {
      height: 1.4rem;
      width: 1.4rem;
      margin-right: 1rem;
    }
    @media ${device.tablet} {
      height: 1.2rem;
      width: 1.2rem;
    }
    @media ${device.tabletS} {
      height: 1rem;
      width: 1rem;
      margin-right: 0.6rem;
    }
  }
  h3 {
    font-size: 2rem;
    color: #ccc;
    letter-spacing: 3px;
    text-transform: uppercase;

    animation: ${titleFakeHoverAnimation} 2s ease
      ${(props: { delay: string }) => props.delay};

    @media ${device.desktop} {
      font-size: 1.4rem;
    }
    @media ${device.tablet} {
      font-size: 1.2rem;
    }
    @media ${device.tablet} {
      font-size: 1rem;
    }
  }
`;
const ElementContainer = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.5s;

  &:not(:last-of-type) {
    margin-bottom: 0.6rem;

    @media ${device.mobileLandscape} {
      margin-bottom: 3px;
    }
  }

  svg {
    fill: ${(props: { fillColor: string }) =>
      props.fillColor || '#aaa'} !important;
    height: 1.6rem;
    width: 1.6rem;
    margin-right: 1.5rem;

    transition: all 1s;

    @media ${device.desktop} {
      height: 1.2rem;
      width: 1.2rem;
      margin-right: 1.2rem;
    }
    @media ${device.laptopL} {
      margin-right: 1.1rem;
    }
    @media ${device.tablet} {
      height: 1rem;
      width: 1rem;
    }
    @media ${device.tabletS} {
      height: 0.8rem;
      width: 0.8rem;
      margin-right: 0.7rem;
    }
  }
  span {
    color: #ccc;
    font-size: 1.6rem;
    letter-spacing: 1px;

    @media ${device.desktop} {
      font-size: 1.2rem;
    }
    @media ${device.tablet} {
      font-size: 1rem;
    }
    @media ${device.tabletS} {
      font-size: 0.8rem;
    }
  }
`;

const SkillsBox = styled.div`
  width: 100%;
  max-width: 27rem;

  background-color: rgb(54, 63, 78);
  display: flex;
  flex-direction: column;
  padding: 3.25rem 2rem;
  padding-bottom: 2rem;
  margin-top: ${(props: { delay: string; inTheMiddle: boolean }) =>
    props.inTheMiddle ? '-1.6rem' : '0'};
  margin-bottom: ${(props: { delay: string; inTheMiddle: boolean }) =>
    props.inTheMiddle ? '1.6rem' : '0'};

  animation: ${backgroundFakeHoverAnimation} 2s ease
    ${(props: { delay: string; inTheMiddle: boolean }) => props.delay};
  transition: all 0.5s;

  @media ${device.laptopL} {
    padding: 2rem 1.25rem;
    padding-bottom: 1.25rem;
  }
  @media ${device.tabletS} {
    padding: 1rem 0.75rem;
    padding-bottom: 0.75rem;
  }
  @media ${device.mobileLandscape} {
    margin: 0;
    padding: 0 1.25rem;
    padding-bottom: 0.5rem;
  }

  &:hover {
    background-color: rgb(74, 83, 98);
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
      height: 1.6rem;
      width: 1.6rem;

      @media ${device.desktop} {
        height: 1.2rem;
        width: 1.2rem;
      }
      @media ${device.tablet} {
        height: 1rem;
        width: 1rem;
      }
      @media ${device.tabletS} {
        height: 0.8rem;
        width: 0.8rem;
      }
    }
    span {
      font-size: 1.6rem;
      color: #aaa;
      letter-spacing: 1px;

      @media ${device.desktop} {
        font-size: 1.2rem;
      }
      @media ${device.tablet} {
        font-size: 1rem;
      }
      @media ${device.tabletS} {
        font-size: 0.8rem;
      }
    }
  }
`;
interface SkillsContainerProps {
  data: { icon: any; fillColor: string; text: string }[];
  title: string;
  animationDelay: string;
  isInTheMiddle?: boolean;
}

export const SkillsContainer = ({
  data,
  title,
  animationDelay,
  isInTheMiddle = false,
}: SkillsContainerProps) => (
  <SkillsBox inTheMiddle={isInTheMiddle} delay={animationDelay}>
    <TitleContainer delay={animationDelay}>
      <StarIcon />
      <h3>
        <FormattedMessage id={title} defaultMessage='Skills' />
      </h3>
    </TitleContainer>

    {data.map((el) => (
      <ElementContainer fillColor={el.fillColor} key={uuidv4()}>
        {el.icon}
        <span>{el.text}</span>
      </ElementContainer>
    ))}
  </SkillsBox>
);
