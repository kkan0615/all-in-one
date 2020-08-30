<!--
  Author: Youngjin Kwak
  CreatedAt: 08-29-2020
  UpdatedAt: 08-29-2020
  Description: Favorite menu list
-->
<template>
  <div>
    <v-list
      v-if="favoriteRoutes.length > 0"
      dense
      link
    >
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
      <v-scroll-y-transition
        v-if="isOpen"
        :group="favoriteRoutes.length > 1"
      >
        <context-menu
          v-for="menu in favoriteRoutes"
          :key="menu.name"
        >
          <template #content>
            <v-list-item
              selectable
              dense
            >
              <v-list-item-avatar><v-icon>{{ menu.meta.icon }}</v-icon></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ menu.meta.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ menu.meta.description }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
          <template #menu>
            <v-card>
              <v-card-text>
                UnFavorite
                <v-btn
                  icon
                  text
                >
                  <v-icon>
                    favorite
                  </v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </template>
        </context-menu>
      </v-scroll-y-transition>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CustomRouteConfig } from '@/types/customRouteConfig'
import ContextMenu from '@/components/ContextMenu/index.vue'

/**
   * @author - Youngjin Kwak
   * @description - Favorite menu list
   */
@Component({
  name: 'FavoriteMenu',
  components: {
    ContextMenu
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
