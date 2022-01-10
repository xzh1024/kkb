<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Communication></Communication>
    <FormExampe></FormExampe>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Communication from '@/components/communication';
import FormExampe from '@/components/form';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Communication,
    FormExampe,
  },
};
</script>
