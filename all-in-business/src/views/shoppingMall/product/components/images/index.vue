<template>
  <v-img
    :src="currentImage.path"
    :height="800"
  >
    <div class="pa-8">
      <v-row
        v-if="imagesType === 'array'"
        align="start"
        justify="start"
        no-gutters
      >
        <v-col
          cols="2"
          xl="2"
          lg="2"
          md="2"
          sm="2"
          xs="2"
        >
          <v-col
            cols="12"
            xl="12"
            lg="12"
            md="12"
            sm="12"
            xs="12"
          >
            <v-btn icon>
              <v-icon
                @click="onClickAngleUp"
              >
                fas fa-angle-up
              </v-icon>
            </v-btn>

          </v-col>
          <v-col
            v-for="(image, i) in showingImagesArray"
            :key="i"
            cols="12"
            xl="12"
            lg="12"
            md="12"
            sm="12"
            xs="12"
          >
            <div class="grow-transiton">
              <v-img
                :class="image === currentImage ? 'selected' : ''"
                :src="image.path"
                @mouseover="onClickImage(image)"
              />
            </div>
          </v-col>
          <v-col
            cols="12"
            xl="12"
            lg="12"
            md="12"
            sm="12"
            xs="12"
          >
            <v-btn icon>
              <v-icon
                @click="onClickAngleDown"
              >
                fas fa-angle-down
              </v-icon>
            </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </div>
  </v-img>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SlideCreater } from '@/utils/slideArrayUtils'

@Component({
  name: 'ShoppingMallProductImages'
})
export default class extends Vue {
  @Prop() private images !: any

  private currentImage : object | null
  private imagesType ?: string
  private showIndex !: number
  private showingImagesArray: Array<any> = []
  private slideCreater: any

  constructor() {
    super()
    this.currentImage = {}
    this.showIndex = 3
    // this.slideCreater = new SlideCreater(this.images, this.showIndex)
  }

  initCurrentImage(images: any) {
    const type = typeof images

    if (type === 'object') {
      if (Array.isArray(this.images)) {
        this.imagesType = 'array'
        this.currentImage = images[0]
        this.slideCreater = new SlideCreater(this.images, this.showIndex)
        this.showingImagesArray = this.slideCreater.getFirstArray()
        return
      }
      this.imagesType = 'object'
      this.currentImage = images
    } else {
      this.imagesType = 'null'
      this.currentImage = null
    }
  }

  onClickAngleUp() {
    this.showingImagesArray = this.slideCreater.getNextArray()
  }

  onClickAngleDown() {
    this.showingImagesArray = this.slideCreater.getPrevArray()
  }

  onClickImage(image: any) {
    this.currentImage = image
  }

  created() {
    this.initCurrentImage(this.images)
  }

  beforeDestroy() {
    this.slideCreater = null
  }
}
</script>

<style lang="scss" scoped>
/* Grow Transition */
.grow-transiton:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

.selected {
  border: 1px #65BF73 solid;
}
</style>
