import React from 'react';
import {connect} from 'dva';
import DepthContainer from './depth';
import depthActions from './depth/actions';
import routeActions from '@/utils/routeActions';
import {Button} from 'antd-mobile';

export const TradeActions = ({close,reconnect})=>{
	return (
		<div className="row ml0 mr0 zb-b-t bg-white no-gutters" style={{position:'absolute',left:0,bottom:0,right:0}}>
			<div className="col-6">
				<Button onClick={close} type="primary" size="" className="closeBtn m10">Close Socket</Button>
			</div>
			<div className="col-6">
				<Button onClick={reconnect} type="primary" size="" className="reconnectBtn m10" >Reconnect Socket</Button>
			</div>
		</div>
	)
}

export default () => {
  return (
    <div className="bg-white h-100 position-relative" style={{overflow:'auto'}}>
    	<div className="row no-gutters ml0 mr0 zb-b-b pt10 pb10">
    		<div onClick={routeActions.goBack} className="col-auto fs12 cursor-pointer" style={{width:'50px'}}>〈 返回</div>
    		<div className="col fs16">Trade</div>
    		<div className="col-auto"  style={{width:'5rem'}}></div>
    	</div>
      <DepthContainer />
      <TradeActions close={depthActions.close} reconnect={depthActions.reconnect} />
    </div>
  );
}

