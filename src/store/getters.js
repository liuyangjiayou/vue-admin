export default {
    // menu菜单展开收起的状态
    isCollapse: state => state.config.isCollapse,
    // menu菜单数据
    menuList: state => state.router.menuList,
    // 后台拿过来的tree数据
    routerData: state => state.router.routerData,
    // 当前是否缓存的数组
    keepAliveArray: state => state.keepAlive.keepAliveArray,
    // 获取当前储存住的路由
    keepAliveOption: state => state.keepAlive.keepAliveOption,
    // 获取当前tags标签
    tags: state => state.tag.tags,
}
