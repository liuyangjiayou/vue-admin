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
    set ({ commit, state}, tag) {
      // 当前如果tag数组里面有这个一项那么我们就不需要添加了
      const diffTag = state.tags.filter(item => item.fullPath === tag.fullPath);
      if (diffTag.length) return;
      commit('SET', tag);
    },
    // 删除数组
    remove ({ dispatch, commit}, tag) {
      dispatch('keepAlive/remove', tag, { root: true });
      commit('REMOVE', tag);
    },
    init ({ commit }) {
      const tags = cache.get('tag');
      if (tags) { commit('INIT_STATE', tags) }
    }
  },
}
