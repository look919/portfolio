import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { SingleProject } from './SingleProject';
import projects from './projects.json';

const ProjectsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7em 0;
`;

export const Projects = () => {
  return (
    <ProjectsWrapper id='projects'>
      <Heading text='Projects' />
      <SingleProject project={projects[0]} />
    </ProjectsWrapper>
  );
};
