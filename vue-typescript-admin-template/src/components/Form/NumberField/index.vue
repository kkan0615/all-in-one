<!--
  Author: Youngjin Kwak
  CreatedAt: 10-29-2020
  UpdatedAt: 11-09-2020
  Description: Number input box component
-->
<template>
  <v-text-field
    v-if="currentField === 'text'"
    ref="textField"
    :value="formattedNumber"
    @focus="onFocusTextField"
  />
  <v-text-field
    v-else
    ref="numberField"
    :value="numberValue"
    type="number"
    @blur="onBlurNumberField"
    @input="onInputNumberField"
  />
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

  @Ref('numberField')
  private readonly numberField !: HTMLInputElement

  private currentField: 'number' | 'text' = 'text'

  public get stringValue (): string {
    return this.value.toString()
  }

  public get numberValue (): number {
    return typeof this.value === 'string' ? parseFloat(this.value) : this.value
  }

  public get formattedNumber () {
    return localeFormattedNumber(this.value, this.minimumFractionDigits)
  }

  public async onFocusTextField () {
    await this.changeCurrentField()
    this.numberField.focus()
  }

  public async onBlurNumberField () {
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
