<template>
  <v-card class="position-absolute">
    <div
      v-for="(menu, i) in menus"
      :key="i"
      @click="onClickTtile(i)"
    >
      <v-card-title
        v-if="menu.nodeName === 'H1'"
      >
        {{ menu.innerText }}
        <v-divider />
      </v-card-title>
      <v-card-text
        v-else
      >
        {{ menu.innerText }}
      </v-card-text>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// import { PostMenusInterface } from './types/postMenus'

@Component({
  name: 'BusinessPostMenu'
})
export default class extends Vue {
  @Prop() private menus !: Array<HTMLHeadingElement>

  private onClickTtile(index: number) {
    const tagId = document.getElementById(`${index}tag`)
    if (!tagId) {
      return
    }
    // const titleId = document.getElementById('0h1')
    const top = tagId.offsetTop - 20
    window.scroll({
      top,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
