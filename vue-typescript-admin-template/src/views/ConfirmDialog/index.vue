<!--
  Author: Youngjin Kwak
  CreatedAt: 10-23-2020
  UpdatedAt: 10-23-2020
  Description: How to use Dialog
-->
<template>
  <div>
    <top-filter
      :title="$route.meta.title"
    />
    <v-card
      color="secondary"
      class="my-4"
    >
      <v-card-title>
        Return
      </v-card-title>
      <v-card-text>
        {{ display }}
      </v-card-text>
    </v-card>
    <v-card
      color="secondary"
    >
      <v-card-title>
        Test Form
      </v-card-title>
      <v-divider />
      <v-card-text>
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
      </v-card-text>
      <v-divider />
      <v-card-actions
        class="justify-end"
      >
        <v-btn
          color="primary"
          @click="openBasicConfirm"
        >
          Open basic
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopFilter from '@/components/TopFIlter/index.vue'

/**
 * @author - Youngjin Kwak
 * @description - How to use ConfirmDialog plugin
 */
@Component({
  name: 'Protocol',
  components: { TopFilter },
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

    if (confirmed) this.display = 'Success to press "Yes"'
    else this.display = 'Success to press "No"'
  }
}
</script>
