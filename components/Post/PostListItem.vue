<template>
  <li class="post-list-item">
    <nuxt-link :to="`/${type}/${postData.id}`">
      <article>
        <h4>{{ postData.title }}</h4>
        <p>{{ postData.previewContent }}</p>
      </article>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    postData: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: type => ['post', 'admin']
    }
  }
}
</script>

<style lang="scss" scoped>
.post-list-item {
  border: 2px solid #666;
  border-radius: 5px;
  padding: 10px;
  width: calc(100% / 2 - 10px);
  box-sizing: border-box;
  margin-bottom: 20px;
  &:nth-of-type(even){
    margin-left: auto;
  }
}
</style>
