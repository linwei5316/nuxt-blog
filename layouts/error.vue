<template>
  <div>
    <h2>Sorry! Soming Wrong!</h2>
    <p>{{ error }}</p>
    <nuxt-link to="/">Back To Home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>

</style>
