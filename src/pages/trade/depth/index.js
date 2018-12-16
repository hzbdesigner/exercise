import React from 'react';
import {connect} from 'dva';
import routeActions from '@/utils/routeActions';

const getAssets = (market)=>{
  const assets = market.split('-')
  return {
    base:assets[0],
    quote:assets[1],
  }
}
const SellList = ({items=[],loading,assets={}})=>{
  return (
    <table className="w-100 fs12">
      <thead>
        <tr className="fs11">
          <th className="zb-b-b text-left pl10 pt10 pb10 font-weight-normal color-black-3">Amount/{assets.base}</th>
          <th className="zb-b-b text-right pr5 pt10 pb10 font-weight-normal color-black-3">Price/{assets.quote}</th>
        </tr>
      </thead>
      <tbody>
          {
            items.map((item,index)=>
              <tr key={index}>
                <td className="pl10 pr5 pt5 pb5 zb-b-b-bak text-left align-middle">
                  {item[1]}
                </td>
                <td className="pl5 pr5 pt5 pb5 zb-b-b-bak text-right color-red-500 align-middle">
                  {item[0]}
                </td>
              </tr>
            )
          }
          {
            !loading && items.length == 0 &&
              <tr>
                <td colSpan="10" className="p10 text-center align-middle color-black-3 fs12">
                  No Data
                </td>
              </tr>
          }
          {
            loading &&
              <tr>
                <td colSpan="10" className="p10 text-center align-middle color-black-3 fs12">
                  Loading
                </td>
              </tr>
          }
      </tbody>
    </table>
  )
}
const BuyList = ({items=[],loading,assets={}})=>{
  return (
    <table className="w-100 fs12">
      <thead>
        <tr className="fs11">
          <th className="zb-b-b text-left pl5 pt10 pb10 font-weight-normal color-black-3">Price/{assets.quote}</th>
          <th className="zb-b-b text-right pr10 pt10 pb10 font-weight-normal color-black-3">Amount/{assets.base}</th>
        </tr>
      </thead>
      <tbody>
          {
            items.map((item,index)=>
              <tr key={index}>
                <td className="pl10 pr5 pt5 pb5 zb-b-b-bak text-left align-middle color-green-500">
                  {item[0]}
                </td>
                <td className="pl5 pr5 pt5 pb5 zb-b-b-bak text-right align-middle">
                  {item[1]}
                </td>
              </tr>
            )
          }
          {
            !loading && items.length == 0 &&
              <tr>
                <td colSpan="10" className="p10 text-center align-middle color-black-3 fs12">
                  No Data
                </td>
              </tr>
          }
          {
            loading &&
              <tr>
                <td colSpan="10" className="p10 text-center align-middle color-black-3 fs12">
                  Loading
                </td>
              </tr>
          }
      </tbody>
    </table>
  )
}

export const Depth = ({depth={}}) => {
  const { market } = depth
  const bids = ( depth.item && depth.item.bids) || []
  const asks = ( depth.item && depth.item.asks) || []
  const assets = getAssets(depth.market)
  return (
    <div>
      <div className="row no-gutters ml0 mr0 zb-b-b pt10 pb10">
        <div onClick={routeActions.goBack} className="col-auto fs12 cursor-pointer" style={{width:'50px'}}>〈 Back</div>
        <div className="col fs16">{market}</div>
        <div className="col-auto"  style={{width:'5rem'}}></div>
      </div>
      <div className="row no-gutters ml0 mr0 zb-b-b">
        <div className="col-6">
          <SellList items={asks} loading={depth.loading} assets={assets} />
        </div>
        <div className="col-6">
          <BuyList items={bids} loading={depth.loading} assets={assets} />
        </div>
      </div>
    </div>
  );
};

export default connect(({depth})=>({depth}))(Depth);
