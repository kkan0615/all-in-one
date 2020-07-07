<template>
  <v-dialog
    v-if="value"
    :value="value"
    scrollable
    width="500"
    @click:outside="closeDialog"
    @input="inputChanged"
  >
    <v-card
      :color="detail.color"
    >
      <v-card-title
        class="headline"
        primary-title
      >
        {{ detail.title }}
        <v-spacer />
        <v-btn
          color="primary"
          icon
          @click="closeDialog"
        >
          <v-icon>
            close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text>
        {{ detail.endDate || 'All day' }}
      </v-card-text>
      <v-card-text v-html="detail.content">
        <v-card class="mx-auto" outlined v-html="detail.content" />
      </v-card-text>

      <!-- <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="closeDialog"
        >
          닫기
        </v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ToDoInterface } from '@/types/todo'

@Component({
  name: 'TodoDetailDialog'
})
export default class extends Vue {
  @Prop({ required: true }) private value !: boolean
  @Prop() private detail !: ToDoInterface

  private closeDialog() {
    this.$emit('update:value', false)
    this.$emit('input', false)
    this.$emit('close', false)
  }

  private inputChanged(bool: boolean) {
    if (!bool) {
      this.closeDialog()
    }
  }
}
</script>
