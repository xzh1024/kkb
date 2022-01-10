<template>
  <div class="notice">
    <div class="notice-title">{{ title }}</div>
    <div class="notice-body">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    },
  },
};
</script>

<style lang="scss" scoped>
.notice {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 2000;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 300px;
  height: 100px;
  border: 1px solid red;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .notice-title {
    padding: 12px;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    border-bottom: 1px solid #dfdfdf;
  }
  .notice-body {
    flex: 1;
    font-size: 14px;
  }
}
</style>
