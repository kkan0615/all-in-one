<!--
  Author: Youngjin Kwak
  CreatedAt: 10-29-2020
  UpdatedAt: 11-12-2020
  Description: Number input box component
-->
<template>
  <v-text-field
    v-if="currentField === 'text'"
    ref="textField"
    :value="formattedNumber"
    :outlined="outlined"
    :readonly="readonly"
    :disabled="disabled"
    :suffix="suffix"
    :color="color"
    :label="label"
    :rules="rules"
    @focus="onFocusTextField"
  >
    <template
      #label
    >
      <slot name="label" />
    </template>
  </v-text-field>
  <v-text-field
    v-else
    ref="numberField"
    :value="numberValue"
    type="number"
    :outlined="outlined"
    :readonly="readonly"
    :disabled="disabled"
    :suffix="suffix"
    :color="color"
    :label="label"
    :rules="innerRules"
    @blur="onBlurNumberField"
    @input="onInputNumberField"
  >
    <template
      #label
    >
      <slot name="label" />
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from 'vue-property-decorator'
import { localeFormattedNumber } from '@/utils/number'

/**
 * @author - Youngjin Kwak
 * @description - Number input box
 */
@Component({
  name: 'NumberField',
})
export default class NumberField extends Vue {
  @Prop({ type: [Number, String], required: true })
  private readonly value !: number | string
  @Prop({ type: Number, required: false, default: undefined })
  private readonly minimumFractionDigits !: number | undefined
  /* Vuetify states(data) */
  @Prop({ type: String, required: false, default: '' })
  private readonly label !: string
  @Prop({ type: Boolean, required: false, default: false })
  private readonly outlined !: boolean
  @Prop({ type: Boolean, required: false, default: false })
  private readonly readonly !: boolean
  @Prop({ type: Boolean, required: false, default: false })
  private readonly disabled !: boolean
  @Prop({ type: String, required: false, default: '' })
  private readonly suffix !: string
  @Prop({ type: String, required: false, default: '' })
  private readonly color !: string
  @Prop({ type: Array, required: false, default: () => [] })
  private readonly rules !: Array<any>

  @Ref('numberField')
  private readonly numberField !: HTMLInputElement

  private currentField: 'number' | 'text' = 'text'
  private innerRules: Array<any> = []

  public get stringValue (): string {
    return this.value.toString()
  }

  public get numberValue (): number {
    return typeof this.value === 'string' ? parseFloat(this.value) : this.value
  }

  public get formattedNumber () {
    const formatted = localeFormattedNumber(this.value, this.minimumFractionDigits)
    console.log(formatted === 'NaN' ? formatted : '')
    return formatted === 'NaN' ? '' : formatted
  }

  public async onFocusTextField () {
    await this.changeCurrentField()
    this.numberField.focus()
  }

  public async onBlurNumberField () {
    if (!this.innerRules.length) this.innerRules = this.rules
    await this.changeCurrentField()
  }

  private onInputNumberField (num: number) {
    this.$emit('update:value', num)
    this.$emit('input', num)
    this.$emit('change', num)
  }

  @Emit('change:currentField')
  private async changeCurrentField () {
    this.currentField === 'text' ? this.currentField = 'number' : this.currentField = 'text'
    return Promise.resolve(this.currentField)
  }
}
</script>
