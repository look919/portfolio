import React, { useState } from 'react';
import validator from 'validator';

import styled from 'styled-components';
import {
  Form,
  InputContainer,
  Placeholder,
  Input,
  TextArea,
  Button,
} from '../layout/defaultStyles';

const BottomContainer = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Status = styled.span`
  font-size: 1.2rem;
  color: #ccc;
  font-weight: 100;

  padding: 0 0.5rem;
  margin-right: 3rem;
`;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    status: '',
  });

  const clearStatus = () => {
    setTimeout(() => {
      setFormData({
        ...formData,
        status: '',
      });
    }, 2500);
  };

  const submitForm = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const { email, subject, message } = formData;

    const form = e.currentTarget;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
      }
    };
    if (validator.isEmail(email) && subject && message.length > 7) {
      xhr.send(data);

      setFormData({
        ...formData,
        status: 'SUCCESS',
        email: '',
        message: '',
      });

      clearStatus();
    } else if (message.length <= 7 || !message.includes(' ')) {
      setFormData({
        ...formData,
        status: 'SHORT_MESSAGE',
      });

      setTimeout(() => {
        setFormData({
          ...formData,
          status: '',
        });
      }, 2500);
    } else if (!subject) {
      setFormData({
        ...formData,
        status: 'NO_SUBJECT',
      });

      clearStatus();
    } else {
      setFormData({
        ...formData,
        status: 'ERROR',
      });

      clearStatus();
    }
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const buttonDisabled: boolean =
    !formData.message || !formData.email || !!formData.status;
  console.log(!formData.message, !formData.email, !!formData.status);
  console.log(buttonDisabled);

  return (
    <Form
      onSubmit={submitForm}
      action='https://formspree.io/xkdayzkm'
      method='POST'
      className='contact-page'
    >
      <InputContainer>
        <Placeholder>Email: </Placeholder>
        <Input
          type='email'
          value={formData.email}
          name='email'
          onChange={onChange}
        />
      </InputContainer>
      <InputContainer>
        <Placeholder>Subject: </Placeholder>
        <Input value={formData.subject} name='subject' onChange={onChange} />
      </InputContainer>
      <TextArea name='message' value={formData.message} onChange={onChange} />

      <BottomContainer>
        {formData.status === 'ERROR' ? (
          <Status>An Error, please make sure u provided valid email.</Status>
        ) : formData.status === 'SHORT_MESSAGE' ? (
          <Status>I asked you to leave me a message, not a test spam.</Status>
        ) : formData.status === 'NO_SUBJECT' ? (
          <Status>Please provide a subject!</Status>
        ) : formData.status === 'SUCCESS' ? (
          <Status>Thanks!</Status>
        ) : (
          <Status>&nbsp;</Status>
        )}

        <Button disabled={buttonDisabled}>Submit</Button>
      </BottomContainer>
    </Form>
  );
};

// INPUT WITH REACT_INTL
//   {(msg) => (
//     <input
//       type='email'
//       placeholder={msg}
//       className={
//         !isMobile && !isMobileLandscape
//           ? 'contact-page__email contact-page__email--user'
//           : 'contact-page__email contact-page__email--user contact-page__email--mobile'
//       }
//       value={formData.email}
//       name='email'
//       onChange={(e) => onChange(e)}
//     />
//   )}
