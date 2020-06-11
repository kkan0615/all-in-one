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
  private posX !: number
  private posY !: number
  private element !: HTMLElement | null

  constructor() {
    super()
    this.posX = 0
    this.posY = 0
    const exist = document.getElementById(this.table.id.toString())
    if (exist) {
      this.element = exist
    }
  }

  mounted() {
    const exist = document.getElementById(this.table.id.toString())
    if (exist) {
      this.element = exist
    }
  }

  beforeDestroy() {
    document.onmousemove = null
    document.onmouseup = null
  }

  public get style() : string {
    return `top: ${this.table.y}px; left: ${this.table.x}px;`
  }

  private onMousedown(e: any) {
    this.posX = e.clientX
    this.posY = e.clientY
    document.onmousemove = this.onElementDrag
    document.onmouseup = this.onCloseElementDrag
  }

  private onElementDrag(e: any) {
    e.preventDefault()
    const tempX = this.posX - e.clientX
    const tempY = this.posY - e.clientY
    this.posX = e.clientX
    this.posY = e.clientY

    if (this.element) {
      const newY = this.element.offsetTop - tempY
      const newX = this.element.offsetLeft - tempX

      this.element.style.top = `${newY}px`
      this.element.style.left = `${newX}px`

      this.posX = newX
      this.posY = newY
    }
    // this.table.x =
  }
  private onCloseElementDrag() {
    document.onmousemove = null
    document.onmouseup = null
    this.table.x = this.posX
    this.table.y = this.posY
  }
}
</script>

<style lang="scss" scoped>
.table {
  position: absolute;
}
</style>
