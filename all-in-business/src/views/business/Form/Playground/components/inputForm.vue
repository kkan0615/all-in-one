<template>
  <div>
    <v-text-field
      v-if="inputForm.option === 'textBox'"
      v-model="inputForm.value"
      :rules="[inputForm.validation ? rules.required : true]"
      :label="inputForm.label"
      clearable
      outlined
    />
    <v-text-field
      v-else-if="inputForm.option === 'emailBox'"
      v-model="inputForm.value"
      :rules="[inputForm.validation ? rules.required : true, rules.email]"
      :label="inputForm.label"
      clearable
      outlined
    />
    <vNumberBox
      v-else-if="inputForm.option === 'numberBox'"
      v-model="inputForm.value"
      :rules="[inputForm.validation ? rules.required : true]"
      :label="inputForm.label"
    />
    <!-- <v-text-field
      v-model="inputForm.value"
      type="number"
      :rules="[inputForm.validation ? rules.required : true]"
      :label="inputForm.label"
      clearable
      outlined
    /> -->
    <v-select
      v-else-if="inputForm.option === 'selectBox'"
      :items="inputForm.optionArray"
      :label="inputForm.label"
      item-text="value"
      item-value="code"
      outlined
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { InputFormInterface } from '../types'
import vNumberBox from '@/components/inputBox/vNumberBox.vue'

@Component({
  name: 'FormInput',
  components: {
    vNumberBox
  }

})
export default class extends Vue {
  @Prop() private inputForm !: InputFormInterface

  private rules = {
    required: (value : string): any => !!value || `${this.inputForm.label} is Required`,
    email: (value : string): any => /.+@.+/.test(value) || 'Email type is not valid'
  }
}
</script>

<style lang="scss" scoped>
</style>
