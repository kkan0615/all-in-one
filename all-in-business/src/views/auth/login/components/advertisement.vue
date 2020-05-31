<template>
  <div>
    <v-img
      :height="100"
      :src="currentImage"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Advertisement'
})
export default class extends Vue {
  private routerPath = 'register'
  private imagePath = [
    'https://i.pinimg.com/originals/64/81/82/648182914562767420965abd9e4e74ba.jpg',
    'https://ih0.redbubble.net/image.527041079.3378/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg',
    'https://pbs.twimg.com/profile_images/378800000505234772/58b43b6befb95b78184dd2cc07ab79f7_400x400.jpeg',
    'https://c4.wallpaperflare.com/wallpaper/774/501/215/anime-love-live-sunshine-you-watanabe-wallpaper-preview.jpg',
    'https://hdwallpaperim.com/wp-content/uploads/2017/09/07/466819-long_hair-blonde-blue_eyes-anime-anime_girls-Ayase_Eli-Love_Live-tail-animal_ears-748x600.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHDamJfbX70z_S3EXNtwNEJ9sN9EaFEdHIDIvHk-9t_mwnQcTj'
  ]

  public get currentImage() : string {
    const random = Math.floor(Math.random() * this.imagePath.length)
    return this.imagePath[random]
  }
}
</script>

<style scoped>

</style>
