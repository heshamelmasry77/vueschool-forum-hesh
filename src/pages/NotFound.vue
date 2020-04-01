<template>
  <div>
    <h1 :class="$style.headingLarge">Not Found Page</h1>
    <p :class="$style['text-large']">oops!! </p>
    <router-link :to="{name : 'PageHome'}">Go back to Home Page</router-link>
  </div>
</template>

<script>
  export default {
    name: 'NotFound',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--using module css with classes-->
<style module>
  .headingLarge {
    font-size: 50px;
  }
  .text-large {
    font-size: 100px;
  }
</style>
