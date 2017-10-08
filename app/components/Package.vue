<template>
  <div class="home">
    <Heading :title="title"></Heading>
    <div class="in">
      <h1>{{ $route.params.package }}</h1>
      <p>README.md</p>
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
