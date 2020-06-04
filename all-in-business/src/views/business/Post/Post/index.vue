<template>
  <div>
    <business-post-menu
      :menus="menus"
    />
    <div
      v-html="post"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { samplePost } from './data/samplePost'
import BusinessPostMenu from './components/menu.vue'
// import { PostMenusInterface } from './types/postMenus'

@Component({
  name: 'BusinessPost',
  components: {
    BusinessPostMenu
  }
})
export default class extends Vue {
  private post ?: string
  private menus !: Array<any>

  constructor() {
    super()
    this.post = samplePost
    this.menus = []
  }

  created() {
    this.createMenu()
  }

  private createMenu() {
    const titleTags = document.body.getElementsByTagName('h1')
    console.log(titleTags)
    for (let i = 0; i < titleTags.length; i++) {
      const element = titleTags[i]
      element.setAttribute('id', `${i}h1`)
      const menu = {
        title: element
      }
      this.menus.push(menu)
    }
    console.log(this.menus)
  }
}
</script>

<style lang="scss" scoped>
</style>
