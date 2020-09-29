import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Page, Info, Text, A } from '../layout/defaultStyles';
const Me = require('../../img/tw.png');

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: -2rem;
`;
const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align: items-center;
  width: calc(100% - 20rem);
`;
const SingleData = styled.div`
  display: flex;
  align-items: center;
`;
const SingleDataName = styled.span`
  width: 15rem;
  font-size: 1.5rem;
  color: #ccc;
  font-weight: 100;
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
