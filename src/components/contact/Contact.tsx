import React from 'react';
import styled from 'styled-components';
import { Page, Text, HighlitedText } from '../layout/defaultStyles';

export const Contact = () => {
  return (
    <Page>
      <p>test</p>

      <Text>
        You can also contact me directly by sending email to{' '}
        <HighlitedText>wirkus919@gmail.com</HighlitedText>. I'm open for any
        form of cooperation.
      </Text>
    </Page>
  );
};
