import vue from 'vue';
import Vuex from 'vuex';
vue.use(Vuex);
import getters from './getters'
// 配置项
import config from './modules/config'
// 路由数据
import router from './modules/router'
let store = new Vuex.Store({
  strict: true,
  modules: {
    config,
    router,
  },
  getters,
});
export default store
