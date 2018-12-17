import request from '@/utils/request';
import {depthChange,onConnect} from './actions';

export const getDepthSocket = ({market})=>{
  const symbol =  market.replace('-','')
  const url = `wss://stream.binance.cloud:9443/ws/${symbol.toLowerCase()}@depth20`
  const socket = new WebSocket(url);
  socket.onclose = function(evt) {
    console.log("Connection closed: ",market);
  };
  socket.onerror = function(evt) {
    console.log("Connection error: ",market);
  };
  socket.onmessage = function(evt) {
  	const data = evt.data && JSON.parse(evt.data)
    depthChange({
      data,loading:false,
    })
  };
  return new Promise((resolve,reject)=>{
  	socket.onopen = function(evt) { 
      console.log("Connection opened: ",market);
  	  onConnect({market,socket})
  	  resolve(socket)
  	};
  })
}
