<template>
  <v-app class="light-background">
    <business-nav-bar
      :navigation="navigationBar"
      :is-mobile="isMobile"
      @onChangeNavigation="onChangeNavigation"
    />
    <business-navigation-bar
      :menus="menus"
      :navigation="navigationBar"
      :is-mobile="isMobile"
      @onChangeNavigation="onChangeNavigation"
    />
    <v-main fulid>
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
            v-if="!isFullSize"
            cols="12"
            sm="12"
            md="7"
          >
            <transition name="fade-transform" mode="out-in" appear>
              <router-view :key="key" />
            </transition>
          </v-col>
          <v-col
            v-else
            cols="12"
            sm="12"
            md="11"
          >
            <transition name="fade-transform" mode="out-in" appear>
              <router-view :key="key" />
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <FloatingButtons />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BusinessNavBar from './components/appBar/index.vue'
import BusinessNavigationBar from './components/navigatorBar/index.vue'
import FloatingButtons from './components/FloatingButtons/index.vue'
import { ResizeHandlerMixins } from '@/mixins/modules/ResizeHandler'
import { DesignSettingModule } from '@/store/modules/designSetting'
import businessRoutes from '@/router/modules/business'

@Component({
  name: 'MainLayout',
  components: {
    BusinessNavBar,
    BusinessNavigationBar,
    FloatingButtons
  },
  mixins: [ResizeHandlerMixins]
})
export default class extends Vue {
  private menus: Array<any> = []
  private navigationBar = false

  public get key(): string {
    return this.$route.path
  }

  public get isFullSize() : boolean {
    return this.$route.meta.fullSize
  }

  public get isMobile(): boolean {
    return DesignSettingModule.isMobile
  }

  onChangeNavigation(stauts: boolean) {
    this.navigationBar = stauts
  }

  created() {
    this.menus = JSON.parse(JSON.stringify(businessRoutes))
  }
}
</script>

<style lang="scss" scoped>
dark-background {
  background-color: #0e0e10;
  color: white;
}
</style>
