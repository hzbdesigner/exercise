import {getDepthSocket} from "./apis"

const namespace = 'depth'

export default {
  namespace,
  state: {
    socket:null,
    item:{},
    items:[],
    loading:true,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === `/trade`) {
          dispatch({type: 'init'});
        }
      });
    },
  },
  effects: {
    *connect({payload},{call,select,put}){
      const socket = yield call(getDepthSocket)
      yield put({type:'socketChange',payload:{socket}})
    },
    *close({payload},{call,select,put}){
      const {socket} = yield select(({ [namespace]:model }) => model )
      socket.close()
    },
    *init({payload},{call,select,put}){
      yield put({type:'connect',payload})
    },
    *reconnect({payload},{call,select,put}){
      yield put({type:'connect',payload})
    },
  },
  reducers: {
    socketChange(state, action){
      return {
        ...state,
        ...action.payload
      }
    },
    itemChange(state, action){
      return {
        ...state,
        ...action.payload
      }
    }
  }
};
