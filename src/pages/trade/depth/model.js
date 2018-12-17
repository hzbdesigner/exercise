import {getDepthSocket} from "./apis"

const namespace = 'depth'

export default {
  namespace,
  state: {
    socket:null,
    market:null,
    data:{
      bids:[],
      asks:[],
    },
    loading:true,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({pathname})=> {
        console.log('pathname',pathname)
        if (pathname.indexOf('/trade')>-1) {
          const market = pathname.replace('/trade','').replace('/','') || 'BTC-USDT' // set default market 
          dispatch({type: 'init',payload:{market}});
        }
      })
    },
  },
  effects: {
    *connect({payload},{call,select,put}){
      const {market} = yield select(({ depth }) => depth )
      const socket = yield call(getDepthSocket,{market})
      yield put({type:'socketChange',payload:{socket}}) 
    },
    *close({payload},{call,select,put}){
      const {socket} = yield select(({ depth }) => depth )
      if(socket){
        socket.close()
        yield put({type:'socketChange',payload:{socket:null}})
      }else{
        console.log('Connection to be closed ,but socket null ')
      }
    },
    *reconnect({payload},{call,select,put}){
      const {socket} = yield select(({ depth }) => depth )
      if(!socket){
        yield put({type:'connect'})
      }else{
        console.log('Connection was opened , dont need reconnect')
      }
    },
    *init({payload},{call,select,put}){
      const {socket,market} = yield select(({ depth }) => depth )
      if(socket){
        if(payload.market !== market ){
          yield put({type:'marketChange',payload})  
          yield put({type:'close'})
          yield put({type:'reset'})
          yield put({type:'connect'})
        }
      }else{
        yield put({type:'marketChange',payload})  
        yield put({type:'connect'})
      }
    },
    *onConnect({payload},{call,select,put}){
      const {market} = yield select(({ depth }) => depth )
      if(market !== payload.market){
        console.log('Connection closed pre',payload.market)
        payload.socket.close() // fix bug: multiple depth sockets active 
      }
    },
  },
  reducers: {
    socketChange(state, action){
      return {
        ...state,
        ...action.payload
      }
    },
    depthChange(state, action){
      return {
        ...state,
        ...action.payload
      }
    },
    marketChange(state, action){
      return {
        ...state,
        ...action.payload
      }
    },
    reset(state, action){
      return {
        ...state,
        data:{
          bids:[],
          asks:[],
        },
        loading:true,
      }
    },
  }
};
