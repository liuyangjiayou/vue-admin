<template>
  <div>
    我是observer
    {{ $route.params.id }}
    <el-input v-model="observer" />
  </div>
</template>

<script>

  export default {
    name:'Observer',
    props:[''],
    data () {
      return {
        observer: '',
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>

</style>
