<template>
  <MyHeader/>
  <router-view class="vitrine"/>
</template>

<script>
import MyHeader from './components/MyHeader.vue';

  export default {
    name: 'App',
    components: {
      MyHeader
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .vitrine {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
