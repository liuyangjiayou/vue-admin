export default {
    namespaced: true,
    state: {
      // 储存的菜单数据
      menuList : [],
      // 路由数据(后台返回来的)
      routerData: [
          {
            icon : 'el-icon-s-home',
            name : 'Home',
            title: '首页',
            id : '1',
            hidden: 0,
            childs : [],
            meta: {
              title: '首页',
              keepAlive: true,
            },
          },
          {
            icon : 'el-icon-s-home',
            name : '',
            title : 'vue源码学习',
            id : '6',
            hidden: 0,
            meta: {
              title: 'vue源码学习',
              keepAlive: true,
            },
            childs : [
              {
                path: '/compile',
                icon : 'el-icon-s-home',
                name : 'Compile',
                title : 'compile解析',
                id : '6-1',
                hidden: 0,
                childs : [],
                meta: {
                  title: 'compile解析',
                  keepAlive: true,
                },
              },
              {
                path: '/observer',
                icon : 'el-icon-s-home',
                name : 'Observer',
                title : 'Observer',
                id : '6-2',
                hidden: 1,
                childs : [],
                meta: {
                  title: 'Observer',
                  keepAlive: true,
                },
              },
            ],
          },
          {
            icon : 'el-icon-s-custom',
            name : 'Page1',
            title : '单页面',
            id : '2',
            hidden: 0,
            childs : [
              {
                path: '/page1_1',
                icon : 'el-icon-s-home',
                name : 'Page1_1',
                title : 'page1_1',
                id : '2-1',
                hidden: 0,
                childs : [],
                meta: {
                  title: 'page1_1',
                  keepAlive: true,
                },
              }
            ],
            meta: {
              title: '单页面',
              keepAlive: true,
            },
          },
          {
            icon : 'el-icon-s-tools',
            name : 'Page2',
            title : '一级页面',
            id : '3',
            hidden: 0,
            childs : [],
            meta: {
              title: '一级页面',
              keepAlive: true,
            },
          },
          {
            icon : 'el-icon-s-goods',
            name : 'Page3',
            title : '两级页面',
            id : '4',
            hidden: 0,
            childs : [],
            meta: {
              title: '两级页面',
              keepAlive: true,
            },
          },
          {
            icon : 'el-icon-error',
            name : 'Page4',
            title : '多级页面',
            id : '5',
            hidden: 0,
            childs : [],
            meta: {
              title: '多级页面',
              keepAlive: true,
            },
          }
      ],
    },
    mutations: {
      SET_MENU_DATA (state, data) {
        state.menuList = data
      }
    },
    actions: {
      setMenuData ({ commit }, data) {
        commit('SET_MENU_DATA', data)
      }
    }
};
