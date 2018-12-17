import React from 'react';
import {connect} from 'dva';
import DepthContainer from './depth';
import depthActions from './depth/actions';

export const TradeActions = ({close,reconnect})=>{
	return (
		<div style={{position:'fixed',left:'auto',bottom:0,right:'auto',maxWidth:'480px',width:'100%'}}>
			<div className="row ml0 mr0 no-gutters" >
				<div onClick={close} className="col-6 closeBtn bg-red-500 fs16 cursor-pointer color-white center-center p15">
					Close Socket
				</div>
				<div onClick={reconnect} className="col-6 reconnectBtn bg-green-500 fs16 cursor-pointer color-white center-center p15">
					Reconnect Socket
				</div>
			</div>
		</div>
	)
}

export default () => {
  return (
    <div className="bg-white position-relative" style={{height:'100vh',overflow:'auto'}}>
      <DepthContainer />
      <TradeActions close={depthActions.close} reconnect={depthActions.reconnect} />
    </div>
  );
}

