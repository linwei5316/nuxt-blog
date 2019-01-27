<template>
  <div>
    <EditPostForm
      @submit="submitHandler"
      :postData="post"
    />
  </div>
</template>

<script>
import EditPostForm from '~/components/Admin/EditPostForm.vue'
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    EditPostForm
  },
  data(){
    return {
      truncateLength: 10,
      post: {
        title: '',
        content: ''
      }
    }
  },
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    ...mapActions(['addPost']),
    submitHandler(post){
      const previewContent = post.content.length > this.truncateLength
        ? post.content.slice(0, this.truncateLength) + '...'
        : post.content.slice(0, this.truncateLength)
      
      this.addPost({
        ...post,
        previewContent
      })
        .then(() => this.$router.push('/admin'))
    }
  },
}
</script>

<style>

</style>
