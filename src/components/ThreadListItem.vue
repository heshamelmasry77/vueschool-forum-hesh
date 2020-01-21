<template>
    <div class="thread">
        <div>
            <p>
                <!--                <a :href="`/thread/${thread['.key']}`">{{thread.title}}</a>-->
                <!--                <router-link :to="`/thread/${thread['.key']}`">{{thread.title}}</router-link>-->
                <router-link :to="{name: 'ThreadShow', params:{id:thread['.key']}}">{{thread.title}}</router-link>
            </p>
            <p class="text-faded text-small">
                By <a href="#"> </a>, {{thread.publishedAt}}
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
  import sourceData from '@/data.json'

  export default {
    props: {
      thread: {
        required: true,
        type: Object
      }
    },
    computed: {
      repliesCount () {
        return Object.keys(this.thread.posts).length - 1
      },
      user () {
        return sourceData.users[this.thread.userId]
      }
    }
  }
</script>
