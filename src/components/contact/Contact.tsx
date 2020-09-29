import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Page, Info, HighlitedText } from '../layout/defaultStyles';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <Page>
      <ContactForm />
      <Info>
        <FormattedMessage
          id='Contact.TextOne'
          defaultMessage='You can also contact me directly by sending email to '
        />
        <HighlitedText>wirkus919@gmail.com.</HighlitedText>
        <FormattedMessage
          id='Contact.TextTwo'
          defaultMessage=" I'm open for any form of cooperation."
        />
      </Info>
    </Page>
  );
};
