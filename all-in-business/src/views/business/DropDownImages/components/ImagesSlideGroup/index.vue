<template>
  <v-slide-group
    dark
    show-arrows
  >
    <v-slide-item
      v-for="(image, i) in images"
      :key="i"
    >
      <v-card>
        <v-card-text>
          <v-img
            :src="image"
            class="fill-hight"
            :height="'15vh'"
            :width="300"
            :draggable="true"
            @dragstart="onDragStart($event, image)"
          />
        </v-card-text>
      </v-card>

    </v-slide-item>
  </v-slide-group>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'BusinessDropDownImagesGroup'
})
export default class extends Vue {
  @Prop() private images !: Array<string>

  public onDragStart(e: any, image: number) {
    e.dataTransfer.setData('text', image)
  }
}
</script>

<style lang="scss" scoped>
.fit-height {
  height: 80v;
}
</style>
