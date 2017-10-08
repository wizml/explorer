<template>
  <div>
    <Heading title='Wiz Project'></Heading>
    <div class="in vcenter hcenter">
      <h1>Not Found</h1>
      <p>Whoops! It looks like the page you're looking for is not here. Maybe head back <a href="/">home</a>?</p>
    </div>
  </div>
</template>

<script>
  import Heading from './Heading'
  export default {
    name: 'home',
    components: {
      Heading
    }
  }
</script>
