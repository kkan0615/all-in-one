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

    <v-list
      dense
    >
      <v-list-item
        link
        two-line
        class="px-2"
      >
        <v-list-item-avatar>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>My Files</v-list-item-title>
          <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="admin[0]" />
            <v-list-item-icon>
              <v-icon v-text="admin[1]" />
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(crud, i) in cruds"
            :key="i"
          >
            <v-list-item-title v-text="crud[0]" />
            <v-list-item-action>
              <v-icon v-text="crud[1]" />
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
s
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SearchMenu from './components/SearchMenu.vue'

@Component({
  name: 'NavigationDrawer',
  components: {
    SearchMenu
  }
})
export default class NavigationDrawer extends Vue {
  @Prop() private readonly navigationStatus!: boolean
  @Prop() private readonly permanentStatus!: boolean
  @Prop() private readonly appBarStatus !: boolean

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
