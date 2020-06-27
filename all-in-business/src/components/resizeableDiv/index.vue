<template>
  <v-card
    :style="`width: ${width}; height: ${height};`"
    class="resizeable ma-2"
    @resize="resizeDrag"
  >
    <slot />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'moveableGrid'

})
export default class extends Vue {
  @Prop() private title !: string
  @Prop({ default: '32%' }) private width !: string | number
  @Prop({ default: '300px' }) private height !: string | number
  @Prop({ required: false }) private text !: string

  private resizeDrag(event: any) {
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
