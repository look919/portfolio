import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import Wrapper from './components/languages/Wrapper';
import './index.css';
import { App } from './components/App';

ReactDOM.render(
  <HttpsRedirect>
    <Wrapper>
      <App />
    </Wrapper>
  </HttpsRedirect>,
  document.getElementById('root')
);
