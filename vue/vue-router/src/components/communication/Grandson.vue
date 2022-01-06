<template>
  <div @click="someEvent">
    <h3>Grandson</h3>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  // inject: ['foo'],
  inject: {
    foo2: {
      from: 'foo',
      default: '666',
    },
  },
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  methods: {
    someEvent() {
      this.$emit('some-event', 'Grandson');
      // console.log(this.foo);
      console.log(this.foo2);
    },
  },
};
</script>
