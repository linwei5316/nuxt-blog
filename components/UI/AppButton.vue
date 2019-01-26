<template>
  <button
    class="btn"
    :class="style"
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    btnStyle: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    style(){
      return {
        default: this.btnStyle === 'default'
      }
    }
  },
  methods: {
    // test(){
    //   console.log('in component: ', this.$event)
    // }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 5px 10px;
  background-color: #ffffff;
  border: 2px solid #666;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  transition: .3s;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }

  &.default {
    color: #fff;
    background-color: #666;
  }
}
</style>
