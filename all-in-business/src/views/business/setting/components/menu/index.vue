<template>
  <v-list :dark="true" shaped>
    <v-subheader>Menus</v-subheader>
    <v-list-item-group
      v-model="menu"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        @click="changeMenu"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'BusinessSettingMenu'
})
export default class extends Vue {
  private menu = 0
  private items = [
    { text: 'Design', icon: 'mdi-clock' },
    { text: 'Language', icon: 'mdi-account' },
    { text: 'Admin', icon: 'mdi-flag' }
  ]

  /**
   * changeMenu
   */
  public changeMenu() {
    console.log(this.menu)
  }
}
</script>

<style scoped>
</style>
