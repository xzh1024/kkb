<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Communication></Communication>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Communication from '@/components/communication';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Communication,
  },
};
</script>
