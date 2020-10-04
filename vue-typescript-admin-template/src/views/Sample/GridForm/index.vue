<template>
  <div>
    <v-row>
      <v-col
        :cols="12"
      >
        <top-filter
          :title="$route.meta.title"
        />
      </v-col>
      <v-col
        :cols="selectedRow && selectedRow.ID !== undefined ? 8 : 12"
      >
        <grid
          :data-source="dataSource"
          :selected-row-keys="selectedRowKeys"
          @onSelectionchange="onSelectionchange"
          @onChangeSelectedRowKeys="onChangeSelectedRowKeys"
        />
      </v-col>
      <v-slide-x-reverse-transition>
        <v-col
          v-if="selectedRow && selectedRow.ID !== undefined"
          :cols="4"
        >
          <v-card
            color="secondary"
            elevation="0"
            class="sticky"
          >
            <v-card-text>
              {{ selectedRow }}
            </v-card-text>
          </v-card>
        <!--        <form />-->
        </v-col>
      </v-slide-x-reverse-transition>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  DxDataGrid,
  DxColumn,
  DxPager,
  DxPaging,
  DxGroupPanel,
  DxSearchPanel,
  DxGrouping,
  DxColumnChooser,
  DxScrolling
} from 'devextreme-vue/data-grid'
import TopFilter from '@/components/TopFIlter/index.vue'
import Grid from './components/Grid.vue'
import Form from './components/Form.vue'
import { testDataSource } from '@/views/Sample/GridForm/data'
import { DxSelected } from '@/types/Devextreme'

@Component({
  name: 'Test',
  components: {
    TopFilter,
    Grid,
    Form,
    DxDataGrid,
    DxColumn,
    DxPager,
    DxPaging,
    DxGroupPanel,
    DxSearchPanel,
    DxGrouping,
    DxColumnChooser,
    DxScrolling
  }
})
export default class Test extends Vue {
  private dataSource = testDataSource
  private selectedRowKeys: Array<number> = []
  private selectedRow = Vue.observable<any>({})

  private onSelectionchange (selected: DxSelected<any, number>) {
    if (!selected || !selected.selectedRowsData || !selected.selectedRowKeys) return
    this.selectedRowKeys = selected.selectedRowKeys
    this.selectedRow = selected.selectedRowsData[0]
  }

  private onChangeSelectedRowKeys (bool: boolean) {
    if (bool)
      this.selectedRowKeys = []
  }
}
</script>
