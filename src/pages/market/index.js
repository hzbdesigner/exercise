import React from 'react';
import {connect} from 'dva';
import routeActions from '@/utils/routeActions';
import mockMarkets from './mock'; // mock markets which have depth data for test

const MarketItem = ({item})=> {
	return (
		<div onClick={()=>routeActions.gotoPath(`/trade/${item.baseAsset}-${item.quoteAsset}`)} className="row zb-b-b p15 ml0 mr0 no-gutters align-items-center cursor-pointer">
			<div className="col text-left">
				<div className="fs14">{item.baseAsset}-{item.quoteAsset}</div>
			</div>
			<div className="col-auto">
				<div className="fs12 color-black-3"> Trade 〉 </div>
			</div>
		</div>
	)
}
const MarketList = ({markets={}}) => {
  return (
    <div className="bg-white h-100">
    	<div className="p10 text-center fs16 zb-b-b">Markets</div>
      {
      	!markets.loading && [...mockMarkets,...markets.items].map((market,index)=><MarketItem item={market} key={market.symbol} />)
      }
      {
      	markets.loading && <div className="fs12 text-center p15">Loading</div>
      }
    </div>
  );
};

export default connect(({markets})=>({markets}))(MarketList);
