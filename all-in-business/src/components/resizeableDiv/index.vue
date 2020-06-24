<template>
  <v-card
    class="resizeable"
    @mouseup="resizeDrag"
  >
    <v-card-title>
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'moveableGrid'

})
export default class extends Vue {
  @Prop() private title !: string

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
