<template>
  <div id="app">
    <div class="admin-body">
      <!-- 头部操作区 -->
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
      <!-- tag标签区 -->
      <tags />
      <!-- 左侧导航区 -->
      <menu-list />
      <!-- 视图可视区 -->
      <div class="admin-wrap" :style="{'margin-left': isCollapse ? menuSetting.smallWidth : menuSetting.width,'padding': menuSetting.viewMargin}">
        <div class="admin-page-view">
          <!-- <router-view/> -->
          <keep-alive :include="keepAliveArray">
            <router-view :key="$route.fullPath" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import setting from './config/setting'
  import MenuList from './components/menu'
  import Tags from './components/tags/tag'
  import { mapGetters } from 'vuex'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        menuSetting : setting,
      };
    },

    components: { 
      MenuList,
      Tags
    },

    computed: {
      ...mapGetters([
        'isCollapse',
        'menuList',
        'keepAliveArray',
        'tags',
      ]),
      routerName() {
        let { name } = this.$route
        return name;
      },
    },

    beforeMount() {},

    mounted() {
      this.$store.dispatch('tag/init');
      this.$store.dispatch('keepAlive/init');
    },

    methods: {
      /* 展开与隐藏 */
      handleMenu(){
        this.$store.commit('config/CHANGE_ISCOLLAPSE', !this.isCollapse)
      },
      
      // 点击tag面签的时候
      tagClick (data) {
        if (this.$route.name !== data.name) {
          this.$router.push(data.fullPath);
        }
      },
      // 关闭tag面签的时候
      tagClose (data) {
        console.log(data, 'hahahah');
      },
      handleSelect(key, keyPath){
       console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },

    watch: {}

  }

</script>
<style lang="scss">
.admin-body{padding-top: 96px;background: #f6f8f9;}
.admin-wrap{
  position: relative;
  min-height: 100%;
  transition: .3s;
}
.admin-header{
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #f6f6f6;
  background: #fff;
  transition: .3s;
  li+li{
    margin-left: 10px;
  }
  i{
    font-size: 24px;
  }
}
.menu{
  .el-scrollbar__wrap {
      overflow-x: hidden;
  }
}
.admin-page-view{
  background: #fff;
}

</style>
