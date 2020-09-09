<template>
  <div>
    <form @submit.prevent="save">
      <div class="form-group">
        <label for=""></label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
          v-model="postText"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    props: {
      threadId: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        postText: ''
      }
    },
    methods: {
      save () {
        const post = {
          text: this.postText,
          threadId: this.threadId
        }
        this.postText = ''
        // custom event to pass data to the parent
        // this.$emit(name of the event, data to send to the parent)
        this.$emit('save', {post})
        this.$store.dispatch('createPost', post)
      }
    }
  }
</script>
