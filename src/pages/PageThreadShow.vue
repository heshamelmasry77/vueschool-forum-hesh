<template>
  <div>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <p>
        By <a href="#" class="link-unstyled">Robin</a>,
        <AppDate :timestamp="thread.publishedAt"/>
        .
        <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
      </p>
      <PostList :posts="posts"/>
      <!--      @save is a listener-->
      <PostEditor
        :threadId="id"
      />
    </div>
  </div>
</template>

<script>
  import PostList from '../components/PostList'
  import PostEditor from '../components/PostEditor'

  export default {
    components: {PostList, PostEditor},
    props: {
      id: {
        required: true,
        type: String
      }
    },
    name: 'ThreadShow',
    data () {
      return {
        // thread: this.$store.state.threads[this.$route.params.id], //another option to use
      }
    },
    computed: {
      thread () {
        return this.$store.state.threads[this.id] // get all the threads which has the this id from the route params
      },
      posts () {
        const postIds = Object.values(this.thread.posts)
        console.log(postIds) // all posts
        const PostsValues = Object.values(this.$store.state.posts)
        console.log(PostsValues)
        return PostsValues
          .filter(posts => {
            return postIds.includes(posts['.key']) // or  posts => postIds.includes(posts['.key'])
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
