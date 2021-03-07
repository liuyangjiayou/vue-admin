<template>
  <div>
    <h5>现实一个指令解析器compile</h5>
    <p>解析器的目的是将DOM转化为真正的html</p>
    <div>以下是简单的一个例子，我大概整理了一下核心的思想,具体代码与具体的逻辑请参考dome.html</div>
    <el-button @click="handlerRouter(1)">点击我去observer1</el-button>
    <el-button @click="handlerRouter(2)">点击我去observer2</el-button>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        name: '刘杨',
        age: '18',
        profession: 'web前端',
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
      // 定义一个vue类
      // class Mvue {
      //   constructor(options) {
          
      //   }
      // }
    },

    methods: {
      handlerRouter (num) {
        this.$router.push({ name: 'Observer', params: { id: num } });
      },
    },

    watch: {}

  }

</script>
<style lang='less' scoped>

</style>