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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    
  },
}
</script>

<style>

</style>
