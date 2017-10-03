<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>

  .fit {
    width: auto;
    height: auto;
  }
  .vcenter {
    position: relative;
    top: 40%;
    transform: translateY(-50%);
  }
  .hcenter {
    width: 100%;
    height: 100%;
    margin: 0;
    text-align: center;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
