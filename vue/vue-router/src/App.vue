<template>
  <div id="app">
    <div id="nav">
      <h1>
        <!-- <svg>
          <use xlink:href="#icon-user"></use>
        </svg> -->
        <svg-icon icon-class="user"></svg-icon>
        <svg-icon icon-class="phone"></svg-icon>
      </h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import '@/icon/svg/user.svg';

export default {
  name: 'app',
  // components: {
  //   HelloWorld,
  // },
};
</script>
