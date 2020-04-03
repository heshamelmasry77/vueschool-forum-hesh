<template>
  <div class="col-full">
    <h1>welcome to the forum</h1>
    <ForumList :forums="forums"/>
  </div>
</template>

<script>
  import sourceData from '../data'
  import ForumList from '../components/ForumList'

  console.log(sourceData)
  export default {
    components: {ForumList},
    data () {
      return {
        forums: Object.values(sourceData.forums), // take only values from the object and get me an array, i can take the key only using
        // Object.keys
        posts: sourceData.posts,
        users: sourceData.users
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
