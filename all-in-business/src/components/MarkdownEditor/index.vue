<template>
  <v-textarea
    v-model="input"
    :height="'80vh'"
    :dark="true"
    no-resize
    :filled="true"
    @input="onChangeInput"
  />
</template>

<script>
import marked from 'marked'

export default {
  name: 'MarkdownEditor',
  data: () => ({
    input: '# This is sample!'
  }),
  created() {
    if (this.input) {
      this.onChangeInput()
    }
  },
  methods: {
    onChangeInput() {
      const parsedInput = marked(this.input)
      this.$emit('input', this.input)
      this.$emit('marked', parsedInput)
    }
  }
}
</script>

<style scoped>
</style>
