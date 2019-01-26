<template>
  <div>
    <InputGroup
      type="input"
      v-model="post.title"
    >
      Title
    </InputGroup>

    <InputGroup
      type="textarea"
      v-model="post.content"
    >
      Content
    </InputGroup>

    <div class="">
      <AppButton
        @click="submitHandler"
      >Post</AppButton>
      <AppButton
        btnStyle="default"
        @click="$router.go(-1)"
      >Cancel</AppButton>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import InputGroup from '~/components/UI/InputGroup.vue'
import AppButton from '~/components/UI/AppButton.vue'

export default {
  components: {
    AppButton,
    InputGroup,
  },
  props: {
    postData: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      post: {
        ...this.postData     
      }
    }
  },
  methods: {
    submitHandler(){
      this.$emit('submit', this.post)
    }
  },
}
</script>

<style>

</style>
