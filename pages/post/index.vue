<template>
  <div>
    <PostList
      type="post"
      :posts="posts"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['posts']),
  },
}
</script>

<style>

</style>
