import Compile from '../views/vue/compile.vue'
// 不需要权限的路由
export const notRouter = [
    {
        path: '/',
        redirect: '/compile'
    },
]
// 404路由
export const errRouter = [{
    path: '*',
    name: '404',
    component: () => import('@/views/error/404.vue')
}]
// 动态路由
export const asyncRouter = [
    {
        path: '/compile',
        name: 'Compile',
        component: Compile,
    },
    {
        path: '/page1',
        name: 'Page1',
        component: () => import(/* webpackChunkName: "page1" */ '../views/page1.vue'),
    },
    {
      path: '/page1_1',
      name: 'Page1_1',
      component: () => import(/* webpackChunkName: "page1" */ '../views/page1/page1_1.vue'),
    },
    {
        path: '/page2',
        name: 'Page2',
        component: () => import(/* webpackChunkName: "page2" */ '../views/page2.vue'),
    },
    {
        path: '/page3',
        name: 'Page3',
        component: () => import(/* webpackChunkName: "page3" */ '../views/page3.vue'),
    },
    {
        path: '/page4',
        name: 'Page4',
        component: () => import(/* webpackChunkName: "page4" */ '../views/page4.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]
// 动态路由配置项
export const asyncRouter2 = {
    Compile: {
      path: '/compile',
      component: () => import(/* webpackChunkName: "compile" */ '../views/vue/compile.vue')
    },
    Observer: {
      path: '/observer/:id',
      component: () => import(/* webpackChunkName: "compile" */ '../views/vue/observer.vue') 
    },
    Page1: {
      path: '/page1',
      component:  () => import(/* webpackChunkName: "page1" */ '../views/page1.vue')
    },
    Page1_1: {
      path: '/page1_1',
      component: () => import(/* webpackChunkName: "page1" */ '../views/page1/page1_1.vue'),
    },
    Page2: {
        path: '/page2',
        component:  () => import(/* webpackChunkName: "Page2" */ '../views/page2.vue')
    },
    Page3: {
        path: '/page3',
        component:  () => import(/* webpackChunkName: "page3" */ '../views/page3.vue')
    },
    Page4: {
        path: '/page4',
        component:  () => import(/* webpackChunkName: "page4" */ '../views/page4.vue')
    }
}