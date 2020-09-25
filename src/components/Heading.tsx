import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 7.5em;
  font-weight: 100;
  margin-bottom: 1em;
`;

export const Heading = ({ text }: { text: string }) => {
  return <H1>{text}</H1>;
};
