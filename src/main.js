import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/common.scss'
import './assets/iconfont/iconfont.css'
import Fragment from 'vue-fragment'

Vue.use(Fragment.Plugin)
Vue.use(ElementUI,{ size: 'medium'});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
