<!--
  Author: Youngjin Kwak
  CreatedAt: 08-24-2020
  UpdatedAt: 08-24-2020
  Description: Snackbar Alert Component
-->
<template>
  <v-snackbar
    v-model="visible"
    :color="snackbar.color"
    :timeout="snackbar.timeout"
    top
    multi-line
    @input="onChangeVisible"
  >
    {{ snackbar.content }}

    <template v-slot:action="{ attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        @click="onCloseSnackbar"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SnackbarState } from '@/store/modules/alert'

@Component({
  name: 'AlertSnackbar',
})
export default class AlertSnackbar extends Vue {
  private visible = false
  private snackbar = new SnackbarState()

  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'alert/showSnackBar') {
        this.snackbar.content = state.alert.snackbar.content
        this.snackbar.color = state.alert.snackbar.color
        this.snackbar.timeout = state.alert.snackbar.timeout
        this.snackbar.callback = state.alert.snackbar.callback
        this.visible = true
      }
    })
  }

  private onCloseSnackbar () {
    this.visible = false
    if (this.snackbar.callback) {
      this.snackbar.callback()
    }
  }

  private onChangeVisible (visible: boolean) {
    if (!visible) {
      if (this.snackbar.callback) {
        this.snackbar.callback()
      }
    }
  }
}
</script>
