<template>
  <div>
    <v-row>
      <v-col>
        <business-post-menu
          :menus="menus"
        />
      </v-col>
      <v-col>
        <v-card>
          <v-card-text v-html="post" />
        </v-card>
      </v-col>
    </v-row>
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

  mounted() {
    this.createMenu()
  }

  private createMenu() {
    const titleTags = document.getElementsByTagName('h1')
    console.log(titleTags.length)
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
