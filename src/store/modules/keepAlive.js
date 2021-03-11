// 用来储存keepAlive
export default {
  namespaced: true,
  state: {
    keepAliveArray: [],
  },
  mutations: {
    SET_KEEP_ALIVE_ARRAY (state, val) {
      state.keepAliveArray.push(val);
    },
  },
  actions: {
    // 添加keepAlive对应的name
    setKeepAliveArray ({ commit }, data) {
      commit('SET_KEEP_ALIVE_ARRAY', data)
    },
    // 
  }
}