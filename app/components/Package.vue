<template>
  <div class="home">
    <Heading :title="title"></Heading>
    <div class="in">
      <h1>{{ $route.params.package }}</h1>
      <p>README</p>
    </div>
  </div>
</template>

<script>
  import Heading from './Heading'
  export default {
    name: 'home',
    components: {
      Heading
    },
    data() {
      return {
        title: 'Wiz Explorer'
      }
    },
    methods: {
      go: function(path) {
        this.$router.push({path: path})
      }
    }
  }

</script>

<style lang="scss">

$mdc-theme-primary: #212121;
$mdc-theme-accent: #41B883;
$mdc-theme-background: #fff;

// TODO: Use SCSS for variables and theming
// QUESTION: Npm issues causing bug
// @import "vue-mdc-adapter/components/styles.css";

@import "vue-mdc-adapter/dist/vue-mdc-adapter.css"
</style>
