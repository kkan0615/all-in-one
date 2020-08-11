<!--
  Author: Youngjin Kwak
  CreatedAt: 08-09-2020
  UpdatedAt: 08-09-2020
  Description: Search menu on popup
-->
<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="red lighten-2"
        text
        icon
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>
          search
        </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Search Menu
      </v-card-title>

      <v-card-text>
        <v-text-field
          ref="searchRefKey"
          v-model="searchText"
          class="my-2"
          outlined
        />
      </v-card-text>

      <v-divider />
      <v-card-text>
        <!-- @TODO menu list -->
        Menu list will be here
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          outlined
          text
          label="Search Menu"
          @click="closeDialog"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Ref, Watch } from 'vue-property-decorator'

@Component({
  name: 'SearchMenu',
})
export default class SearchMenu extends Vue {
  @Ref('searchRefKey') private searchRefKey !: HTMLInputElement

  private dialog = false
  private searchText = ''

  public closeDialog () {
    this.dialog = false
  }

  @Watch('dialog')
  private changeDialog (newValue: boolean) {
    if (newValue) {
      this.$nextTick(() => {
        this.searchRefKey.focus()
      })
    }
  }

}
</script>

