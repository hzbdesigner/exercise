import React from 'react';
import {connect} from 'dva';
import routeActions from '@/utils/routeActions';

const MarketItem = ({item})=> {
	return (
		<div onClick={()=>routeActions.gotoPath(`/trade/${item.symbol}`)} className="p10">
				{item.symbol}
		</div>
	)
}
const MarketList = ({markets={}}) => {
  return (
    <div>
    	<div className="p10">Markets</div>
      {
      	markets.items.map((market,index)=><MarketItem item={market} key={market.symbol} />)
      }
    </div>
  );
};

export default connect(({markets})=>({markets}))(MarketList);
