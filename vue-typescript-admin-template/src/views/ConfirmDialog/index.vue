<!--
  Author: Youngjin Kwak
  CreatedAt: 10-23-2020
  UpdatedAt: 10-23-2020
  Description: How to use Dialog
-->
<template>
  <div>
    <div
      class="my-4"
    >
      {{ display }}
    </div>
    <div>
      <v-text-field
        v-model="title"
        label="Title"
        outlined
        clearable
      />
      <v-text-field
        v-model="subtitle"
        label="Subtitle"
        outlined
        clearable
      />
      <v-text-field
        v-model="message"
        label="Message"
        outlined
        clearable
      />
    </div>
    <v-btn
      @click="openBasicConfirm"
    >
      Open basic
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @author - Youngjin Kwak
 * @description - How to use ConfirmDialog plugin
 */
@Component({
  name: 'Protocol',
})
export default class ConfirmDialog extends Vue {

  private title = 'Sample of Confirm Dialog'
  private subtitle = ''
  private message = 'Would like to continue to see next message?'
  private display = ''

  private async openBasicConfirm () {
    const confirmed = await this.$confirm.confirm(this.message, {
      title: this.title,
      subtitle: this.subtitle
    })

    if (confirmed) this.display = 'Hello ~ U found this message'
    else this.display = 'If you would like to see secret message, press yes !'
  }
}
</script>
