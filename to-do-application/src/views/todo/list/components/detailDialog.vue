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
      :light="islightColor"
      :dark="!islightColor"
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
          @click="editMode"
        >
          <v-icon>
            edits
          </v-icon>
        </v-btn>
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
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ToDoInterface } from '@/types/todo'
import { islightColor } from '@/uitls/color'

@Component({
  name: 'TodoDetailDialog'
})
export default class extends Vue {
  @Prop({ required: true }) private value !: boolean
  @Prop() private detail !: ToDoInterface

  public get islightColor() : boolean {
    return islightColor(this.detail.color)
  }

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

  private editMode() {
    this.$router.push({ name: 'ToDoCreate', query: { id: this.detail.id.toString() }})
  }
}
</script>
