<template>
  <v-text-field
    v-if="visible=true"
    ref="numberBoxRef"
    :hide-details="hideDetails"
    :label="label"
    :rules="rules"
    @blur="onBlur"
  />
  <v-text-field
    v-else
    :hide-details="hideDetails"
    :label="label"
    :rules="rules"
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
  @Prop() private value !: number

  private visible !: boolean
  private temp !: string | number | null

  $refs !: {
    numberBoxRef: HTMLInputElement
  }

  constructor() {
    super()
    this.visible = false
    this.temp = null
  }

  private onBlur() {
    this.visible = false
  }

  private onFocus() {
    this.visible = true
    this.temp = this.value
    this.value = numberFormatter(this.value)
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
