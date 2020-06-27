<template>
  <v-app-bar
    app
    dense
    :dark="$vuetify.theme.dark"
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
    <Search
      v-show="visibleSearchBar === true && !isMobile"
      :open="visibleSearchBar"
    />
    <v-tooltip v-if="!isMobile" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" @click="onClickSearch" v-on="on">
          <v-icon>search</v-icon>
        </v-btn>
      </template>
      <span v-if="visibleSearchBar">{{ $t('appBarTooltips.onSearch') }}</span>
      <span v-else>{{ $t('appBarTooltips.offSearch') }}</span>
    </v-tooltip>
    <main-icons-with-menu
      :is-mobile="isMobile"
    />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import MainIconsWithMenu from './appBar/iconsWithMenu.vue'
import Search from './appBar/search.vue'

@Component({
  name: 'MainAppBar',
  components: {
    MainIconsWithMenu,
    Search
  }
})
export default class extends Vue {
  @Prop() private navigation!: boolean
  @Prop() private isMobile!: boolean

  private dark !: boolean
  private title = 'Business Template'
  private visibleSearchBar !: boolean

  constructor() {
    super()
    this.visibleSearchBar = false
    this.dark = true
  }

  onChangeNavigation() {
    this.$emit('onChangeNavigation', !this.navigation)
  }

  onClcikMainIcon() {
    if (this.$route.path !== '/business') {
      this.$router.push({ path: '/business' })
    }
  }

  private onClickSearch() {
    this.visibleSearchBar = !this.visibleSearchBar
  }
}
</script>

<style lang="scss" scoped>

.center-h3 {
  margin: auto;
  margin-left:0px;
}
</style>
