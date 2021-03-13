<template>
  <div class="admin-tag flex align-center justify-space-between" :style="{
      'padding' : `0 ${menuSetting.viewMargin}`,
      'width' : `calc(100% - ${isCollapse ? menuSetting.smallWidth : menuSetting.width})`}">
        <div class="flex align-center justify-space-between admin-tag-list">
          <el-tag class="cursor" effect="plain">首页</el-tag>
          <el-tag
            v-for="item in tags"
            :key="item.name"
            :class="['cursor']"
            closable
            :type="routerName === item.name ? `success` : 'info'"
            effect="plain"
            @click="tagClick(item)"
            @close="tagClose(item)"
          >
            {{ item.meta.title }}
          </el-tag>
        </div>
        <div class="admin-tag-btn">
          <el-dropdown @command="handleTag">
            <span class="el-dropdown-link cursor hover-cblue">
                更多操作<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1" icon="el-icon-circle-close
">关闭其他</el-dropdown-item>
              <el-dropdown-item command="2" icon="el-icon-back">关闭左侧</el-dropdown-item>
              <el-dropdown-item command="3" icon="el-icon-right">关闭右侧</el-dropdown-item>
              <el-dropdown-item command="4" icon="el-icon-error">全部关闭</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
    </div>
</template>

<script>
  import setting from '@/config/setting'
  import { mapGetters } from 'vuex'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        menuSetting : setting,
      };
    },

    components: {},

    computed: {
      ...mapGetters([
        'isCollapse',
        'menuList',
        'keepAliveArray',
        'tags',
      ]),
    },

    beforeMount() {},

    mounted() {},

    methods: {
      /* 操作tag标签 */
      handleTag(command){
        console.log(command)
      },
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
.admin-tag{
  position: fixed;
  top: 50px;
  right: 0;
  box-sizing: border-box;
  height: 46px;
  background: #fff;
  transition: .3s;
}
.admin-tag-list .cursor+.cursor{
  margin-left: 5px;
}
</style>