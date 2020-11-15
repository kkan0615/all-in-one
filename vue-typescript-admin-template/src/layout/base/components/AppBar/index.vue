<template>
  <v-app-bar
    app
    class="py-1"
    flat
    dense
    color="background"
    :value="appBarStatus"
  >
    <v-app-bar-nav-icon
      @click="changeNavigationStatus"
    />
    <search-bar />
    <v-spacer />
    <notification />
    <translate-menu />
    <auth-app-bar />
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
import AuthAppBar from './components/Auth.vue'
import SearchBar from '@/layout/base/components/AppBar/components/SearchBar.vue'

@Component({
  name: 'AppBar',
  components: {
    SearchBar,
    TranslateMenu,
    Notification,
    AuthAppBar
  }
})
export default class AppBar extends Vue {
  @Prop({ type: Boolean, required: true, default: false })
  private readonly navigationStatus !: boolean
  @Prop({ type: Boolean, required: true, default: false })
  private readonly appBarStatus !: boolean

  private get isLight () {
    const primary = (this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.primary || '' : this.$vuetify.theme.themes.light.primary || '').toString()
    if (!primary) {
      return this.$vuetify.theme.dark
    }
    return isLight(primary)
  }

  mounted () {
    window.addEventListener('keyup', this.keyEventHandler)
  }

  beforeDestroy () {
    window.removeEventListener('keyup', this.keyEventHandler)
  }

  private keyEventHandler (event: KeyboardEvent) {
    if (event.altKey && event.key === '1')
      this.changeNavigationStatus()
  }

  private changeNavigationStatus () {
    this.$store.dispatch('app/controlNavigatorStatus')
  }

  private changeSubNavigation () {
    this.$store.dispatch('app/controlSubNavigationStatus')
  }
}
</script>
