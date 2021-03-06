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
      <div class="admin-tag flex align-center justify-space-between" :style="{
        'padding' : `0 ${menuSetting.viewMargin}`,
        'width' : `calc(100% - ${isCollapse ? menuSetting.smallWidth : menuSetting.width})`}">
          <div class="flex align-center justify-space-between admin-tag-list">
            <el-tag class="cursor" effect="plain">首页</el-tag>
            <el-tag class="cursor" closable effect="plain">首页</el-tag>
            <el-tag class="cursor" closable effect="plain">首页</el-tag>
            <el-tag class="cursor" closable effect="plain">首页</el-tag>
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
      <!-- 左侧导航区 -->
      <div class="admin-menu-wrap" 
      :style="{
        'width' : isCollapse ? menuSetting.smallWidth : menuSetting.width,
        'background-color' : menuSetting.backgroundColor,
        }">
        <el-scrollbar style='height:100%' class="menu">
          <div class="logo ell" :style="{
          'background-color' : menuSetting.logoBackgroundColor,
          'text-align' : 'center',
          'border-bottom' :  menuSetting.logoBorder ? '1px solid #fff' : 'none'
          }">
            <a href=""  
            :style="{
                'background-color' : menuSetting.logoBackgroundColor,
                'color' : menuSetting.logoColor,
                'font-size' : menuSetting.logoFontSize,
                'height' : menuSetting.logoHeight,
                'line-height' : menuSetting.logoHeight,
                
              }">
              <i class="el-icon-s-home vm" 
              :style="{
                'font-size' : menuSetting.logoIconSize,
              }"></i>
              <span class="vm" v-show="!isCollapse">
                logo-admin
              </span>
            </a>
          </div>
          <el-menu
            :style="{'border-right' : menuSetting.backgroundColor}"
            default-active=""
            :unique-opened="menuSetting.uniqueOpened"
            :background-color="menuSetting.backgroundColor"
            :text-color="menuSetting.textColor"
            :collapse-transition="menuSetting.collapseTransition"
            :active-text-color="menuSetting.activeTextColor"
            @open="handleOpen"
            @close="handleClose" 
            @select="handleSelect"
            :collapse="isCollapse"
          >
            <MenuTree :menuData="menuList"/>
          </el-menu>
        </el-scrollbar>
      </div>
      <!-- 视图可视区 -->
      <div class="admin-wrap" :style="{'margin-left': isCollapse ? menuSetting.smallWidth : menuSetting.width,'padding': menuSetting.viewMargin}">
        <div class="admin-page-view">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import setting from './config/setting'
  import MenuTree from './components/menu/menuTree'
  import { mapGetters } from 'vuex'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        menuSetting : setting,
      };
    },

    components: { MenuTree },

    computed: {
      ...mapGetters([
        'isCollapse',
        'menuList'
      ])
    },

    beforeMount() {},

    mounted() {},

    methods: {
      /* 展开与隐藏 */
      handleMenu(){
        this.$store.commit('config/CHANGE_ISCOLLAPSE', !this.isCollapse)
      },
      /* 操作tag标签 */
      handleTag(command){
        console.log(command)
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
.admin-menu-wrap{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  background: #000;
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
.admin-tag{
  position: fixed;
  top: 50px;
  right: 0;
  box-sizing: border-box;
  height: 46px;
  background: #fff;
  transition: .3s;
}
.menu{
  .el-scrollbar__wrap {
      overflow-x: hidden;
  }
}
.admin-page-view{
  background: #fff;
}
.admin-tag-list .cursor+.cursor{
  margin-left: 5px;
}
</style>
