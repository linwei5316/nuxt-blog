<template>
  <div>
    <nuxt-link to="/post">back</nuxt-link>
    <section>
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AppButton from '~/components/UI/AppButton.vue'

export default {
  components: {
    AppButton
  },
  data(){
    return {
      fuck: ''
    }
  },
  async asyncData({store, params}) {
    console.log('asyncData executed!')
    return await store.dispatch('getPost', params.id)
      .then( post => ({post}) )
  },
}
</script>

<style>

</style>
