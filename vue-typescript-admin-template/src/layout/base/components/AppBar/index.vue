<template>
  <v-app-bar
    app
    clipped-left
    color="primary"
    :dark="!isLight"
    :light="isLight"
    :value="appBarStatus"
  >
    <v-app-bar-nav-icon
      @click="changeNavigationStatus"
    />
    <v-spacer />
    <notification />
    <translate-menu />
    <v-btn
      text
      icon
      @click="changeSubNavigation"
    >
      <v-icon>
        menu_open
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isLight } from '@/utils/color'
import TranslateMenu from './components/Translate.vue'
import Notification from './components/Notification.vue'

@Component({
  name: 'AppBar',
  components: {
    TranslateMenu,
    Notification
  }
})
export default class AppBar extends Vue {
  @Prop() private readonly navigationStatus !: boolean
  @Prop() private readonly appBarStatus !: boolean

  private get isLight () {
    const primary = (this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.primary || '' : this.$vuetify.theme.themes.light.primary || '').toString()
    if (!primary) {
      return this.$vuetify.theme.dark
    }
    return isLight(primary)
  }

  private changeNavigationStatus () {
    this.$store.dispatch('app/controlNavigatorStatus')
  }

  private changeSubNavigation () {
    this.$store.dispatch('app/controlSubNavigationStatus')
  }
}
</script>
