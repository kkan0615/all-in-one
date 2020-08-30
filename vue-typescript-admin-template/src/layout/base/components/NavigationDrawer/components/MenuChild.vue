<!--
  Author: Youngjin Kwak
  CreatedAt: 08-15-2020
  UpdatedAt: 08-15-2020
  Description: MenuChild Vue Page
-->
<template>
  <v-list-group
    absolute
    :prepend-icon="menu.meta.icon"
    @click="clickItem"
  >
    <template v-slot:activator>
      <context-menu>
        <template #content>
          <v-list-item-content>
            <v-list-item-title>{{ menu.meta.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ menu.meta.description }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </template>
        <template #menu>
          <v-card>
            <v-card-text>
              Favorite
              <v-btn
                icon
                text
                @click="toFavoriteMenu"
              >
                <v-icon>
                  favorite
                </v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </template>
      </context-menu>
    </template>

    <v-list
      dense
      subheader
      nav
      @click="clickItem"
    >
      <menu-parent
        v-for="child in menu.children"
        :key="child.name"
        :menu="child"
      />
    </v-list>
  </v-list-group>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import Draggable from 'vuedraggable'
import ContextMenu from '@/components/ContextMenu/index.vue'
import { CustomRouteConfig } from '@/types/customRouteConfig'

@Component({
  name: 'NestedDraggableChild',
  components: {
    MenuParent: () => import('./MenuParent.vue'),
    Draggable,
    ContextMenu
  }
})

export default class NestedDraggableChild extends Vue {
  // @Prop() private list!: Array<unknown>
  @Prop() private menu!: CustomRouteConfig
  @Prop({ default: false }) private readonly expandAll!: boolean


  @Emit('click:item')
  private clickItem () {
    return this.menu
  }

  private toFavoriteMenu () {
    this.$store.dispatch('menu/addFavoriteRoutes', this.menu)
  }
}
</script>
