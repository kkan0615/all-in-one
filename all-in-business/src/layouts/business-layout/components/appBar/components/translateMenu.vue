<template>
  <v-menu :open-on-hover="!isMobile" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>translate</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title
          class="cursor-pointer"
          @click="changeLocale('kr')"
        >
          한국어
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title
          class="cursor-pointer"
          @click="changeLocale('en')"
        >
          English
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/uesr'
import { setLanguageCookie } from '@/utils/cookies'

// import { gql } from 'apollo-boost'

@Component({
  name: 'TranslateMenu'
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

  public get isLoggedIn(): string {
    return UserModule.userToken
  }

  private changeLocale(lang: string) {
    setLanguageCookie(lang)
    location.reload()
  }
}
</script>

<style scoped>
</style>
