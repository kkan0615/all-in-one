<!--
  Author: Youngjin Kwak
  CreatedAt: 08-02-2020
  UpdatedAt: 08-02-2020
  Description: Sample Vue Page
-->
<!--
TODO
1. Create Auth menu
2. Notification menu
3. Search bar - Autocomplete
-->
<template>
  <v-navigation-drawer
    :value="subNavigationStatus"
    app
    right
    temporary
    @input="changeSubNavigation"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg" />
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">
            Sandra Adams
          </v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list
      nav
      dense
    >
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Files</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Shared with me</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Starred</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
s
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({
    name: 'SubNavigationDrawer',
  })
export default class SubNavigationDrawer extends Vue {
    @Prop() private readonly navigationStatus!: boolean

    private get subNavigationStatus () {
      return this.$store.state.app.subNavigatorStatus
    }

    private changeSubNavigation (subNavigationStatus: boolean) {
      this.$store.commit('app/SET_SUBNAVIGATORSTATUS', subNavigationStatus)
    }

}
</script>
