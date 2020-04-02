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
    <div class="post-date text-faded"
         :title="post.publishedAt | humanFriendlyDate"
    >
      {{post.publishedAt | diffForHumans}}
    </div>
  </div>
</template>
<script>
  import sourceData from '@/data.json'
  import moment from 'moment'

  export default {
    props: {
      post: {
        required: true,
        type: Object
      }
    },
    computed: { // computed transform data
      user () {
        return sourceData.users[this.post.userId]
      },
      userPostsCount () {
        const postIds = this.user.posts // get a the post Ids
        const postIdArray = Object.keys(postIds) // create an array hold all the posts
        return postIdArray.length - 1 // get the number of posts the user written
      }
    },
    filters: {
      humanFriendlyDate (date) {
        return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
      },
      diffForHumans (date) {
        return moment.unix(date).fromNow()
      }
    }
  }
</script>
