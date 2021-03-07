export default {
  namespaced: true,
  state: {
    keepAliveArray: [],
    tabs: [],
  },
  mutations: {
    SET_KEEP_ALIVE_ARRAY (state, val) {
      state.keepAliveArray.push(val);
    },
    SET_TAGS (state, obj) {
      let cur = state.tabs.find(item => item.name === obj.name);
      if (!cur) {state.tabs.push(obj)}
    },
  },
  actions: {
    // 添加keepAlive对应的name
    setKeepAliveArray ({ commit }, data) {
      commit('SET_KEEP_ALIVE_ARRAY', data)
    },
    // 设置标签
    setTags ({ commit }, data) {
      commit('SET_TAGS', data)
    }
  }
}