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
          },
          {
            icon : 'el-icon-s-home',
            name : '',
            title : 'vue源码学习',
            id : '6',
            hidden: 0,
            childs : [
              {
                path: '/compile',
                icon : 'el-icon-s-home',
                name : 'Compile',
                title : 'compile解析',
                id : '6-1',
                hidden: 0,
                childs : [],
              }
            ],
          },
          {
            icon : 'el-icon-s-custom',
            name : 'Page1',
            title : '单页面',
            id : '2',
            hidden: 0,
            childs : []
          },
          {
            icon : 'el-icon-s-tools',
            name : 'Page2',
            title : '一级页面',
            id : '3',
            hidden: 0,
            childs : []
          },
          {
            icon : 'el-icon-s-goods',
            name : 'Page3',
            title : '两级页面',
            id : '4',
            hidden: 0,
            childs : []
          },
          {
            icon : 'el-icon-error',
            name : 'Page4',
            title : '多级页面',
            id : '5',
            hidden: 0,
            childs : []
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