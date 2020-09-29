import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubIcon, ProjectOnlineIcon } from '../../img/Svgs';
import { Context } from '../languages/Wrapper';

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
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`;
const ProjectName = styled.h3`
  font-size: 2rem;
  text-align: left;
  flex: 1 0 0;
`;

const ProjectGithub = styled.a`
  &:link,
  &:visited {
    font-size: 1.4rem;

    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }

  svg {
    height: 1.8rem;
    width: 1.8rem;
    fill: #dfc4ea !important;
    transition: all 0.4s;
    margin-right: 0.7rem;
    margin-bottom: -5px;
  }

  &:hover {
    svg {
      fill: #fff !important;
      transform: translateY(-1px);
    }
  }
`;
const ProjectLinkActive = styled.a`
  &:link,
  &:visited {
    font-size: 1.6rem;

    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }

  svg {
    height: 2rem;
    width: 2rem;
    fill: #dfc4ea;
    margin-bottom: -5px;

    transition: all 0.4s;
  }

  &:hover {
    svg {
      fill: #fff !important;
      transform: translateY(-1px) !important;
    }
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

  font-size: 1.6rem;
  color: #dfc4ea;
  border-bottom: 1px solid #ccc;

  p {
    padding: 0 1rem;
  }
`;
const ProjectDescriptionLink = styled.a`
  &:link,
  &:visited {
    font-size: 1.6rem;
    color: #fff;
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
  font-size: 1.4rem;
  background: linear-gradient(265deg, rgb(26, 83, 255), rgb(26, 83, 255));
`;
const ProjectOverview = styled.div`
  position: relative;

  &:hover > ${ProjectDetails} {
    display: flex;
    z-index: 3;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9));
    transition: all 0.1s;
  }
`;

export const SingleProject = ({ project }: { project: any }) => {
  const context = useContext(Context);

  if (!context) return null;
  const lang = context.getLang();

  return (
    <Figure>
      <ProjectInfo>
        <ProjectName>{project.title}</ProjectName>
        <ProjectGithub href={project.github} target='_blanc'>
          <GithubIcon className='project-icon' />
        </ProjectGithub>
        {project.online && (
          <ProjectLinkActive
            href={project.online ? project.url : '#'}
            target='_blanc'
          >
            <ProjectOnlineIcon className='project-icon' />
          </ProjectLinkActive>
        )}
      </ProjectInfo>

      <ProjectOverview>
        <ProjectMainImg
          src={require(`../../img/projects/${project.img}`)}
          alt='project'
        />
        <ProjectDetails>
          <ProjectDescription>
            <p>
              {lang === 'en' ? project.descriptionEn : project.descriptionPl}

              {lang === 'en' && project.title === 'ResumeGenerator' && (
                <ProjectDescriptionLink
                  href='https://drive.google.com/file/d/18zFQPB6Xhl6tQjVtKN8mUvSQQdtbFn5U/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  resume.
                </ProjectDescriptionLink>
              )}
              {lang === 'pl' && project.title === 'ResumeGenerator' && (
                <ProjectDescriptionLink
                  href='https://drive.google.com/file/d/18zFQPB6Xhl6tQjVtKN8mUvSQQdtbFn5U/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CV.
                </ProjectDescriptionLink>
              )}
            </p>
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
