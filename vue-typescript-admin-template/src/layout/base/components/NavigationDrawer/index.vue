<template>
  <v-navigation-drawer
    :mini-variant="navigationStatus && permanentStatus"
    :expand-on-hover="navigationStatus && permanentStatus"
    app
    clipped
    :value="navigationStatus"
    @update:mini-variant="updateMiniVariant"
  >
    <!-- Top buttons -->
    <div :class="{ 'text-right': !permanentStatus, 'text-center': permanentStatus }">
      <!--      @TODO: There is bug, stop using temporary-->
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            icon
            v-bind="attrs"
            v-on="on"
            @click="changePermanentStatus"
          >
            <v-icon>
              compare_arrows
            </v-icon>
          </v-btn>
        </template>
        <span>To permanent mode</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            icon
            v-bind="attrs"
            v-on="on"
            @click="changeAppBarStatus"
          >
            <v-icon>
              <!-- vertical_align_top, vertical_align_bottom -->
              {{ appBarStatus ? 'vertical_align_top' : 'vertical_align_bottom' }}
            </v-icon>
          </v-btn>
        </template>
        <span>{{ appBarStatus ? 'open app bar' : 'close app bar' }}</span>
      </v-tooltip>
    </div>

    <!--  List of Menus  -->
    <v-list
      dense
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            Sandra Adams
          </v-list-item-title>
          <v-list-item-subtitle>
            sandra_a88@gmail.com
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <SearchMenu />

    <!-- Favorite menu list-->
    <favorite-menu />
    <!-- Program Menu list -->
    <v-list
      dense
      link
    >
      <v-subheader>
        Programs
      </v-subheader>
      <menu-parent
        v-for="menu in menus"
        :key="menu.name"
        :menu="menu"
      />
    </v-list>
  </v-navigation-drawer>
</template>
s
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SearchMenu from './components/SearchMenu.vue'
import MenuParent from './components/MenuParent.vue'
import FavoriteMenu from './components/FavoriteMenu.vue'
import ContextMenu from '@/components/ContextMenu/index.vue'
import { CustomRouteConfig } from '@/types/customRouteConfig'

@Component({
  name: 'NavigationDrawer',
  components: {
    SearchMenu,
    MenuParent,
    FavoriteMenu,
    ContextMenu
  }
})
export default class NavigationDrawer extends Vue {
  @Prop() private readonly navigationStatus!: boolean
  @Prop() private readonly permanentStatus!: boolean
  @Prop() private readonly appBarStatus !: boolean
  // @TODO: Change any to specific type
  @Prop() private readonly menus !: Array<CustomRouteConfig>

  // @TODO: SAMPLE, IT SHOULD BE REMOVED IN THE FUTURE
  private admins = [
    ['Management', 'people_outline'],
    ['Settings', 'settings'],
  ]

  private cruds = [
    ['Create', 'add'],
    ['Read', 'insert_drive_file'],
    ['Update', 'update'],
    ['Delete', 'delete'],
  ]


  private changePermanentStatus () {
    this.$store.dispatch('app/controlPermanentStatus')
  }

  private changeAppBarStatus () {
    this.$store.dispatch('app/controlAppBarStatus')
  }

  private updateMiniVariant () {
    console.log('updateMiniVariant')
  }
}
</script>
