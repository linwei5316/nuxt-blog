<template>
  <div>
    <EditPostForm
      :postData="post"
      @submit="submitHandler"
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
      post: {}
    }
  },
  asyncData({params, store}) {
    const id = params.postId

    const post = store.state.posts.find( ({id: postId}) => postId == id )
    console.log(post)

    return {
      post: { ...post }
    }
  },
  // computed: {
  //   ...mapState(['posts']),
  // },
  methods: {
    ...mapActions(['editPost']),
    submitHandler(post){
      const previewContent = post.content.length > this.truncateLength
        ? post.content.slice(0, this.truncateLength) + '...'
        : post.content.slice(0, this.truncateLength)
      
      this.editPost({
        post: {
          ...post,
          previewContent
        },
        id: this.$route.params.postId
      })
    }
  },
}
</script>

<style>

</style>
