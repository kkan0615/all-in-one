<template>
  <v-card>
    <v-card-text>
      <v-text-box
        v-if="inputType.type === 'textBox'"
        v-model="inputType.value"
        :rules="inputType.validation ? [rules.required] : ''"
        :label="inputType.label"
        clearable
        outlined
      />
      <v-text-box
        v-if="inputType.type === 'numberBox'"
        v-model="inputType.value"
        :rules="inputType.validation ? [rules.required] : ''"
        :label="inputType.label"
        clearable
        outlined
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { FormInterface } from '../types'

@Component({
  name: 'FormInput'

})
export default class extends Vue {
  @Prop() private inputType !: FormInterface

  private rules = {
    required: (value : string): any => !!value || `${this.inputType.label} is Required`
  }
}
</script>

<style lang="scss" scoped>
</style>
