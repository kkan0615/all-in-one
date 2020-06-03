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
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'BusinessDropDownImagesGroup'
})
export default class extends Vue {
  private images = [
    'https://lh3.googleusercontent.com/proxy/hmaDC3q25rIFnJDEeBH0GAyobOttvBWeJe4X9yyxBRu7IUG8ufRW9TG45AvQ7Orq09ajpfQccrdbfBj-rqX9YlHb9RJJ6NXwdabYrGUWnn1bJcFgSpOxWl_S2MYU8sD1B9tYdZLkMDFt62pUcC-jtnkc6OdcpJuUcqOcUobQVQjmBfupqfTj64gRHMSBVrQMs-cUIi1XB8goJRgj41oROi8CJT1wo12QneISlNWR0DnwR9fH7T1GET5DrMeqo1s_FE90VX5FDnMS6vKZXzwva_QSAdD2tGJcNanyzuuy26tartxfOkbWnK0Fs0W6BSwXKlmE1r2asfYIKhCQbGlZo3IyZkf6RpOWcp8e-f9PmJIvuCipUyYRg5k9NXnJav-jh7kzb8hWnaf_Zorn7nTQqbT-lq4Mi8PT49H7ykvVoZP24VoTsTLC53ikSsRASCCO70fSU_s',
    'https://lh3.googleusercontent.com/proxy/cdf62r-eX1Cr80FJImSDstq_8YORyQ5dIoSgQWOJwqWA4qrClGhVDd6LqZxIXjE7lf4Ef8PoSSpxlx07jgsZem2m5mnmjqeTp7Xydqmd-G88FIEuIqKaEcKN6kHZJ7NxOBvnJ9EQFxTOwCQnCyXOmD5n6wiNZ2QyCrEVxeh6jA',
    'https://i.vimeocdn.com/video/877697510_640x360.jpg',
    'https://lh3.googleusercontent.com/proxy/hmaDC3q25rIFnJDEeBH0GAyobOttvBWeJe4X9yyxBRu7IUG8ufRW9TG45AvQ7Orq09ajpfQccrdbfBj-rqX9YlHb9RJJ6NXwdabYrGUWnn1bJcFgSpOxWl_S2MYU8sD1B9tYdZLkMDFt62pUcC-jtnkc6OdcpJuUcqOcUobQVQjmBfupqfTj64gRHMSBVrQMs-cUIi1XB8goJRgj41oROi8CJT1wo12QneISlNWR0DnwR9fH7T1GET5DrMeqo1s_FE90VX5FDnMS6vKZXzwva_QSAdD2tGJcNanyzuuy26tartxfOkbWnK0Fs0W6BSwXKlmE1r2asfYIKhCQbGlZo3IyZkf6RpOWcp8e-f9PmJIvuCipUyYRg5k9NXnJav-jh7kzb8hWnaf_Zorn7nTQqbT-lq4Mi8PT49H7ykvVoZP24VoTsTLC53ikSsRASCCO70fSU_s',
    'https://lh3.googleusercontent.com/proxy/cdf62r-eX1Cr80FJImSDstq_8YORyQ5dIoSgQWOJwqWA4qrClGhVDd6LqZxIXjE7lf4Ef8PoSSpxlx07jgsZem2m5mnmjqeTp7Xydqmd-G88FIEuIqKaEcKN6kHZJ7NxOBvnJ9EQFxTOwCQnCyXOmD5n6wiNZ2QyCrEVxeh6jA',
    'https://i.vimeocdn.com/video/877697510_640x360.jpg',
    'https://lh3.googleusercontent.com/proxy/hmaDC3q25rIFnJDEeBH0GAyobOttvBWeJe4X9yyxBRu7IUG8ufRW9TG45AvQ7Orq09ajpfQccrdbfBj-rqX9YlHb9RJJ6NXwdabYrGUWnn1bJcFgSpOxWl_S2MYU8sD1B9tYdZLkMDFt62pUcC-jtnkc6OdcpJuUcqOcUobQVQjmBfupqfTj64gRHMSBVrQMs-cUIi1XB8goJRgj41oROi8CJT1wo12QneISlNWR0DnwR9fH7T1GET5DrMeqo1s_FE90VX5FDnMS6vKZXzwva_QSAdD2tGJcNanyzuuy26tartxfOkbWnK0Fs0W6BSwXKlmE1r2asfYIKhCQbGlZo3IyZkf6RpOWcp8e-f9PmJIvuCipUyYRg5k9NXnJav-jh7kzb8hWnaf_Zorn7nTQqbT-lq4Mi8PT49H7ykvVoZP24VoTsTLC53ikSsRASCCO70fSU_s',
    'https://lh3.googleusercontent.com/proxy/cdf62r-eX1Cr80FJImSDstq_8YORyQ5dIoSgQWOJwqWA4qrClGhVDd6LqZxIXjE7lf4Ef8PoSSpxlx07jgsZem2m5mnmjqeTp7Xydqmd-G88FIEuIqKaEcKN6kHZJ7NxOBvnJ9EQFxTOwCQnCyXOmD5n6wiNZ2QyCrEVxeh6jA',
    'https://i.vimeocdn.com/video/877697510_640x360.jpg'
  ]

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
