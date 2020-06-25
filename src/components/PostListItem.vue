<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{user.name}}</a>
      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="">
      </a>
      <p class="desktop-only text-small">{{userPostsCount}}</p>
    </div>

    <div class="post-content">
      <div>{{post.text}}</div>
    </div>
    <div class="post-date text-faded">
      <AppDate :timestamp="post.publishedAt"/>
    </div>
  </div>
</template>
<script>
  import {countObjectProperties} from '@/utils'

  export default {
    props: {
      post: {
        required: true,
        type: Object
      }
    },
    computed: { // computed transform data
      user () {
        return this.$store.state.users[this.post.userId]
      },
      userPostsCount () {
        // const postIds = this.user.posts // get a the post Ids
        // const postIdArray = Object.keys(postIds) // create an array hold all the posts
        // return postIdArray.length - 1 // get the number of posts the user written
        // WE SUBTRACT 1 BECAUSE THE ARRAY BECAUSE THE ARRAY START FROM 0
        // USE HELPER FUNCTION TO COUNT THE NUMBER OF USER POSTS
        return countObjectProperties(this.user.posts) - 1
      }
    }
  }
</script>
