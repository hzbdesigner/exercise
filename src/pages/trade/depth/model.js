import {getDepthSocket} from "./apis"

const namespace = 'depth'

export default {
  namespace,
  state: {
    socket:null,
    symbol:'BTCUSDT',
    level:20,
    item:{},
    items:[],
    loading:true,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({pathname})=> {
        console.log('pathname',pathname)
        if (pathname.indexOf('/trade')>-1) {
          const symbol = pathname.replace('/trade','').replace('/','')
          console.log('symbol',symbol)
          dispatch({type: 'init',payload:{symbol}});
        }
      })
    },
  },
  effects: {
    *connect({payload},{call,select,put}){
      const {symbol,level} = yield select(({ depth }) => depth )
      const url = `wss://stream.binance.cloud:9443/ws/${symbol.toLowerCase()}@depth${level}`
      const socket = yield call(getDepthSocket,url)
      yield put({type:'socketChange',payload:{socket}})
    },
    *close({payload},{call,select,put}){
      const {socket} = yield select(({ depth }) => depth )
      socket.close()
    },
    *init({payload},{call,select,put}){
      if(payload.symbol){
        yield put({type:'symbolChange',payload})
      }
      yield put({type:'connect'})
    },
    *reconnect({payload},{call,select,put}){
      yield put({type:'connect'})
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
    symbolChange(state, action){
      return {
        ...state,
        ...action.payload
      }
    }
  }
};
