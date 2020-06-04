<template>
  <div
    v-html="post"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { samplePost } from './data/samplePost'

@Component({
  name: 'BusinessPost'
})
export default class extends Vue {
  private post ?: string
  private menus ?: Array<any>

  constructor() {
    super()
    this.post = samplePost
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
