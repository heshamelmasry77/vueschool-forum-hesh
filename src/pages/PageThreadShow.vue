<template>
  <div>
    <div class="col-large push-top">
      <h1>{{thread.title}}</h1>
      <PostList :posts="posts"/>
      <form @submit.prevent="addPost">
        <div class="form-group">
          <label for=""></label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="form-input"
            v-model="newPostText"
          ></textarea>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data' // absolute path
  import PostList from '../components/PostList'

  export default {
    components: {PostList},
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
        thread: sourceData.threads[this.id], // get all the threads which has the this id from the route params
        newPostText: ''
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
      addPost () {
        const postId = 'greatPost' + Math.random()
        const post = {
          text: this.newPostText,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.id,
          userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
          '.key': postId
        }
        // Vue.set(Obj, PropertyName, value)
        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)

        // to update the count of the posts
        this.$set(sourceData.users[post.userId].posts, postId, postId)
        this.newPostText = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
