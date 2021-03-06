export default {
    // menu菜单展开收起的状态
    isCollapse: state => state.config.isCollapse,
    // menu菜单数据
    menuList: state => state.router.menuList,
    // 后台拿过来的tree数据
    routerData: state => state.router.routerData,
}