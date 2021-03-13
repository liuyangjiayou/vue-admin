// 用来储存keepAlive
import Cache from '@/utils/cache'
const cache = new Cache('keepAlive');
export default {
  namespaced: true,
  state: {
    keepAliveArray: [],
  },
  mutations: {
    // 设置初始化keepAlive初始数据
    INIT_KEEP_ALIVE (state, arr) {
      state.keepAliveArray = arr
    },
    // 设置keep-alive数组
    SET_KEEP_ALIVE_ARRAY (state, val) {
      state.keepAliveArray.push(val);
      cache.set('keepAlive', state.keepAliveArray);
    },
  },
  actions: {
    // 添加keepAlive对应的name
    setKeepAliveArray ({ commit }, val) {
      commit('SET_KEEP_ALIVE_ARRAY', val)
    },
    // 初始化缓存的keep-alive数组
    init ({ commit }) {
      const keepAlive = cache.get('keepAlive');
      if (keepAlive) { commit('INIT_STATE', keepAlive) }
    }
  }
}