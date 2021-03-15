<template>
  <div class="admin-header" :style="{
    'padding' : `0 ${menuSetting.viewMargin}`,
    'width' : `calc(100% - ${isCollapse ? menuSetting.smallWidth : menuSetting.width})`}">
    <ul class="admin-header-left flex align-center justify-space-between">
      <li>
        <i :class="{
          'el-icon-s-fold cursor hover-cblue' : !isCollapse,
          'el-icon-s-unfold cursor hover-cblue' : isCollapse
        }" @click="handleMenu"></i>
      </li>
      <li><i class="el-icon-refresh-right cursor"></i></li>
    </ul>
    <ul class="admin-header-right flex align-center justify-space-between">
      <li><i class="el-icon-s-fold cursor"></i></li>
      <li><el-avatar size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar></li>
    </ul>
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
        menuSetting: setting,
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
      /* 展开与隐藏 */
      handleMenu(){
        this.$store.commit('config/CHANGE_ISCOLLAPSE', !this.isCollapse)
      },
    },

    watch: {}

  }

</script>
<style lang='less' scoped>

</style>