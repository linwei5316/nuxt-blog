<template>
  <div class="input-group">
    <label><slot/></label>
    <input type="text"
      v-if="type === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <textarea rows="10"
      v-if="type === 'textarea'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.input-group {
  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    border: 1px solid #ccc;
    padding: 5px;
    outline: none;
  }

  &:not(:last-child){
    margin-bottom: 10px;
  }
}
</style>
