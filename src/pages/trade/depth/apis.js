import request from '@/utils/request';
import {depthChange} from './actions';

export const getDepthSocket = (url)=>{
  const socket = new WebSocket(url);
  socket.onclose = function(evt) {
    console.log("Connection closed.");
  };
  socket.onerror = function(evt) {
    console.log("Connection error.");
  };
  socket.onmessage = function(evt) {
  	const data = evt.data && JSON.parse(evt.data)
    depthChange({
      item:data,loading:false,
    })
  };
  return new Promise((resolve,reject)=>{
  	socket.onopen = function(evt) { 
  	  console.log("Connection open ..."); 
  	  resolve(socket)
  	};
  })
}
