import {getMarketList} from "./apis"

export default {
  namespace: 'markets',
  state: {
    items:[],
    loading:false,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === `/market` || location.pathname === `/`) {
          dispatch({type: 'fetch'});
        }
      });
    },
  },
  effects: {
    *fetch({ payload={} }, { call, select, put }) {
      yield put({ type: 'fetchStart',payload});
      const res = yield call(getMarketList, payload);
      console.log('api res',res)
      if (res.data) {
        yield put({
          type: 'fetchSuccess',
          payload: {
            items:[...res.data],
            loading: false,
          },
        });
      }
    },
  },
  reducers: {
    fetchStart(state, action) {
      return {
        ...state,
        loading: true
      }
    },
    fetchSuccess(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

};
