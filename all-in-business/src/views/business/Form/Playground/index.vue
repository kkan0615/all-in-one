<template>
  <section>
    <Generator />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Generator from './components/generator.vue'

@Component({
  name: 'Playground',
  components: {
    Generator
  }

})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
