<template>
  <fragment>
    <template v-for="value in menuData">
      <el-submenu v-if="value.childs && value.childs.length > 0 && value.hidden === 0" :key="value.id" :index="value.id">
        <template slot="title">
          <i :class="value.icon"/>
          <span slot="title" :menuData="JSON.stringify(value)">{{ value.title }}</span>
        </template>
        <MenuTree :menuData="value.childs"/>
      </el-submenu>
      <el-menu-item v-else-if="(!value.childs || value.childs.length <= 0) && value.hidden === 0" :index="value.id" :key="value.id"  @click.native="router(value)">
         <i :class="value.icon"/>
        <span slot="title" :menuData="JSON.stringify(value)">{{ value.title }}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>
<script>
export default {
  name: 'MenuTree',
  props: ['menuData'],
  methods:{
    router(value) {
      if (this.$route.name !== value.name) { 
        this.$router.push({ name: value.name});
      }
    }
  },
}
</script>
<style lang="scss" >
.el-submenu__title i {
  color: #fff;
}
.el-menu--collapse {
  width: 54px;
}
</style>