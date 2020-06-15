<template>
  <v-app-bar
    color="grey darken-4"
    app
    :dark="dark"
  >
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">

        <v-app-bar-nav-icon
          v-bind="attrs"
          @click="onChangeNavigation"
          v-on="on"
        />
      </template>
      <span v-if="!navigation">{{ $t('appBarTooltips.onMenuIcon') }}</span>
      <span v-else>{{ $t('appBarTooltips.offMenuIcon') }}</span>
    </v-tooltip>

    <v-row
      class="cursor-pointer"
      @click="onClcikMainIcon"
    >
      <v-icon
        class="mx-4"
        large
      >
        home
      </v-icon>

      <h3
        v-if="!isMobile"
        class="center-h3"
      >
        {{ title }}
      </h3>
    </v-row>

    <v-spacer />
    <main-icons-with-menu
      :is-mobile="isMobile"
    />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MainIconsWithMenu from './appBar/iconsWithMenu.vue'

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
  private title = 'Business Template'

  onChangeNavigation() {
    this.$emit('onChangeNavigation', !this.navigation)
  }

  onClcikMainIcon() {
    if (this.$route.path !== '/business') {
      this.$router.push({ path: '/business' })
    }
  }
}
</script>

<style lang="scss" scoped>

.center-h3 {
  margin: auto;
  margin-left:0px;
}
</style>
