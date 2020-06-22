<template>
  <v-text-field
    v-if="isFocused"
    ref="numberBoxRef"
    v-model="numberInput"
    :hide-details="hideDetails"
    :label="label"
    outlined
    :rules="rules"
    type="number"
    @blur="onBlur"
    @change="changeValue"
  />
  <v-text-field
    v-else
    :value="numberFormatter"
    :placeholder="placeholder"
    :hide-details="hideDetails"
    :label="label"
    outlined
    @focus="onFocus"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { numberFormatter } from '@/utils/formaterUtils'

@Component({
  name: 'vNumberBox'
})
export default class extends Vue {
  @Prop({ default: false }) private hideDetails !: boolean
  @Prop({ default: '' }) private label !: string
  @Prop({ default: [] }) private rules !: Array<any>
  @Prop({ default: false }) private readonly !: boolean
  @Prop() private placeholder !: string
  @Prop() private value !: number

  private isFocused !: boolean
  private display !: string
  private numberInput !: number

  $refs !: {
    numberBoxRef: HTMLInputElement
  }

  constructor() {
    super()
    this.isFocused = false
    this.display = ''
    this.numberInput = this.value
  }

  public get numberFormatter() : string {
    if (!this.value) {
      // this.changeValue(0)
      this.$nextTick(() => {
        return numberFormatter(this.value)
      })
    } else {
      return numberFormatter(this.value)
    }
    return ''
  }

  private changeValue(v: number) {
    console.log(v)
    this.numberInput = v
    this.$emit('update: value', v)
    this.$emit('input', v)
    this.$emit('change', v)
  }

  private onBlur() {
    this.isFocused = false
    this.numberInput = this.value
    // this.changeValue(this.numberInput)
  }

  private onFocus() {
    this.isFocused = true
    this.focus()
  }

  public focus() {
    this.$nextTick(() => {
      this.$refs.numberBoxRef.focus()
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
