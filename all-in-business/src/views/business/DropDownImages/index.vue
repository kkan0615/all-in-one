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
        <v-img
          height="60vh"
          :src="firstImage"
          @drop.prevent="onDropFirstImage"
          @dragover="onDragOver"
        />
      </v-col>
      <v-col
        cols="6"
        lg="6"
        xl="6"
        md="6"
        sm="6"
        xs="6"
      >
        <v-img
          height="60vh"
          :src="secondImage"
          @drop.prevent="onDropSecondImage"
          @dragover="onDragOver"
        />
      </v-col>
    </v-row>
    <v-card
      height="20vh"
      :dark="true"
      class="pa-2 overflow-auto"
    >
      <BusinessDropDownImagesGroup />
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
  private firstImage = 'https://lh3.googleusercontent.com/proxy/hmaDC3q25rIFnJDEeBH0GAyobOttvBWeJe4X9yyxBRu7IUG8ufRW9TG45AvQ7Orq09ajpfQccrdbfBj-rqX9YlHb9RJJ6NXwdabYrGUWnn1bJcFgSpOxWl_S2MYU8sD1B9tYdZLkMDFt62pUcC-jtnkc6OdcpJuUcqOcUobQVQjmBfupqfTj64gRHMSBVrQMs-cUIi1XB8goJRgj41oROi8CJT1wo12QneISlNWR0DnwR9fH7T1GET5DrMeqo1s_FE90VX5FDnMS6vKZXzwva_QSAdD2tGJcNanyzuuy26tartxfOkbWnK0Fs0W6BSwXKlmE1r2asfYIKhCQbGlZo3IyZkf6RpOWcp8e-f9PmJIvuCipUyYRg5k9NXnJav-jh7kzb8hWnaf_Zorn7nTQqbT-lq4Mi8PT49H7ykvVoZP24VoTsTLC53ikSsRASCCO70fSU_s'
  private secondImage = 'https://lh3.googleusercontent.com/proxy/cdf62r-eX1Cr80FJImSDstq_8YORyQ5dIoSgQWOJwqWA4qrClGhVDd6LqZxIXjE7lf4Ef8PoSSpxlx07jgsZem2m5mnmjqeTp7Xydqmd-G88FIEuIqKaEcKN6kHZJ7NxOBvnJ9EQFxTOwCQnCyXOmD5n6wiNZ2QyCrEVxeh6jA'
  private testImage = 'https://i.vimeocdn.com/video/877697510_640x360.jpg'

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
    console.log(e)
    console.log(e.dataTransfer.setData('text', this.testImage))
  }
}
</script>

<style lang="scss" scoped>
.fit-height {
  height: 80v;
}
</style>
