import Cache from '@/utils/cache'
const cache = new Cache('tag');
// 储存tag标签组
export default {
  namespaced: true,
  state: {
    // 当前打开的标签数组
    tags: [],
  },
  mutations: {
    INIT_STATE (state, tags) {
      state.tags = tags;
    },
    // 设置
    SET (state, tag) {
      state.tags.push(tag);
      cache.set('tag', state.tags);
    },
  },
  actions: {
    // 设置数组
    set ({ commit }, tag) {
      commit('SET', tag);
    },
    init ({ commit }) {
      const tags = cache.get('tag');
      if (tags) { commit('INIT_STATE', tags) }
    }
  },
}
