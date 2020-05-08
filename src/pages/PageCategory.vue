<template>
  <div class="col-full">
    <h1>{{category.name}}</h1>
    <CategoryListItem :category="category"/>
  </div>
</template>

<script>
  import CategoryListItem from '../components/CategoryListItem'

  export default {
    components: {CategoryListItem},
    props: {
      id: {
        required: true,
        type: String
      }
    },
    computed: {
      category () {
        console.log(this.$store.state.categories)
        return this.$store.state.categories[this.id] // the id comes from the route parameter
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
