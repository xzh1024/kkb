<template>
  <div class="">
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名：" prop="username">
        <KInput
          v-model="model.username"
          @input="chenge"
          placeholder="请输入用户名"
        ></KInput>
      </KFormItem>
      <KFormItem label="密码：" prop="password">
        <KInput
          type="password"
          v-model="model.password"
          @input="chenge"
          placeholder="请输入密码"
        ></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from './KInput';
import KFormItem from './KFormItem';
import KForm from './KForm';

export default {
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      model: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名为必填项！',
          },
        ],
        password: [
          {
            required: true,
            message: '密码为必填项！',
          },
        ],
      },
    };
  },
  methods: {
    chenge(value) {
      console.log(value);
    },
    onLogin() {
      console.log('登录');
      console.log(this.$refs.loginForm);
      this.$refs.loginForm.validate((isValid) => {
        console.log(isValid);
        if (isValid) {
          console.log('submit login');
        } else {
          // alert('校验失败!');
          // this.$create(Notice, {
          //   title: '提示',
          //   message: '校验失败',
          //   duratin: 2000,
          // });
          this.$notice({
            title: '提示',
            message: '校验失败',
            duratin: 2000,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
