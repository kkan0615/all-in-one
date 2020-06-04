<template>
  <v-card>
    <div
      v-for="(menu, i) in menus"
      :key="i"
    >
      <v-card-title>
        {{ menu.title }}
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
}
</script>

<style lang="scss" scoped>
</style>
