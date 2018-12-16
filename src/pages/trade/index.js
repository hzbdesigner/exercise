import React from 'react';
import {connect} from 'dva';
import DepthContainer from './depth';
import depthActions from './depth/actions';
import routeActions from '@/utils/routeActions';

export const TradeActions = ({close,reconnect})=>{
	return (
		<div className="row ml0 mr0 no-gutters" style={{position:'absolute',left:0,bottom:0,right:0}}>
			<div onClick={close} className="col-6 closeBtn bg-red-500 fs16 cursor-pointer color-white center-center p15">
				Close Socket
			</div>
			<div onClick={reconnect} className="col-6 reconnectBtn bg-green-500 fs16 cursor-pointer color-white center-center p15">
				Reconnect Socket
			</div>
		</div>
	)
}

export default () => {
  return (
    <div className="bg-white h-100 position-relative" style={{overflow:'auto'}}>
    	<div className="row no-gutters ml0 mr0 zb-b-b pt10 pb10">
    		<div onClick={routeActions.goBack} className="col-auto fs12 cursor-pointer" style={{width:'50px'}}>〈 Back</div>
    		<div className="col fs16">Trade</div>
    		<div className="col-auto"  style={{width:'5rem'}}></div>
    	</div>
      <DepthContainer />
      <TradeActions close={depthActions.close} reconnect={depthActions.reconnect} />
    </div>
  );
}

