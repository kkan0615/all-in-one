<!--
  Author: Youngjin Kwak
  CreatedAt: 08-29-2020
  UpdatedAt: 08-29-2020
  Description: Favorite menu list
-->
<template>
  <div>
    <v-subheader>
      Favorite
      <v-spacer />
      <v-btn
        icon
        @click="changeIsOpen"
      >
        <v-icon>
          keyboard_arrow_down
        </v-icon>
      </v-btn>
    </v-subheader>
    <v-list
      v-if="favoriteRoutes.length > 0"
      dense
      link
    >
      <v-scroll-y-transition
        v-if="isOpen"
        :group="favoriteRoutes.length > 1"
      >
        <v-list-item
          v-for="menu in favoriteRoutes"
          :key="menu.name"
          class="pa-0"
          color="accent"
          :to="{ name: menu.name }"
          selectable
          link
          exact
          dense
        >
          <v-list-item-avatar><v-icon>{{ menu.meta.icon }}</v-icon></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ menu.meta.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ menu.meta.description }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-scroll-y-transition>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CustomRouteConfig } from '@/types/customRouteConfig'

/**
   * @author - Youngjin Kwak
   * @description - Favorite menu list
   */
@Component({
  name: 'FavoriteMenu',
  components: {
  }
})
export default class FavoriteMenu extends Vue {
  private isOpen = false

  private get favoriteRoutes (): Array<CustomRouteConfig> {
    return this.$store.state.menu.favoriteRoutes
  }

  private changeIsOpen () {
    this.isOpen = !this.isOpen
  }
}
</script>
