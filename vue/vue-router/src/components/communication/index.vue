<template>
  <div>
    <h2>组件通信</h2>
    <!-- props，自定义事件 -->
    <Child1 msg="some msg from parent" @some-event="onSomeEvent">
      <template v-slot:default>
        <p>匿名插槽</p>
      </template>
      <template v-slot:content="slotProps">
        <p>具名插槽</p>
        {{ slotProps.foo }}
      </template>
    </Child1>
    <!-- 事件总线 -->
    <Child2
      ref="child2"
      msg="some msg from parent"
      @some-event="onSomeEvent"
    ></Child2>
  </div>
</template>

<script>
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

export default {
  provide() {
    return {
      foo: this.foo,
    };
  },
  data() {
    return {
      foo: 'foo from grandpa',
    };
  },
  components: {
    Child1,
    Child2,
  },
  methods: {
    onSomeEvent(msg) {
      console.log('Communition', msg);
    },
  },
  mounted() {
    // $children获取子组件数组，不包括普通元素，不保证模板中顺序
    console.log(this.$children);
    // $refs用于引用命名的元素或组件，可包含普通元素
    console.log(this.$refs.child2);
  },
};
</script>
