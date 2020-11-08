<!--
  Author: Youngjin Kwak
  CreatedAt: 08-24-2020
  UpdatedAt: 11-08-2020
  Description: Snackbar Alert Component
-->
<template>
  <v-snackbar
    v-if="snackbar"
    v-model="visible"
    :color="snackbar.color"
    :timeout="snackbar.timeout"
    top
    multi-line
    @input="onChangeVisible"
  >
    <template #default>
      <div>
        {{ snackbar.content }}
      </div>
      <div
        v-if="snackbar.code"
      >
        Code: {{ snackbar.code }}
      </div>
    </template>
    <template v-slot:action="{ attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        @click="onCloseSnackbar"
      >
        close
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
  private snackbar: SnackbarState | null = null

  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'alert/showSnackBar') {
        if (this.snackbar) this.snackbar = null
        this.snackbar = new SnackbarState(state.alert.snackbar)
        this.visible = true
      }
    })
  }

  private onCloseSnackbar () {
    this.visible = false
    if (this.snackbar && this.snackbar.callback) {
      this.snackbar.callback()
    }
    this.snackbar = null
  }

  private onChangeVisible (visible: boolean) {
    if (!visible) {
      if (this.snackbar &&  this.snackbar.callback) {
        this.snackbar.callback()
      }
      this.snackbar = null
    }
  }
}
</script>
