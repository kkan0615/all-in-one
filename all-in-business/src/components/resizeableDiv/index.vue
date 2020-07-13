<template>
  <div
    :style="`width: ${width}; height: ${height};`"
    class="resizeable ma-2"
    @mousemove="resizeDrag"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'moveableGrid'

})
export default class extends Vue {
  @Prop() private title !: string
  @Prop({ default: '100%' }) private width !: string | number
  @Prop({ default: '100%' }) private height !: string | number
  @Prop({ required: false }) private text !: string

  public resizeDrag(event: any) {
    console.log(event)
  }
}
</script>

<style lang="scss" scoped>
/** Use a class to make resizeable */
.resizeable {
  border: 0px solid;
  resize: both;
  overflow: auto;
}

.draggable {
  position: absolute;
  z-index: 9;
}
</style>
