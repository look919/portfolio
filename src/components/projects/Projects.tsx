import React from 'react';
import styled from 'styled-components';
import { Page, Text, A } from '../layout/defaultStyles';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { v4 as uuidv4 } from 'uuid';

import { SingleProject } from './SingleProject';
import projects from './projects.json';

const CarouselContainer = styled.div`
  width: 37.5%;
  transition: all 0.3s;
`;

export const Projects = () => {
  return (
    <Page>
      <CarouselContainer>
        <Carousel showThumbs={false}>
          {projects.map((proj) => (
            <SingleProject key={uuidv4()} project={proj} />
          ))}
        </Carousel>
      </CarouselContainer>

      <Text>
        All the projects in the portfolio I created 100% by myself.{' '}
        <A
          href='https://github.com/look919'
          target='_blank'
          rel='noopener noreferrer'
        >
          Take a look how i write my code
        </A>
        .
      </Text>
    </Page>
  );
};
