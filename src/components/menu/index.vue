<template>
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
</template>

<script>
  import setting from '@/config/setting'
  import MenuTree from '@/components/menu/menuTree'
  import { mapGetters } from 'vuex'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        menuSetting: setting,
      };
    },

    components: {
      MenuTree,
    },

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
      // 当menu打开的时候
      handleOpen () {},
      // 当menu关闭的时候
      handleClose () {},
      // 当
      handleSelect () {},
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
.admin-menu-wrap{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  background: #000;
  transition: .3s;
}
</style>
