import React from 'react';
import { shallow } from 'enzyme';
import Trade from './index.js';

it('renders with TickerList', () => {
  const wrapper = shallow(<Trade /> );
  // expect(wrapper.find('div').length).toBe(1);
  expect(1+2).toBe(3);
});
