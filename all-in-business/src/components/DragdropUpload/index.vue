<template>
  <v-card
    color="primary"
  >
    <input ref="uploadInputRef" class="excel-upload-input" type="file" @change="changeInput">
    <div @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
      <slot />
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'DragdropUpload'
})
export default class extends Vue {
  @Prop({ default: 'files' }) public type !: 'single' | 'multiple'
  $refs !: {
      uploadInputRef: HTMLInputElement
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

  public changeInput(e) {
    console.log(e)
  }

  public upload(data: any) {
    console.log(data)
  }
}
</script>
