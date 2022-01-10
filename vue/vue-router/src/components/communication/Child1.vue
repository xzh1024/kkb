<template>
  <div>
    <h3>Child1</h3>
    <slot></slot>
    <slot name="content" :foo="foo"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: '这是内容...',
    };
  },
  mounted() {
    this.$parent.Event.$on('event-from-child2', (msg) => {
      console.log(msg);
    });
  },
};
</script>
