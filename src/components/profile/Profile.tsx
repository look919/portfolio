import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Page, Info, Text, A, showUp } from '../layout/defaultStyles';
import { Github, LinkedIn, Resume } from '../../img/Svgs';
const Me = require('../../img/tw.png');
const PlLang = require('../../img/pl.png');
const EnLang = require('../../img/en.png');

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40rem;
  margin-top: -2rem;
`;
const DataContainer = styled.div`
  width: calc(100% - 15rem);
  height: 100%;

  display: flex;
  flex-direction: column;
  align: items-center;
`;
const SingleData = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;
const SingleDataName = styled.span`
  width: 8rem;
  font-size: 1.5rem;
  color: #ccc;
  font-weight: 100;
  animation: ${showUp} 1s ease-out 0.5s both;
`;
const SingleDataAnswerFlex = styled.div`
  display: flex;
  align-items: center;
`;
const LangImg = styled.img`
  height: 1.2rem;
  width: 1.2rem;
  margin: 0 3px;
  animation: ${showUp} 1s ease-out 1s both;

  &:last-of-type {
    margin-left: 10px;
  }
`;
const Link = styled.a`
  margin-top: 2px;
  animation: ${showUp} 1s ease-out 1s both;

  svg {
    margin-right: 1rem;

    &:first-of-type {
      margin-left: 3px !important;
      margin-right: calc(1rem - 3px);
    }
  }
`;
const ImageContainer = styled.div`
  width: 15rem;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 40%;
`;

export const Profile = () => {
  return (
    <Page>
      <ProfileContainer>
        <DataContainer>
          <SingleData>
            <SingleDataName>Name:</SingleDataName>
            <Text>Tomasz</Text>
          </SingleData>
          <SingleData>
            <SingleDataName>Surname:</SingleDataName>
            <Text>Wirkus</Text>
          </SingleData>
          <SingleData>
            <SingleDataName>Place of live:</SingleDataName>
            <Text>Koszalin</Text>
          </SingleData>
          <SingleData>
            <SingleDataName>Status:</SingleDataName>
            <Text>Student of computer science</Text>
          </SingleData>
          <SingleData>
            <SingleDataName>Email:</SingleDataName>
            <Text>wirkus919@gmail.com</Text>
          </SingleData>
          <SingleData>
            <SingleDataName>Languages:</SingleDataName>
            <SingleDataAnswerFlex>
              <LangImg src={PlLang} alt='pl lang' /> <Text> - Native,</Text>{' '}
              <LangImg src={EnLang} alt='en lang' />
              <Text> - B2</Text>
            </SingleDataAnswerFlex>
          </SingleData>

          <SingleData>
            <SingleDataName>Links:</SingleDataName>
            <SingleDataAnswerFlex>
              <Link
                href='https://github.com/look919'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github />
              </Link>
              <Link
                href='https://www.linkedin.com/in/tomasz-wirkus-435621196/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedIn />
              </Link>
              <Link
                href='https://drive.google.com/file/d/18zFQPB6Xhl6tQjVtKN8mUvSQQdtbFn5U/view'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Resume />
              </Link>
            </SingleDataAnswerFlex>
          </SingleData>
        </DataContainer>

        <ImageContainer>
          <Image src={Me} alt='Tomasz Wirkus' />
        </ImageContainer>
      </ProfileContainer>
      <Info>
        <FormattedMessage
          id='Skills.Text'
          defaultMessage='Full list of technologies I work with you can find by clicking this '
        />
        <A
          href='https://docs.google.com/document/d/145nEVR515JsB8NB94DYmA4W8NDTNYhAQw9B0DO5Lt74/edit?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FormattedMessage id='Skills.TextLink' defaultMessage='link.' />
        </A>
      </Info>
    </Page>
  );
};
