<template>
  <div>
    <AppButton @click="$router.push('/admin/new-post')">New Post</AppButton>

    <h2>Existing Posts</h2>

    <PostList
      type="admin"
      :posts="posts"
    />
  </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton.vue'
import PostList from '~/components/Post/PostList.vue'
import { mapState } from 'vuex';

export default {
  components: {
    AppButton,
    PostList
  },
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    test(){
      console.log('click')
    }
  },
  // async asyncData({store}) {
  //   console.log('async data executed!')
  //   return await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         posts: store.state.posts
  //       })
  //     }, 500)
  //   })
  // },
}
</script>

<style>

</style>
