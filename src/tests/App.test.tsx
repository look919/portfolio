import React from 'react';
import App from '../components/App';

import { mount } from 'enzyme';

describe('Counter testing', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
});
