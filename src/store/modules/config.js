//menu 配置
import menuSetting from '../../config/setting'
export default {
    namespaced: true,
    state: {
        isCollapse: menuSetting.isCollapse
    },
    mutations: {
        // 修改当前menu菜单展开收起状态
        CHANGE_ISCOLLAPSE (state, flag) {
            state.isCollapse = flag;
        },
    },
    actions: {},
}