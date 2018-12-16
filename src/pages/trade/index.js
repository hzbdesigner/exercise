import React from 'react';
import {connect} from 'dva';
import DepthContainer from './depth';
import depthActions from './depth/actions';
import {NavBar,Button} from 'antd-mobile';

export const TradeActions = ({close,reconnect})=>{
	return (
		<div>
			<Button onClick={close} type="primary" className="closeBtn m10">Close Socket</Button>
			<Button onClick={reconnect} type="primary" className="reconnectBtn m10" >Reconnect Socket</Button>
		</div>
	)
}

export default () => {
  return (
    <div className="bg-white h-100">
    	<NavBar theme="dark">Trade</NavBar>
      <DepthContainer />
      <TradeActions close={depthActions.close} reconnect={depthActions.reconnect} />
    </div>
  );
}

