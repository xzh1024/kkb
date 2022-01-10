<template>
  <div class="k-form-item">
    <!-- <slot name="label"> -->
    <label v-if="label">{{ label }}</label>
    <!-- </slot> -->
    <slot></slot>
    <!-- 错误信息 -->
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import Validator from 'async-validator';

export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: String,
  },
  data() {
    return {
      error: '',
    };
  },
  methods: {
    validate() {
      // console.log('validate');
      // 加载一个校验库，async-validator
      // 1.获取规则和值
      console.log(this.form);
      const rules = this.form.rules[this.prop];
      if (rules) {
        const value = this.form.model[this.prop];
        console.log(value);
        // 2.获得校验器实例
        const validator = new Validator({ [this.prop]: rules });
        // 执行校验
        return validator.validate({ [this.prop]: value }, (errors) => {
          console.log(errors);
          if (errors) {
            console.log(errors[0].message);
            this.error = errors[0].message;
          } else {
            this.error = '';
          }
          console.log(this.error);
        });
      }
    },
  },
  mounted() {
    console.log(this.form);
    this.$on('input', (value) => {
      this.form.model[this.prop] = value;
    });
    this.$on('validate', () => {
      this.validate();
    });
    this.$nextTick(() => {
      this.validate(this.form.model[this.prop]);
    });
  },
};
</script>

<style lang="scss" scoped>
.k-form-item {
  .error {
    color: red;
  }
}
</style>
