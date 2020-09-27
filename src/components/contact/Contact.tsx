import React from 'react';

import { Page, Text, HighlitedText } from '../layout/defaultStyles';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <Page>
      <ContactForm />
      <Text>
        You can also contact me directly by sending email to{' '}
        <HighlitedText>wirkus919@gmail.com</HighlitedText>. I'm open for any
        form of cooperation.
      </Text>
    </Page>
  );
};
