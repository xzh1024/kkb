<template>
  <div class="k-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: Object,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.model);
  },
  methods: {
    // 校验规则
    validate(cb) {
      console.log(cb);
      // 1.遍历执行所有items的校验方法
      const promises = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate());
      // 如果所有校验全部通过，则通过
      Promise.all(promises)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style lang="scss" scoped></style>
