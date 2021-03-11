import vue from 'vue';
import Vuex from 'vuex';
vue.use(Vuex);
import getters from './getters'
// 配置项
import config from './modules/config'
// 路由数据
import router from './modules/router'
// keepAlive
import keepAlive from './modules/keepAlive'
// tag
import tag from './modules/tag'
let store = new Vuex.Store({
  strict: true,
  modules: {
    config,
    router,
    keepAlive,
    tag,
  },
  getters,
});
export default store
