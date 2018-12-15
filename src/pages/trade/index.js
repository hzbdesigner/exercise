import React from 'react';
import {connect} from 'dva';
import DepthListContainer from './depth';
import depthActions from './depth/actions';

const Trade = () => {
  return (
    <div>
    	<div className="p10">Place Order</div>
      <div onClick={depthActions.close}>Close depth stream</div>
      <div onClick={depthActions.reconnect}>Reconnect depth stream</div>
      <DepthListContainer />
    </div>
  );
};
export default Trade;
