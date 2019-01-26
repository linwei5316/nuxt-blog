<template>
  <header class="header">
    <nuxt-link to="/"><h3 class="logo">BLOG</h3></nuxt-link>
    <ul>
      <li>
        <nuxt-link class="nav-item" to="/about">about</nuxt-link>
        <nuxt-link class="nav-item" to="/post">post</nuxt-link>
        <nuxt-link class="nav-item" to="/admin">admin</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  padding: 10px 20px;
  transition: .3s;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
}
</style>
