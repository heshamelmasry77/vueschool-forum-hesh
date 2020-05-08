<template>
  <div class="col-full push-top">
    <h1>welcome to the forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
  import CategoryList from '../components/CategoryList'

  export default {
    components: {CategoryList},
    computed: {
      categories () {
        console.log(this.$store.state.categories)
        console.log(Object.values(this.$store.state.categories))
        return Object.values(this.$store.state.categories) // take only values from the object and get me an array, i can take the key only using
      }
    },
    data () {
      return {
        // Object.keys
        posts: this.$store.state.posts,
        users: this.$store.state.users
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
