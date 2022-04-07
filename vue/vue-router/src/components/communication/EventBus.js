// vue 事件总线eventBus
class EventBus {
  constructor() {
    this.callBacks = {}; //数据中心
  }
  // 订阅
  $on(name, fun) {
    // 多次订阅可执行对应的方法，使用数组存储
    this.callBacks[name] = this.callBacks[name] || [];
    // 把订阅方法名对应的方法存入数组中
    this.callBacks[name].push(fun);
  }
  // 发布
  $emit(name, ...args) {
    if (this.callBacks[name] && this.callBacks[name].length) {
      // 存在订阅的属性名，则遍历数组里所有的方法
      this.callBacks[name].forEach((cb) => cb(...args));
    }
  }
}

// 实例化EventBus
const bug = new EventBus();
// 调用订阅方法
bus.$on('test', (...args) => {
  console.log(...args);
});
// 调用发布方法
bus.$emit('test', '参数1', '参数2'); // 打印输出：参数1 参数2
