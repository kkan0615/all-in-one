<!--
  Author: Youngjin Kwak
  CreatedAt: 08-02-2020
  UpdatedAt: 08-02-2020
  Description: Sample Vue Page
-->
<template>
  <dx-data-grid
    key-expr="ID"
    :data-source="dataSource"
    :show-borders="true"
    :show-row-lines="true"
    :row-alternation-enabled="true"
    :remote-operations="false"
    :allow-column-reordering="true"
    :selected-row-keys="selectedRowKeys"
    :show-info="true"
    @selection-changed="onSelectionchange"
    @row-click="onRowClick"
  >
    <dx-scrolling
      mode="infinite"
    />
    <dx-selection
      mode="single"
    />
    <dx-group-panel
      :visible="true"
    />
    <dx-search-panel
      :visible="true"
      :highlight-case-sensitive="true"
    />
    <dx-column-chooser
      mode="select"
      :allow-search="true"
      :enabled="true"
      :height="400"
    />
    <dx-grouping :auto-expand-all="false" />
    <dx-column data-field="CompanyName" />
    <dx-column data-field="City" />
    <dx-column data-field="State" />
    <dx-column data-field="Phone" />
    <dx-column data-field="Fax" />
  </dx-data-grid>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import {
  DxColumn,
  DxColumnChooser,
  DxDataGrid,
  DxGrouping,
  DxGroupPanel,
  DxPager,
  DxPaging,
  DxScrolling,
  DxSearchPanel,
  DxSelection
} from 'devextreme-vue/data-grid'
import { Column } from 'devextreme/ui/data_grid'
import { DxSelected } from '@/types/Devextreme'

/**
   * @author - Youngjin Kwak
   * @description -
   */
@Component({
  name: 'Gird',
  components: {
    DxDataGrid,
    DxColumn,
    DxPager,
    DxPaging,
    DxGroupPanel,
    DxSearchPanel,
    DxGrouping,
    DxColumnChooser,
    DxScrolling,
    DxSelection
  }
})
export default class Gird extends Vue {
  @Prop({ default: [], type: Array })
  private readonly dataSource!: Array<any>
  @Prop({ default: () => [], type: Array })
  private readonly column!: Array<Column>
  @Prop({ default: [], type: Array })
  private readonly selectedRowKeys!: Array<number>

  @Emit('onSelectionchange')
  private onSelectionchange (selected: DxSelected<any, number>) {
    console.log(selected)
    return selected
  }

  @Emit('onChangeSelectedRowKeys')
  private onRowClick (row: any) {
    return row.key === this.selectedRowKeys[0]
  }
}
</script>
