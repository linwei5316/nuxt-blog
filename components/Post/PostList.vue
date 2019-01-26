<template>
  <ul class="post-list">
    <PostListItem
      v-for="item in posts"
      :key="item.id"
      :postData="item"
      :type="type"
    />
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import PostListItem from '~/components/Post/PostListItem.vue'

export default {
  components: {
    PostListItem
  },
  props: {
    type: {
      type: String,
      required: true,
      validator: type => ['post', 'admin']
    },
    posts: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
