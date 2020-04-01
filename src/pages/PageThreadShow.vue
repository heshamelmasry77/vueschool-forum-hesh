<template>
  <div>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <PostList :posts="posts"/>
      <!--      @save is a listener-->
      <PostEditor
        @save="addPost"
        :threadId="id"
      />
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data' // absolute path
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
        // thread: sourceData.threads[this.$route.params.id], //another option to use
        thread: sourceData.threads[this.id] // get all the threads which has the this id from the route params
      }
    },
    computed: {
      posts () {
        const postIds = Object.values(this.thread.posts)
        console.log(postIds) // all posts
        const PostsValues = Object.values(sourceData.posts)
        console.log(PostsValues)
        return PostsValues
          .filter(posts => {
            return postIds.includes(posts['.key']) // or  posts => postIds.includes(posts['.key'])
          })
      }
    },
    methods: {
      addPost (eventData) {
        console.log(eventData)
        const post = eventData.post
        const postId = eventData.post['.key']
        // Vue.set(Obj, PropertyName, value)
        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)

        // to update the count of the posts
        this.$set(sourceData.users[post.userId].posts, postId, postId)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
