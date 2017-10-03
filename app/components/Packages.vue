<template>
  <div class="home">
    <Heading :title="title"></Heading>
    <mdc-layout-grid>
      <mdc-layout-cell v-for="package in packages">
        <mdc-card>
          <mdc-card-header :title="package.name" :subtitle="package.version" />
          <mdc-card-text> {{ package.description }} </mdc-card-text>
          <mdc-card-actions>
            <mdc-card-action-button @click="onAction">Action</mdc-card-action-button>
          </mdc-card-actions>
        </mdc-card>
      </mdc-layout-cell>
    </mdc-layout-grid>
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
        title: 'Wiz Explorer',
        packages: [
          {
            name: 'grunt',
            description: 'bla bla',
            version: '1.0.0'
          },
          {
            name: 'npm',
            description: 'bla bla',
            version: '1.0.0'
          },
          {
            name: 'express',
            description: 'bla bla',
            version: '1.0.0'
          },
          {
            name: 'johnny-five',
            description: 'bla bla',
            version: '1.0.0'
          }
        ]
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
