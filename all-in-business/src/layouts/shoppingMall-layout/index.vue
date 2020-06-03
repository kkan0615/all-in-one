<!--
  Reference for css: https://color.adobe.com/ko/trends
 -->
<template>
  <v-app>
    <shopping-app-bar
      :menus="menus"
      :navigation="navigationBar"
      :color="mainColor"
      :dark="dark"
      :is-mobile="isMobile"
      @onChangeNavigation="onChangeNavigation"
    />
    <shopping-navigation-bar
      :menus="menus"
      :navigation="navigationBar"
      :color="mainColor"
      :dark="dark"
      @onChangeNavigation="onChangeNavigation"
    />
    <v-content class="auth-background">
      <v-container class="fill-height" app fluid>
        <v-row align="center" justify="center" no-gutters class="mb-12">
          <v-col cols="12" xl="9" lg="12" md="12" sm="12" xs="12">
            <transition name="fade-transform" mode="out-in" appear>
              <router-view :key="key" />
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { shoppingMenus, createMenu } from '@/dataInterface/menu/menuData'
import { ShoppingAppBar, ShoppingNavigationBar } from './components'
import { ResizeHandlerMixins } from '@/mixins/modules/ResizeHandler'
import { DesignSettingModule } from '@/store/modules/designSetting'
// import { gql } from 'apollo-boost'

@Component({
  name: 'ShoppingMallLayout',
  components: {
    ShoppingAppBar,
    ShoppingNavigationBar
  },
  mixins: [ResizeHandlerMixins]
})
export default class extends Vue {
  private menus: Array<any> = []
  private navigationBar = false
  /** Setting for colrs */
  private mainColor = '#65BF73'
  private dark = true
  /**
   * Change the status of navigation
   *
   * @param status -  Status of navigation from child compoents.
   */
  onChangeNavigation(stauts: boolean) {
    this.navigationBar = stauts
  }

  public get key(): string {
    return this.$route.path
  }

  public get isMobile(): boolean {
    return DesignSettingModule.isMobile
  }

  created() {
    this.menus = createMenu(shoppingMenus, 0, null)
  }
}
</script>

<style lang="scss">
</style>
