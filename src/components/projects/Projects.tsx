import React from 'react';
import styled from 'styled-components';
import { Page, Info, A } from '../layout/defaultStyles';
import { FormattedMessage } from 'react-intl';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { v4 as uuidv4 } from 'uuid';
import { device } from '../layout/defaultStyles';

import { SingleProject } from './SingleProject';
import projects from './projects.json';

const CarouselContainer = styled.div`
  width: 40rem;
  transition: all 0.3s;

  @media ${device.laptopL} {
    width: 34rem;
  }
  @media ${device.mobileLandscape} {
    width: 90%;
  }
  @media ${device.mobileL} {
    width: 95%;
  }
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

      <Info>
        <FormattedMessage
          id='Projects.Text'
          defaultMessage='All the projects in the portfolio I created 100% by myself. '
        />
        <A
          href='https://github.com/look919'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FormattedMessage
            id='Projects.TextLink'
            defaultMessage='Take a look how i write my code.'
          />
        </A>
      </Info>
    </Page>
  );
};
