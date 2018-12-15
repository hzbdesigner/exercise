import React from 'react';
import {connect} from 'dva';

export const DepthItem = ({item})=> {
  return (
    <div className="p10">
        {item[0]}
        {item[1]}
    </div>
  )
}

export const DepthList = ({depth={}}) => {
  console.log('depth',depth)
  const bids = ( depth.item && depth.item.bids) || []
  const asks = ( depth.item && depth.item.asks) || []
  return (
    <div>
      <div className="p10">Sell Depth</div>
      {
        depth.loading && <div>Loading...</div>
      }
      {
        !depth.loading && bids.map((depth,index)=><DepthItem item={depth} key={index} />)
      }
      <div className="p10">Buy Depth</div>
      {
        depth.loading && <div>Loading...</div>
      }
      {
        !depth.loading && asks.map((depth,index)=><DepthItem item={depth} key={index} />)
      }
    </div>
  );
};

export default connect(({depth})=>({depth}))(DepthList);
