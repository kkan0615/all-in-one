<template>
  <v-app>
    <main-app-bar
      :navigation="navigationBar"
      :is-mobile="isMobile"
      @onChangeNavigation="onChangeNavigation"
    />
    <main-navigation-bar
      :menus="menus"
      :navigation="navigationBar"
      :is-mobile="isMobile"
      @onChangeNavigation="onChangeNavigation"
    />
    <v-content
      class="auth-background"
    >
      <v-container
        class="fill-height"
        app
        fluid
      >
        <v-row
          align="center"
          justify="center"
          no-gutters
          class="mb-6"
        >
          <v-col
            cols="12"
            sm="12"
            md="9"
          >
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MainAppBar from './components/appBar.vue'
import MainNavigationBar from './components/navigationBar.vue'
// import { MenuInterface } from '@/dataInterface/menu/MenuInterface'
import { mainMenus, createMenu } from '@/dataInterface/menu/menuData'
// import { gql } from 'apollo-boost'
import { ResizeHandlerMixins } from '@/mixins/modules/ResizeHandler'
import { DesignSettingModule } from '@/store/modules/designSetting'

@Component({
  name: 'MainLayout',
  components: {
    MainAppBar,
    MainNavigationBar
  },
  mixins: [ResizeHandlerMixins]
})
export default class extends Vue {
  private menus: Array<any> = []
  private navigationBar = false

  // onClickNavigationBarIcon() {
  //   console.log(this.navigationBarOpen)

  //   this.navigationBarOpen = !this.navigationBarOpen
  // }

  public get isMobile(): boolean {
    return DesignSettingModule.isMobile
  }

  onChangeNavigation(stauts: boolean) {
    this.navigationBar = stauts
  }

  created() {
    this.menus = createMenu(mainMenus, 0, null)
  }

  mounted() {
    if (!this.isMobile) {
      this.navigationBar = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth-background {
    background-color: #0e0e10;
    color: white;
  }
</style>
