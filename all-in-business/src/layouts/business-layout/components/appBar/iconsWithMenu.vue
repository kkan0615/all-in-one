<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" @click="onClickSearch" v-on="on">
          <v-icon>search</v-icon>
        </v-btn>
      </template>
      <span v-if="visibleSearchBar">{{ $t('appBarTooltips.onSearch') }}</span>
      <span v-else>{{ $t('appBarTooltips.offSearch') }}</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-if="!isFullscreen" icon v-bind="attrs" @click="openFullscreen" v-on="on">
          <v-icon>fullscreen</v-icon>
        </v-btn>
        <v-btn v-else-if="isFullscreen" icon v-bind="attrs" @click="closeFullscreen" v-on="on">
          <v-icon>fullscreen_exit</v-icon>
        </v-btn>
      </template>
      <span v-if="!isFullscreen">{{ $t('appBarTooltips.onfullScreenTooltip') }}</span>
      <span v-else>{{ $t('appBarTooltips.offfullScreenTooltip') }}</span>
    </v-tooltip>

    <TranslateMenu :is-mobile="isMobile" />

    <v-menu :open-on-hover="!isMobile" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-avatar v-if="isLogin" size="32">
            <v-img :src="userAvator" />
          </v-avatar>

          <v-icon v-else>account_circle</v-icon>
        </v-btn>
      </template>

      <v-list v-if="isLogin">
        <v-list-item>
          <v-list-item-title class="cursor-pointer" @click="onClickLogout">{{ $t('profileMenu.logout') }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title class="cursor-pointer">{{ $t('profileMenu.setting') }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item class="cursor-pointer" @click="onClickLogin">
          <v-list-item-title>{{ $t('profileMenu.login') }}</v-list-item-title>
        </v-list-item>
        <v-list-item class="cursor-pointer" @click="onClickRegister">
          <v-list-item-title>{{ $t('profileMenu.register') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/uesr'
import { openFullscreen, closeFullscreen } from '@/utils/Fullscreen'
import TranslateMenu from './translateMenu.vue'

// import { gql } from 'apollo-boost'

@Component({
  name: 'BusinessNavBar',
  components: {
    TranslateMenu
  }
})
export default class extends Vue {
  @Prop() private isMobile!: boolean

  private dark = true
  private items !: Array<any>
  private isFullscreen !: boolean
  private visibleSearchBar !: boolean

  constructor() {
    super()
    this.items = []
    this.isFullscreen = false
    this.visibleSearchBar = false
  }

  public get isLogin(): boolean {
    let bool = false
    if (UserModule.userToken) {
      bool = true
    }
    return bool
  }

  public get userAvator(): string {
    return UserModule.avator
  }

  public onClickLogin() {
    this.$router.push({ name: 'Login' })
  }

  public onClickRegister() {
    this.$router.push({ name: 'Register' })
  }

  private async onClickLogout() {
    const success = await UserModule.logout()

    if (success) {
      this.$toasted.show(this.$t('login.logout').toString())
    }
  }

  private openFullscreen() {
    openFullscreen()
    this.isFullscreen = true
  }

  private closeFullscreen() {
    closeFullscreen()
    this.isFullscreen = false
  }

  private onClickSearch() {
    this.visibleSearchBar = !this.visibleSearchBar
  }
}
</script>

<style scoped>
</style>
