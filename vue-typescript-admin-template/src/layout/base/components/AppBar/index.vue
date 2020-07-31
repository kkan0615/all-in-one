<template>
  <v-app-bar
    app
    color="primary"
    :dark="!isLight"
    :light="isLight"
  >
    <v-app-bar-nav-icon
      @click="changeNavigationStatus"
    />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import {isLight} from '@/utils/color'

  @Component({
    name: 'BaseLayout',
  })
export default class BaseLayout extends Vue {
    @Prop() private readonly navigationStatus !: boolean

    @Emit('changeNavigationStatus')
    public changeNavigationStatus () {
      return !this.navigationStatus
    }

    public get isLight () {
      const primary = (this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.primary || '' : this.$vuetify.theme.themes.light.primary || '').toString()
      if (!primary) {
        return this.$vuetify.theme.dark
      }
      return isLight(primary)
    }
}
</script>
