<template>
  <div class="thread">
    <div>
      <p>
        <!--                <a :href="`/thread/${thread['.key']}`">{{thread.title}}</a>-->
        <!--                <router-link :to="`/thread/${thread['.key']}`">{{thread.title}}</router-link>-->
        <!--                name of the route -->
        <router-link :to="{name: 'PageThreadShow', params:{id:thread['.key']}}">{{thread.title}}</router-link>
      </p>
      <p class="text-faded text-small">
        By <a href="#"> </a>,
        <AppDate :timestamp="thread.publishedAt"/>
      </p>
    </div>
    <div class="activity">
      <p class="replies-count">
        {{repliesCount}} replies
      </p>
      <!--            <img class="avatar-medium" src="" alt=""/>-->
      <div>
        <p class="text-xsmall">
          <a href="#">{{user.name}}</a>
        </p>
        <p class="text-xsmall text-faded">2 hours ago</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      thread: {
        required: true,
        type: Object
      }
    },
    computed: { // computed transform data
      repliesCount () {
        return Object.keys(this.thread.posts).length - 1 // get the number of replies we are - 1 because the array starts with 0
      },
      user () {
        return this.$store.state.users[this.thread.userId]
      }
    }
  }
</script>
