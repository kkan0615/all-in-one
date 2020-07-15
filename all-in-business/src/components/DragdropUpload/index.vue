<template>
  <v-card
    color="primary"
  >
    <input ref="uploadInputRef" :hidden="true" class="excel-upload-input" type="file" @change="changeInput">
    <div @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
      <slot>
        <div
          :style="style"
        >
          Drag file and drop here!
        </div>
      </slot>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'DragdropUploadBox'
})
export default class extends Vue {
  @Prop({ default: 'files' }) public type !: 'single' | 'multiple'
  $refs !: {
      uploadInputRef: HTMLInputElement
  }

  public get style(): string {
    let result = ''
    const isDark = this.$vuetify.theme.dark
    result += `border: 1px dotted ${isDark ? this.$vuetify.theme.themes.dark.primary : this.$vuetify.theme.themes.light.primary}; `
    result += 'height: 500px'
    return result
  }
  /**
   * when file drop in the area
   * @param e: event
   */
  public handleDrop(e: any) {
    e.stopPropagation()
    e.preventDefault()
    let transferredData = e.dataTransfer.files
    if (this.type === 'single') {
      transferredData = transferredData[0]
    }
    this.upload(transferredData)
  }

  public handleDragover(e: any) {
    e.stopPropagation()
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }

  public changeInput(e: any) {
    console.log(e)
  }

  public upload(data: any) {
    console.log(data)
    if (data && data[0]) {
      const reader = new FileReader()
      reader.onload = el => {
        if (!el.target) {
          return
        }
        const result = el.target.result
        /** If user used sync */
        this.$emit('update:url', result)
        /** Return function with name 'onChagedImage' */
        this.$emit('onChangeImage', result)
      }
      reader.onerror = error => {
        console.error(error)
      }
      reader.readAsDataURL(data[0])
      console.log(reader)
    }
  }
}
</script>
<style lang="scss">
</style>
