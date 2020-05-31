<template>
  <v-app-bar
    :color="color"
    :dark="dark"
    fixed
    app
  >
    <v-app-bar-nav-icon @click="onChangeNavigation" />

    <v-icon class="mx-4" large @click="moveToHome">mdi-youtube</v-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />

    <v-btn icon @click="isOpenSearch = !isOpenSearch">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>shopping_cart</v-icon>
    </v-btn>
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>account_circle</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <template v-slot:extension>
      <shopping-tab-bar
        v-if="!isMobile"
        :color="color"
        :dark="dark"
        :menus="menus"
      />
      <v-spacer />
      <shopping-app-bar-search
        :color="color"
        :dark="dark"
        :open="isOpenSearch"
      />
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ShoppingAppBarSearch from './searchBar.vue'
import ShoppingTabBar from './tabBar.vue'

@Component({
  name: 'ShoppingAppBar',
  components: {
    ShoppingAppBarSearch,
    ShoppingTabBar
  }
})
export default class extends Vue {
  @Prop() private menus!: Array<any>
  @Prop() private navigation!: boolean
  @Prop() private color!: string
  @Prop() private dark!: boolean
  @Prop() private isMobile!: boolean

  private title = 'Youngjin Market'
  private isOpenSearch = true
  private tab: number | null = null

  /** test 용입니다. 삭제해주세요 */
  private items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' }
  ]

  /**
   * Change the status of navigation bar
   */
  onChangeNavigation() {
    this.$emit('onChangeNavigation', !this.navigation)
  }

  moveToHome() {
    const path = '/shoppingMall'
    if (this.$route.path !== path) {
      this.$router.push({ path })
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
