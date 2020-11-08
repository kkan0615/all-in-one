<!--
  Author: Youngjin Kwak
  CreatedAt: 11-07-2020
  UpdatedAt: 11-07-2020
  Description: Sample Vue Page
-->
<!--
@TODO
  1. Add Window Event
-->
<template>
  <!-- Vuetify Autocomplete cannot control width without Cols -->
  <v-col
    :cols="4"
  >
    <v-autocomplete
      ref="searchBar"
      class="pa-0"
      prepend-inner-icon="search"
      clearable
      placeholder="Search (Press CTRL + /)"
      filled
      rounded
      dense
      hide-details
    />
  </v-col>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'

/**
   * @author - Youngjin Kwak
   * @description -
   */
@Component({
  name: 'SearchBar',

})
export default class SearchBar extends Vue {
  @Ref('searchBar')
  private readonly searchBar !: HTMLInputElement

  mounted () {
    window.addEventListener('keyup', this.keyEventHandler)
  }

  beforeDestroy () {
    window.removeEventListener('keyup', this.keyEventHandler)
  }

  private keyEventHandler (event: KeyboardEvent) {
    if (event.ctrlKey && event.key === '/')
      this.focusToBar()
  }

  private focusToBar () {
    this.searchBar.focus()
  }
}
</script>
