import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { v4 as uuidv4 } from 'uuid';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';

import { Carousel } from 'react-responsive-carousel';
import { Heading } from '../Heading';
import { SingleProject } from './SingleProject';
import projects from './projects.json';

const ProjectsWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7em 0;
  margin: 0 auto;
`;
const CarouselContainer = styled.div`
  width: 40%;
  height: 100%;

  transition: all 0.3s;
`;

export const Projects = () => {
  return (
    <ProjectsWrapper id='projects'>
      <Heading text='Projects' />
      <VisibilitySensor
        partialVisibility={true}
        offset={{ top: 400, bottom: 300 }}
      >
        {({ isVisible }) => (
          <Spring delay={100} to={{ opacity: isVisible ? 1 : 0.1 }}>
            {({ opacity }) => (
              <CarouselContainer style={{ opacity }}>
                <Carousel showThumbs={false}>
                  {projects.map((proj) => (
                    <SingleProject key={uuidv4()} project={proj} />
                  ))}
                </Carousel>
              </CarouselContainer>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </ProjectsWrapper>
  );
};
