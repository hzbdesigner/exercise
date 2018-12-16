import React from 'react';
import {connect} from 'dva';
import routeActions from '@/utils/routeActions';
import {NavBar} from 'antd-mobile';

const MarketItem = ({item})=> {
	return (
		<div onClick={()=>routeActions.gotoPath(`/trade/${item.symbol}`)} className="row zb-b-b p10 ml0 mr0 no-gutters cursor-pointer">
			<div className="col-auto">{item.baseAsset}/{item.quoteAsset}</div>
			<div className="col">
			</div>
		</div>
	)
}
const MarketList = ({markets={}}) => {
  return (
    <div className="bg-white h-100">
    	<NavBar theme="dark">Markets</NavBar>
      {
      	markets.items.map((market,index)=><MarketItem item={market} key={market.symbol} />)
      }
    </div>
  );
};

export default connect(({markets})=>({markets}))(MarketList);
