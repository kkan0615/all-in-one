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
    <v-list-item
      v-else
      color="accent"
      link
      :to="{ name: menu.name }"
      dense
      exact
      @click="clickItem"
    >
      <v-list-item-avatar><v-icon>{{ menu.meta.icon }}</v-icon></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ menu.meta.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ menu.meta.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
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
