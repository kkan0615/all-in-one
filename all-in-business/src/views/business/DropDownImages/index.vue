<template>
  <section class="fit-height">
    <v-row>
      <v-col
        cols="6"
        lg="6"
        xl="6"
        md="6"
        sm="6"
        xs="6"
      >
        <v-card
          :color="'grey'"
        >
          <v-img
            height="60vh"
            :src="firstImage"
            :draggable="false"
            @dragstart="onDragStart"
            @drop.prevent="onDropFirstImage"
            @dragover="onDragOver"
          >
            <v-card-text v-if="!firstImage" class="text-center">
              Drop down the image to here!
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
      <v-col
        cols="6"
        lg="6"
        xl="6"
        md="6"
        sm="6"
        xs="6"
      >
        <v-card
          :color="'grey'"
        >
          <v-img
            height="60vh"
            :src="secondImage"
            @dragstart="onDragStart"
            @drop.prevent="onDropSecondImage"
            @dragover="onDragOver"
          >
            <v-card-text v-if="!secondImage" class="text-center">
              Drop down the image to here!
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-card
      height="20vh"
      :dark="true"
      class="pa-2 overflow-auto"
    >
      <BusinessDropDownImagesGroup
        :images="images"
      />
    </v-card>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BusinessDropDownImagesGroup from './components/ImagesSlideGroup/index.vue'

@Component({
  name: 'BusinessDropDownImages',
  components: {
    BusinessDropDownImagesGroup
  }
})
export default class extends Vue {
  private firstImage = ''
  private secondImage = ''
  private images = [
    'https://cdn.britannica.com/s:700x500/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg',
    'https://cdn.britannica.com/s:300x300/36/69636-050-81A93193/Self-Portrait-artist-panel-board-Vincent-van-Gogh-1887.jpg',
    'https://cdn.britannica.com/s:700x500/41/181941-050-DBEBA6D5/Old-Tower-canvas-oil-cardboard-Fields-Vincent-1884.jpg',
    'https://cdn.britannica.com/s:700x500/78/69678-050-491A5ED8/Bedroom-oil-canvas-Vincent-van-Gogh-Art-1889.jpg',
    'https://cdn.britannica.com/s:700x500/22/134022-050-8F6CF8E5/Portrait-Joseph-Roulin-oil-canvas-France-Arles-1889.jpg'
  ]

  public onDropFirstImage(e: any) {
    const transferedImage = e.dataTransfer.getData('text')

    if (transferedImage && transferedImage !== '') {
      this.firstImage = transferedImage
    }
  }

  public onDropSecondImage(e: any) {
    const transferedImage = e.dataTransfer.getData('text')

    if (transferedImage && transferedImage !== '') {
      this.secondImage = transferedImage
    }
  }

  public onDragOver(e: Event) {
    e.preventDefault()
  }

  public onDragStart(e: any) {
    e.returnValue = false
  }
}
</script>

<style lang="scss" scoped>
.fit-height {
  height: 80v;
}
</style>
