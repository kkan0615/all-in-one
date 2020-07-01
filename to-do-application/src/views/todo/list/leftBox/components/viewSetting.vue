<template>
  <v-menu>
    <template #activator="{ on: onMenu }">

      <v-tooltip bottom>
        <template #activator="{ on: onTooltip }">
          <v-btn
            color="primary"
            icon
            v-on="{ ...onMenu, ...onTooltip }"
          >
            <v-icon>
              category
            </v-icon>
          </v-btn>
        </template>

        <span>View Setting</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item
        v-for="(menu, index) in menus"
        :key="index"
        @click="changeView(menu)"
      >
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { ViewSettingListInterface } from '../types/viewSettingList'
import { viewSettingList } from '../data/viewSettingList'

@Component({
  name: 'TodoListViewSetting'
})
export default class extends Vue {
  private menus !: Array<ViewSettingListInterface>

  constructor() {
    super()
    this.menus = viewSettingList
  }

  private changeView(menu: ViewSettingListInterface) {
    console.log(menu)
    this.$emit('changeView')
  }
}
</script>
