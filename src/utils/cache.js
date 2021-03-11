// 一个本地存储的类
class Cache {
  constructor (name) {
    this.prefix = `_prefix_${name}`;
  }
  // 获取
  get (key) {
    let str = window.localStorage.getItem(`${this.prefix}_${key}`);
    return  str ? JSON.parse(str) : ''
  }
  // 设置
  set (key, value) {
    window.localStorage.setItem(`${this.prefix}_${key}`, JSON.stringify(value));
  }
}

export default Cache;
