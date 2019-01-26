<template>
  <div>
    <PostList
      type="post"
      :posts="posts"
    />
  </div>
</template>

<script>
import PostList from '~/components/Post/PostList.vue'
import { mapState } from 'vuex';

export default {
  components: {
    PostList
  },
  // data(){
  //   return {
  //     posts: this.$store.state.posts
  //   }
  // },
  computed: {
    ...mapState(['posts']),
  },
  // async asyncData({store, error}) {
  //   console.log('async data')
  //   return await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         posts: store.state.posts
  //       })

  //       // reject(new Error('delibrate error!'))
  //     }, 500)
  //   })
  //   .catch(e => error(e))
  // },
}
</script>

<style>

</style>
