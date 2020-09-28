import React from 'react';
import Wrapper from './components/languages/Wrapper';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';

ReactDOM.render(
  <React.Fragment>
    <Wrapper>
      <App />
    </Wrapper>
  </React.Fragment>,
  document.getElementById('root')
);
