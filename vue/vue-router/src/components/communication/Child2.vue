<template>
  <div>
    <h3>Child2</h3>
    <!-- $attrs -->
    <p>{{ $attrs.msg }}</p>
    <!-- 属性透传 -->
    <!-- v-bind可以将对象展开 -->
    <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
    <el-button @click="sendToChild1">给child1发送消息</el-button>
  </div>
</template>

<script>
import Grandson from './Grandson';

export default {
  components: {
    Grandson,
  },
  methods: {
    sendToChild1() {
      // 利用事件总线发送事件
      // this.$bus.$emit('event-from-child2', 'some msg from child2')
      // 利用共同祖辈元素发送事件
      this.$parent.Event.$emit('event-from-child2', 'some msg from child2');
    },
  },
};
</script>
