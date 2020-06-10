<template>
  <div
    @dragover="onDragover"
    @dragend="onDragend"
  >
    lol

    <Table
      v-for="table in tables"
      :key="table.id"
      :table="table"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TableInterface } from '../../types/table'
import Table from './components/table.vue'

@Component({
  name: 'BusinessRestaurnatTablesSetting',
  components: {
    Table
  }

})
export default class extends Vue {
  private tables: Array<TableInterface> = [
    {
      id: 0,
      name: 'table',
      x: 500,
      y: 400
    }
  ]

  private onDragover(e: any) {
    const data = e.dataTransfer.getData('text/plain')

    // const data = e.dataTransfer.getData('text')
    console.log(e.dataTransfer.getData('text/plain'))

    const table = this.tables.find(e => e.id === data)

    if (table) {
      table.x = e.x
      table.y = e.y
    }
  }

  private onDragend(e: any) {
    const data = e.dataTransfer.getData('text')

    const table = this.tables.find(e => e.id === data)
    if (table) {
      table.x = e.y
      table.y = e.x
    }
  }
}
</script>

<style scoped>
</style>
