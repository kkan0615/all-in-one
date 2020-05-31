<template>
  <v-chip-group>
    <v-chip
      v-for="chip in chips"
      :key="chip.id"
    >
      {{ chip.name }}
    </v-chip>
  </v-chip-group>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'ProductChip'
})
export default class extends Vue {
  /** Can get every tags */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() private chips!: any
  // @Prop() private color = 'primary'
}
</script>

<style scoped>

</style>
