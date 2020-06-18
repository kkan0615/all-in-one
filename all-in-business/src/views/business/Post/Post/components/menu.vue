<template>
  <v-card class="position-absolute">
    <v-card-title
      class="justify-center"
      :style="`background-color: ${DesignSettingModule.subColorOne};`"
    >
      {{ $t('postVer1.indexTitle') }}
    </v-card-title>
    <div class="ma-4" />
    <div
      v-for="(menu, i) in menus"
      :key="i"
      class="cursor-pointer"
      @click="onClickTtile(i)"
    >
      <div
        v-if="menu.nodeName === 'H1'"
      >
        <v-divider />
        <!-- <p :class="`pa-2 text-${menu.nodeName.toLowerCase()}`">{{ menu.innerText }}</p> -->
        <div
          :class="[`text-h6`]"
          class="pa-2"
          v-text="menu.innerText"
        />
        <v-divider />
      </div>
      <div
        v-else
      >
        <p class="pa-2 px-8">{{ menu.innerText }}</p>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { DesignSettingModule } from '@/store/modules/designSetting'
// import { PostMenusInterface } from './types/postMenus'

@Component({
  name: 'BusinessPostMenu'
})
export default class extends Vue {
  @Prop() private menus !: Array<HTMLHeadingElement>

  public get DesignSettingModule() : any {
    return DesignSettingModule.designColor
  }

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

p {
  margin-bottom: 0px
}
</style>
