<!--
  Author: Youngjin Kwak
  CreatedAt: 08-02-2020
  UpdatedAt: 08-02-2020
  Description: Sample Vue Page
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
      tile
      min-width="280px"
    >
      <v-card-text
        class="pa-0"
      >
        <v-list
          color="primary"
        >
          <v-list-item>
            <v-select
              :value="columnSize"
              outlined
              color="primary"
              label="Column Size"
              :items="columnsSizeOptions"
              hide-details
              dense
              @change="changeVisibleGridNumber"
            />
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { DEFAULT_GRID_COLUMN_SIZE } from '@/views/Card/List/data/defaultValues'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'SettingButton',
})
export default class SettingButton extends Vue {
  @Prop({ type: Number, required: true, default: DEFAULT_GRID_COLUMN_SIZE })
  private columnSize !: number

  private columnsSizeOptions = [6, 4, 3, 2]

  @Emit('changeVisibleGridNumber')
  private changeVisibleGridNumber (currentCol: number) {
    return currentCol
  }
}
</script>
