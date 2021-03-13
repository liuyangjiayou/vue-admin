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
    // 初始化state
    INIT_STATE (state, tags) {
      state.tags = tags;
    },
    // 设置并添加缓存
    SET (state, tag) {
      state.tags.push(tag);
      cache.set('tag', state.tags);
    },
    // 删除并添加缓存
    REMOVE (state, tag) {
      state.tags = state.tags.filter(item => item.fullPath !== tag.fullPath);
      cache.set('tag', state.tags);
    }
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
