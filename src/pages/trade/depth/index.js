import React from 'react';
import {connect} from 'dva';

const DepthItem = ({item=[]})=> {
  return (
    <div className="p10">
        {item[0]}
        {item[1]}
    </div>
  )
}

const SellList = ({items=[]})=>{
  return (
    <div>
      <div className="p10">Buy Depth</div>
      {
        items.map((item,index)=> <DepthItem item={item} key={index} />)
      }
    </div>
  )
}
const BuyList = ({items=[]})=>{
  return (
    <div>
      <div className="p10">Buy Depth</div>
      {
        items.map((item,index)=> <DepthItem item={item} key={index} />)
      }
    </div>
  )
}

export const Depth = ({depth={}}) => {
  console.log('depth',depth)
  const bids = ( depth.item && depth.item.bids) || []
  const asks = ( depth.item && depth.item.asks) || []
  return (
    <div>
      {
        depth.loading && <div>Loading...</div>
      }
      <SellList items={bids} />
      <BuyList items={asks} />
    </div>
  );
};

export default connect(({depth})=>({depth}))(Depth);
