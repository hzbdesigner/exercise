
export const reconnect = ()=>{
  const dispatch = window.g_app && window.g_app._store && window.g_app._store.dispatch
  if(dispatch){
    dispatch({
      type:'depth/reconnect'
    })
  }
}
export const close = ()=>{
  const dispatch = window.g_app && window.g_app._store && window.g_app._store.dispatch
  if(dispatch){
    dispatch({
      type:'depth/close'
    })
  }
}
export const depthChange = (payload)=>{
  const dispatch = window.g_app && window.g_app._store && window.g_app._store.dispatch
  if(dispatch){
    dispatch({
      type:'depth/depthChange',
      payload,
    })
  }
}
export const onConnect = (payload)=>{
  const dispatch = window.g_app && window.g_app._store && window.g_app._store.dispatch
  if(dispatch){
    dispatch({
      type:'depth/onConnect',
      payload,
    })
  }
}

export default {
  reconnect,
  close,
  depthChange,
}
