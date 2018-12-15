
export const reconnect = ()=>{
  window.g_app._store.dispatch({
    type:'depth/reconnect'
  })
}
export const close = ()=>{
  console.log('close action')
  window.g_app._store.dispatch({
    type:'depth/close'
  })
}
export const depthChange = (payload)=>{
  window.g_app._store.dispatch({
    type:'depth/itemChange',
    payload,
  })
}

export default {
  reconnect,
  close,
  depthChange,
}
