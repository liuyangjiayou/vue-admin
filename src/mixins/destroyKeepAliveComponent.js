import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'keepAliveOption',
    ]),
    // 当前储存的所有路由的fullPath
    fullPaths () {
      return this.keepAliveOption.map(item => item.fullPath);
    },
    // 当前的routerName
    routerName () {
      let { fullPath } = this.$route
      return fullPath;
    },
  },
  watch: {
    fullPaths (val) {
      console.log(val, this.routerName);
      if (!val.includes(this.routerName)) {
        console.log(123123);
        this.$destroy();
      }
    }
  },
}
