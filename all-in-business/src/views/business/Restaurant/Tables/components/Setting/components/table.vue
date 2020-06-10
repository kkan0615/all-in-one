<template>
  <v-card
    :id="table.id"
    class="table"
    :style="style"
    :draggable="true"
    @dragstart="onDragstart"
  >
    <v-card-text>
      {{ table.name }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TableInterface } from '../../../types/table'

@Component({
  name: 'Table'

})
export default class extends Vue {
  @Prop() private table !: TableInterface

  public get style() : string {
    return `top: ${this.table.y}px; left: ${this.table.x}px;`
  }

  private onDragstart(e: any) {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', this.table.id.toString())
    console.log(e.dataTransfer.getData('text/plain'))
  }
}
</script>

<style lang="scss" scoped>
.table {
  position: absolute;
}
</style>
