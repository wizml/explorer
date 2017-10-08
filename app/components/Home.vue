<template>
  <div class="home hcenter full">
    <Heading :title="title"></Heading>
    <div class="vcenter fit">
      <h1>{{ title }}</h1>
      <mdc-button raised @click="go('packages')">Get Started</mdc-button>
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
// @import "vue-mdc-adapter/components/styles.scss";

@import "vue-mdc-adapter/dist/vue-mdc-adapter.min.css"
</style>
