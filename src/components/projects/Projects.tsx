import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { v4 as uuidv4 } from 'uuid';

import { Carousel } from 'react-responsive-carousel';
import { Heading } from '../Heading';
import { SingleProject } from './SingleProject';
import projects from './projects.json';

const ProjectsWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7em 0;
  margin: 0 auto;
`;

export const Projects = () => {
  return (
    <ProjectsWrapper id='projects'>
      <Heading text='Projects' />
      <Carousel showThumbs={false}>
        {projects.map((proj) => (
          <SingleProject key={uuidv4()} project={proj} />
        ))}
      </Carousel>
    </ProjectsWrapper>
  );
};
