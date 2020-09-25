import React from 'react';
import styled from 'styled-components';
//import { Context } from '../Wrapper';

const Figure = styled.figure`
  display: grid;
  align-items: center;
  margin: 0 auto;

  transition: all 0.4s;
`;
const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
`;
const ProjectName = styled.h3`
  font-size: 3.25em;
  text-align: left;
  padding: 0 0.25em;
  flex: 1 0 0;
`;
const ProjectLinkActive = styled.a`
  &:link,
  &:visited {
    color: #dfc4ea;
    font-weight: 900;
    text-decoration: none;
    font-size: 2.5em;
    padding: 0 0.4em;
    margin-bottom: 0;
    transition: all 0.4s;
  }
  &:hover {
    transform: scale(1.2);
  }
`;
const ProjectLinkNotActive = styled.span`
  color: #aaa;
  font-size: 2.5em;
  padding: 0 0.4em;
  margin-bottom: 0;
  transition: all 0.4s;

  &:hover {
    transform: scale(1) !important;
  }
`;

const ProjectMainImg = styled.img`
  width: 100%;
  height: 100%;
`;
const ProjectDetails = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.75rem;
  padding-bottom: 0;

  transform: translateX(-50%);

  @media only screen and (max-width: 31.25em) {
    padding: 0.5rem;
  }
`;
const ProjectDescription = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 2.5em;
  color: #dfc4ea;
  border-bottom: 1px solid #dfc4ea;

  span {
    padding: 0 1rem;
  }

  @media only screen and (max-width: 31.25em) {
    font-size: 2em;
  }
`;

const ProjectTechnologies = styled.div`
  grid-row: 2 / 3;

  width: ${(props: { width: string }) => props.width || '70%'};
  height: 8rem;

  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
  transition: all 0.1s;
`;
const ProjectTechnologiesImgsHover = styled.img`
  object-fit: cover;
  height: 6rem !important;
  width: 6rem !important;
  margin-bottom: ${(props: { marBottom: string }) => props.marBottom || '0'};
`;

const ProjectInDevelopment = styled.div`
  position: absolute;
  z-index: 20;
  right: 0;
  top: 0;

  border: none;
  padding: 5px 15px;
  font-size: 2em;
  background: linear-gradient(45deg, rgb(26, 83, 255), rgb(26, 83, 255));
`;
const ProjectOverview = styled.div`
  position: relative;

  &:hover > ${ProjectDetails} {
    display: flex;
    z-index: 3;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.9));
    transition: all 0.1s;
  }
`;

export const SingleProject = ({ project }: { project: any }) => {
  //const context = useContext(Context);
  //const lang = context.getLang();

  return (
    <Figure>
      <ProjectInfo>
        <ProjectName>{project.title}</ProjectName>
        <ProjectLinkActive href={project.github} target='_blanc'>
          Github
        </ProjectLinkActive>
        {project.online ? (
          <ProjectLinkActive href={project.url} target='_blanc'>
            Online
          </ProjectLinkActive>
        ) : (
          <ProjectLinkNotActive>Not online</ProjectLinkNotActive>
        )}
      </ProjectInfo>

      <ProjectOverview>
        <ProjectMainImg
          src={require(`../../img/projects/${project.img}`)}
          alt='project'
        />
        <ProjectDetails>
          <ProjectDescription>
            <span>{project.descriptionEn}</span>
          </ProjectDescription>
          <ProjectTechnologies
            width={project.imgHover.length > 2 ? '70%' : '35%'}
          >
            {project.imgHover.map((el: string) => {
              return (
                <ProjectTechnologiesImgsHover
                  marBottom={el !== 'node.png' ? '0' : '0.7rem'}
                  src={require(`../../img/techs/${el}`)}
                  key={el}
                  alt='project technologies'
                />
              );
            })}
          </ProjectTechnologies>
          {project.development && (
            <ProjectInDevelopment>In development</ProjectInDevelopment>
          )}
        </ProjectDetails>
      </ProjectOverview>
    </Figure>
  );
};

/*
This I'm going to rewrite after I add language selector to the project

line ~ 34 project description languge

{lang === 'en' ? project.descriptionEn : project.descriptionPl}
{lang === 'en' && project.title === 'ResumeGenerator' && (
  <a
    href='https://drive.google.com/file/d/18zFQPB6Xhl6tQjVtKN8mUvSQQdtbFn5U/view?usp=sharing'
    target='_blank'
    rel='noopener noreferrer'
  >
    resume.
  </a>
)}
{lang === 'pl' && project.title === 'ResumeGenerator' && (
  <a
    href='https://drive.google.com/file/d/18zFQPB6Xhl6tQjVtKN8mUvSQQdtbFn5U/view?usp=sharing'
    target='_blank'
    rel='noopener noreferrer'
  >
    CV.
  </a>
)}
*/
