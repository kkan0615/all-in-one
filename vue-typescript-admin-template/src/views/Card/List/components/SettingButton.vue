<!--
  Author: Youngjin Kwak
  CreatedAt: 11-21-2020
  UpdatedAt: 11-21-2020
  Description: Setting for grid or Table
-->
<template>
  <v-menu
    offset-y
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-2"
        color="primary"
        elevation="0"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon
          left
        >
          settings
        </v-icon>
        grid
      </v-btn>
    </template>
    <v-card
      color="secondary"
      tile
      min-width="280px"
    >
      <v-list
        dense
        color="primary"
      >
        <v-list-item>
          <v-list-item-icon
            class="mr-3"
          >
            <v-icon>settings</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="text-subtitle-1"
            >
              Vue-Admin-Template
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-text
        class="pa-0"
      >
        <!--        <v-list-->
        <!--          v-if="typeOfViews === 'grid'"-->
        <!--          color="primary"-->
        <!--        >-->
        <!--          <v-list-item>-->
        <!--            <v-select-->
        <!--              :value="currentGridColumnSize"-->
        <!--              outlined-->
        <!--              color="primary"-->
        <!--              label="Column Size"-->
        <!--              :items="columnsSizeOptions"-->
        <!--              hide-details-->
        <!--              dense-->
        <!--              @change="changeCurrentGridColumnSize"-->
        <!--            />-->
        <!--          </v-list-item>-->
        <!--        </v-list>-->
        <!--        <v-list-->
        <!--          v-if="typeOfViews === 'table'"-->
        <!--          color="primary"-->
        <!--        >-->
        <!--          <v-list-item>-->
        <!--            <v-select-->
        <!--              :value="currentPagingSize"-->
        <!--              outlined-->
        <!--              color="primary"-->
        <!--              label="Paging Size"-->
        <!--              :items="pagingSizeOptions"-->
        <!--              hide-details-->
        <!--              dense-->
        <!--              @change="changeCurrentPagingSize"-->
        <!--            />-->
        <!--          </v-list-item>-->
        <!--        </v-list>-->
        <!-- View Type Part -->
        <v-list
          color="secondary"
          dense
          flat
        >
          <v-subheader>View Type</v-subheader>
          <v-list-item-group
            color="primary"
            :value="numberTypeOfViews"
            @change="changeTypeOfViews"
          >
            <!--            &lt;!&ndash; Table &ndash;&gt;-->
            <!--            <v-list-item>-->
            <!--              <v-list-item-icon>-->
            <!--                <v-icon>table_chart</v-icon>-->
            <!--              </v-list-item-icon>-->
            <!--              <v-list-item-content>-->
            <!--                <v-list-item-title>-->
            <!--                  Table-->
            <!--                </v-list-item-title>-->
            <!--              </v-list-item-content>-->
            <!--            </v-list-item>-->
            <!--            &lt;!&ndash; Grid &ndash;&gt;-->
            <!--            <v-list-item>-->
            <!--              <v-list-item-icon>-->
            <!--                <v-icon>view_comfy</v-icon>-->
            <!--              </v-list-item-icon>-->
            <!--              <v-list-item-content>-->
            <!--                <v-list-item-title>-->
            <!--                  Grid-->
            <!--                </v-list-item-title>-->
            <!--              </v-list-item-content>-->
            <!--            </v-list-item>-->
            <v-list-item
              v-for="type in viewTypeList"
              :key="type.dataField"
            >
              <v-list-item-icon>
                <v-icon>{{ type.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ type.caption }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import {
  DEFAULT_GRID_COLUMN_SIZE,
  DEFAULT_TABLE_PAGING_SIZE
} from '@/views/Card/List/data/defaultValues'
import { TypeOfViews, TypeOfVisible, ViewTypeList } from '@/views/Card/List/types/settings'
import { viewTypeList } from '@/views/Card/List/data/settings'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'SettingButton',
})
export default class SettingButton extends Vue {
  @Prop({ type: Number, required: true, default: DEFAULT_GRID_COLUMN_SIZE })
  private readonly currentGridColumnSize !: number
  @Prop({ type: Number, required: true, default: DEFAULT_TABLE_PAGING_SIZE })
  private readonly currentPagingSize !: number
  @Prop({ type: String, required: true })
  private readonly typeOfViews!: TypeOfViews
  @Prop({ type: String, required: true })
  private readonly typeOfVisible!: TypeOfVisible

  private columnsSizeOptions = [6, 4, 3, 2]
  private pagingSizeOptions = [8, 6, 5, 4]
  private viewTypeList = viewTypeList

  private get numberTypeOfViews () {
    console.log(this.typeOfViews === 'table' ? 0 : 1)
    return this.typeOfViews === 'table' ? 0 : 1
  }

  @Emit('changeCurrentGridColumnSize')
  private changeCurrentGridColumnSize (currentGridColumnSize: number) {
    this.$emit('update:currentGridColumnSize', currentGridColumnSize)
    return currentGridColumnSize
  }

  @Emit('changeCurrentPagingSize')
  private changeCurrentPagingSize (currentPagingSize: number) {
    this.$emit('update:currentPagingSize', currentPagingSize)
    return currentPagingSize
  }

  @Emit('changeTypeOfViews')
  private changeTypeOfViews (selectedListIndex: number) {
    const typeOfViews = this.viewTypeList[selectedListIndex].dataField
    this.$emit('update:typeOfViews', typeOfViews)
    return typeOfViews
  }
}
</script>
