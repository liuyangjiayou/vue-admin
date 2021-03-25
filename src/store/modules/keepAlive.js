// 用来储存keepAlive
import Cache from '@/utils/cache'
const cache = new Cache('keepAlive');
export default {
  namespaced: true,
  state: {
    // keep-alive 白名单
    keepAliveArray: [],
    // keep-alive 储存路由对象数组
    keepAliveOption: [],
  },
  mutations: {
    // 设置初始化keepAlive初始数据
    INIT_KEEP_ALIVE (state, arr) {
      state.keepAliveArray = arr
    },
    // 设置keep-alive数组
    SET_KEEP_ALIVE_ARRAY (state, val) {
      state.keepAliveOption.push(val);
      state.keepAliveArray = state.keepAliveOption.map(item => item.name);
      cache.set('keepAlive', state.keepAliveArray);
    },
    // 删除keep-alive数组
    REMOVE_KEEP_ALIVE_ARRAY (state, val) {
      state.keepAliveOption = state.keepAliveOption.filter(item => item.fullPath === val.fullPath)
      state.keepAliveArray = state.keepAliveOption.map(item => item.name);
      cache.set('keepAlive', state.keepAliveArray);
    }
  },
  actions: {
    // 添加keepAlive对应的name
    setKeepAliveArray ({ commit, state }, val) {
      let { keepAliveOption } = state
      let router = keepAliveOption.find(item => item.fullPath === val.fullPath);
      if (router) return;
      commit('SET_KEEP_ALIVE_ARRAY', val);
    },
    remove({ commit }, val) {
      commit('REMOVE_KEEP_ALIVE_ARRAY', val);
    },
    // 初始化缓存的keep-alive数组
    init ({ commit }) {
      const keepAlive = cache.get('keepAlive');
      if (keepAlive) { commit('INIT_KEEP_ALIVE', keepAlive) }
    }
  }
}
