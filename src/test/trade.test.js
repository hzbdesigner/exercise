import React from 'react';
import { shallow } from 'enzyme';
import {TradeActions} from '@/pages/trade/index.js';
import depthActions from '@/pages/trade/depth/actions';

it('click close button should call close function', () => {
	const close = jest.fn()
  const comp = shallow(<TradeActions close={close} /> );
  comp.find('.closeBtn').simulate('click')
  expect(close).toBeCalled();
});

it('click reconnect button should call reconnect function', () => {
	const reconnect = jest.fn()
  const comp = shallow(<TradeActions reconnect={reconnect} /> );
  comp.find('.reconnectBtn').simulate('click')
  expect(reconnect).toBeCalled();
});

