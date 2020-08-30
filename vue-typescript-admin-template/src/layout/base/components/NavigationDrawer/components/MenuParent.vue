<!--
  Author: Youngjin Kwak
  CreatedAt: 08-15-2020
  UpdatedAt: 08-15-2020
  Description: MenuParent Vue Page
-->
<template>
  <div>
    <menu-child
      v-if="menu.children && menu.children.length > 0"
      :menu="menu"
      @click:item="clickItem"
    />
    <context-menu
      v-else
    >
      <template #content>
        <v-list-item
          selectable
          link
          :to="{ name: menu.name }"
          dense
          @click="clickItem"
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
          <v-card-text
            @click="toFavoriteMenu"
          >
            Favorite
            <v-icon>
              favorite
            </v-icon>
          </v-card-text>
        </v-card>
      </template>
    </context-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import MenuChild from './MenuChild.vue'
import ContextMenu from '@/components/ContextMenu/index.vue'
import { CustomRouteConfig } from '@/types/customRouteConfig'

@Component({
  name: 'MenuParent',
  components: {
    MenuChild,
    ContextMenu
  }
})

export default class MenuParent extends Vue {
  // @Prop() private list!: Array<unknown>
  @Prop() private menu!: CustomRouteConfig


  @Emit('click:item')
  private clickItem () {
    return this.menu
  }

  private toFavoriteMenu () {
    this.$store.dispatch('menu/addFavoriteRoutes', this.menu)
  }
}
</script>
