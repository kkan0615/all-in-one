<template>
  <v-app-bar
    color="grey darken-4"
    app
    :dark="dark"
  >
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click="onChangeNavigation"
    />

    <v-icon
      class="mx-4"
      large
      @click="onClcikMainIcon"
    >
      mdi-youtube
    </v-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    <main-icons-with-menu
      :is-mobile="isMobile"
    />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MainIconsWithMenu from './appBar/iconsWithMenu.vue'

// import { gql } from 'apollo-boost'

@Component({
  name: 'MainAppBar',
  components: {
    MainIconsWithMenu
  }
})
export default class extends Vue {
  @Prop() private navigation!: boolean
  @Prop() private isMobile!: boolean

  private dark = true
  private title = 'Youngjin Template main'

  onChangeNavigation() {
    this.$emit('onChangeNavigation', !this.navigation)
  }

  onClcikMainIcon() {
    if (this.$route.path !== '/main') {
      this.$router.push({ path: '/main' })
    }
  }
}
</script>

<style scoped>
</style>
