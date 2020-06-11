<template>
  <v-card
    :id="table.id"
    class="table"
    :style="style"
    :draggable="true"
    @mousedown="onMousedown"
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

  private onMousedown(e: any) {
    console.log(e)
    this.table.x = e.clientX
    this.table.y = e.clientY
    document.onmousemove = this.onElementDrag
    document.onmouseup = this.onCloseElementDrag
  }

  private onElementDrag(e: any) {
    e.preventDefault()
    this.table.x -= e.clientX
    this.table.y -= e.clientY
  }
  private onCloseElementDrag() {
    document.onmousemove = null
    document.onmouseup = null
  }

  private onDragstart(e: any) {
    // e.dataTransfer.effectAllowed = 'move'
    // e.dataTransfer.setData('text', this.table.id.toString())
    // console.log(e.dataTransfer.getData('text'))
    console.log(e)
    const table = document.getElementById(this.table.id.toString())
    if (table) {
      table.style.display = 'none'
    }

    this.table.x = e.clientX
    this.table.y = e.clientY
  }

  private onDragend(e:any) {
    console.log(e)
    const table = document.getElementById(this.table.id.toString())
    if (table) {
      table.style.display = 'unset'
    }
    this.table.x = e.clientX
    this.table.y = e.clientY
  }

  private onDrop(e: any) {
    console.log('onDrOP')
    console.log(e)
  }

  private onDragover(e: any) {
    e.preventDefault()
  }
}
</script>

<style lang="scss" scoped>
.table {
  position: absolute;
}
</style>
