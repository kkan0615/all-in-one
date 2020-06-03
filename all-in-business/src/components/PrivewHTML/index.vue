<template>
  <div
    id="preview"
    class="pa-4"
    :style="style"
    v-html="input"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'PreviewHTML'
})
export default class extends Vue {
  @Prop() private input !: string
  @Prop({ default: '80vh' }) private height !: string
  @Prop({ default: false }) private noResize !: boolean

  public get style() : string {
    let result = ''
    result += `height: ${this.height}; `
    result += `overflow-y: ${this.noResize ? 'unset' : 'auto'}; \n`
    return result
  }
}
</script>

<style lang="scss" scoped>
</style>
