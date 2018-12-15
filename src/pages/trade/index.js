import React from 'react';
import {connect} from 'dva';
import DepthListContainer from './depth';
import depthActions from './depth/actions';

export const TradeActions = ({close,reconnect})=>{
	return (
		<div>
			<div className="closeBtn" onClick={close}>Close depth stream</div>
			<div className="reconnectBtn" onClick={reconnect}>Reconnect depth stream</div>
		</div>
	)
}

export default () => {
  return (
    <div>
    	<div className="p10">Place Order</div>
    	<TradeActions close={depthActions.close} reconnect={depthActions.reconnect} />
      <DepthListContainer />
    </div>
  );
}

