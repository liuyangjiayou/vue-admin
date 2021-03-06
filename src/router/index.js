import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import store from '@/store/store'

// import { notRouter, errRouter, asyncRouter } from './router'
import { notRouter, asyncRouter2,  errRouter } from './router'
Vue.use(VueRouter)
// 去除路由的数据
const routerData = store.getters.routerData;
// 将数据变为menu菜单
store.dispatch('router/setMenuData', routerData)
// 创建router组件
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: notRouter,
});
// 定义 一个路由数组 用来存放处理之后的新路由
let routes = [];
resetRouter(routerData, asyncRouter2, routes)
// 处理录用将路由数据与路由 变为vue可识别的路由格式
function resetRouter (routerData, routerConfig, routes) {
  routerData.forEach(item => {
    // 直接拿我的路由表
    if (routerConfig[item.name]) {
      routerConfig[item.name].name = item.name;
      if (item.meta) {
        routerConfig[item.name].meta = { ...routerConfig[item.name].meta, ...item.meta };
      }
      routes.push(routerConfig[item.name]);
    }
    // 如果有childs递归
    if (item.childs && item.childs.length) {
      resetRouter(item.childs, routerConfig, routes)
    }
  });
}
// 使用add方式将路由添加到配置项里面
router.addRoutes([
  ...routes,
  ...errRouter,
]);
// 导出路由
export default router
