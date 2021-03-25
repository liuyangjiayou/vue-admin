import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import store from '@/store/store'

// import { notRouter, errRouter, asyncRouter } from './router'
import { notRouter, asyncRouter2,  errRouter } from './router'
console.log(notRouter);
Vue.use(VueRouter)
// 取出路由的数据
const routerData = store.getters.routerData;
// 将数据变为menu菜单
store.dispatch('router/setMenuData', routerData)
// 创建router组件
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [],
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
console.log(routes);
// 使用add方式将路由添加到配置项里面
router.addRoutes([
  {
    path: '/',
    redirect: '/compile',
    component: () => import('@/components/layout/index.vue'),
    children: [...routes]
  },
  ...errRouter,
]);
// 全局解析守卫
router.beforeResolve((to, from, next) => {
  let { meta, name, fullPath } = to;
  store.dispatch('keepAlive/setKeepAliveArray', to);
  store.dispatch('tag/set', { meta, name, fullPath });
  next();
});
// 导出路由
export default router;
