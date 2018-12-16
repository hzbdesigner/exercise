import {getDepthSocket} from "./apis"

const namespace = 'depth'

export default {
  namespace,
  state: {
    socket:null,
    market:'BTC-USDT',
    level:20,
    item:{},
    loading:true,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({pathname})=> {
        console.log('pathname',pathname)
        if (pathname.indexOf('/trade')>-1) {
          const market = pathname.replace('/trade','').replace('/','')
          console.log('market',market)
          dispatch({type: 'init',payload:{market}});
        }
      })
    },
  },
  effects: {
    *connect({payload},{call,select,put}){
      const {market,level} = yield select(({ depth }) => depth )
      const symbol =  market.replace('-','')
      const url = `wss://stream.binance.cloud:9443/ws/${symbol.toLowerCase()}@depth${level}`
      const socket = yield call(getDepthSocket,url)
      yield put({type:'socketChange',payload:{socket}})
    },
    *close({payload},{call,select,put}){
      const {socket} = yield select(({ depth }) => depth )
      socket.close()
    },
    *reconnect({payload},{call,select,put}){
      yield put({type:'connect'})
    },
    *init({payload},{call,select,put}){
      const {market,level,socket} = yield select(({ depth }) => depth )
      if(payload.market && payload.market !== market){
        if(socket){
          yield put({type:'close'})
          yield put({type:'depthChange',payload:{item:{}}})
        }
        yield put({type:'marketChange',payload})
      }
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
    marketChange(state, action){
      return {
        ...state,
        ...action.payload
      }
    }
  }
};
