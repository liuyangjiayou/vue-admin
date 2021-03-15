<template>
  <div id="app">
    <div class="admin-body">
      <!-- 头部操作区 -->
      <head-title />  
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
  import HeadTitle from './components/header'
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
      Tags,
      HeadTitle,
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
