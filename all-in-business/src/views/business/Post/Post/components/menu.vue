<template>
  <v-card>
    <div
      v-for="(menu, i) in menus"
      :key="i"
    >
      <v-card-title
        @click="onClickTtile(i)"
      >
        {{ menu.title.innerText }}
      </v-card-title>
      <v-card-text
        v-for="(sub, j) in menu.subTitles"
        :key="j"
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
  @Prop() private menus !: Array<any>

  private onClickTtile(index: number) {
    const titleId = document.getElementById(`${index}h1`)
    if (!titleId) {
      return
    }
    // const titleId = document.getElementById('0h1')
    console.log(titleId.offsetHeight)
    const top = titleId.offsetHeight - 20
    window.scroll({
      top,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
