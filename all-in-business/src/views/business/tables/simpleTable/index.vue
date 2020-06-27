<template>
  <div>
    <v-card>
      <v-card-title>
        Inline Edit Table
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :items="items"
        :headers="columns"
        :search="search"
        :calculate-widths="true"
      >
        <!-- <template #body="{ items }">
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <td>
                <v-text-field
                  v-model="item.ITEMCODE"
                  hide-details
                />
              </td>
              <td>
                <v-text-field
                  v-model="item.ITEMNAME"
                  hide-details
                />
              </td>
              <td>
                <vNumberBox
                  v-model="item.PRICE"
                  :outlined="false"
                />
              </td>
              <td>{{ item.UNIT }}</td>
            </tr>
          </tbody>
        </template> -->
        <template v-if="status === 'edit'" #item.ITEMCODE="props">
          <v-text-field
            v-model="props.item.ITEMCODE"
            hide-details
          />
        </template>
        <template v-if="status === 'edit'" #item.ITEMNAME="props">
          <v-text-field
            v-model="props.item.ITEMNAME"
            hide-details
          />
        </template>
        <template v-if="status === 'edit'" #item.PRICE="props">
          <vNumberBox
            v-model="props.item.PRICE"
            :outlined="false"
          />
        </template>
        <template v-else #item.PRICE="props">
          <div>{{ numberFormatter(props.item.PRICE) }}</div>
        </template>
        <template v-if="status === 'edit'" v-slot:item.actions="{ item }">
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
      <v-card-actions>
        <v-btn @click="addNewItem">New Item</v-btn>
        <v-btn @click="editTable">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ColumnInterface } from '@/types/columns'
import { numberFormatter } from '@/utils/formaterUtils'

import { columns } from './data/columns'
import { ItemInterface, fakeItems } from './data/items'
import vNumberBox from '@/components/inputBox/vNumberBox.vue'

@Component({
  name: 'InlineEditTable',
  components: {
    vNumberBox
  }
})
export default class extends Vue {
  private items: Array<ItemInterface>
  private columns : Array<ColumnInterface>
  private search !: string
  private status !: 'edit' | 'read' | 'new'

  constructor() {
    super()
    this.items = []
    this.columns = columns
    this.search = ''
    this.status = 'read'
  }

  created() {
    this.items = JSON.parse(JSON.stringify(fakeItems))
  }

  private numberFormatter(num: number) {
    return numberFormatter(num)
  }

  private editTable() {
    switch (this.status) {
      case 'edit':
        this.status = 'read'
        const index = this.columns.findIndex(e => e.text === 'ACTIONS')
        this.columns.splice(index, 1)
        break

      default:
        this.status = 'edit'
        this.columns.push({
          text: 'ACTIONS',
          textId: 'actions',
          value: 'actions',
          type: 'actionBox'
        })
        break
    }
  }

  private addNewItem() {
    this.items.push({
      ITEMCODE: '',
      ITEMNAME: '',
      PRICE: 0,
      UNIT: ''
    })
  }

  private deleteItem(item: any) {
    const index = this.items.indexOf(item)
    this.items.splice(index, 1)
  }
}
</script>

<style lang="scss" scoped>
</style>
