<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ToDoList'
})
export default class extends Vue {
  private msg!: string;

  constructor() {
    super()
    this.msg = 'test'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
