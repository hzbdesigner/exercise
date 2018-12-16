import React from 'react';
import { shallow } from 'enzyme';
import { DepthList } from '@/pages/trade/depth/index.js';

it('click close button should call close function', () => {
	const close = jest.fn()
  const comp = shallow(<DepthList close={close} /> );
  comp.find('.closeBtn').simulate('click')
  expect(close).toBeCalled();
});

it('click reconnect button should call reconnect function', () => {
	const reconnect = jest.fn()
  const comp = shallow(<DepthList reconnect={reconnect} /> );
  comp.find('.reconnectBtn').simulate('click')
  expect(reconnect).toBeCalled();
});

