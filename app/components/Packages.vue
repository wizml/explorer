<template>
  <div class="home">
    <Heading :title="title"></Heading>
    <mdc-layout-grid>
      <mdc-layout-cell v-for="package in packages">
        <mdc-card>
          <mdc-card-header :title="package.name" :subtitle="package.version" />
          <mdc-card-text> {{ package.description }} </mdc-card-text>
          <mdc-card-actions>
            <mdc-card-action-button @click="go('/packages/' + package.name)">View Package</mdc-card-action-button>
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
        console.log(path);
        this.$router.push({path: path})
      }
    }
  }

</script>
