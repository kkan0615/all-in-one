<template>
  <v-navigation-drawer
    :permanent="permanent"
    :expand-on-hover="permanent"
    app
    :value="navigationStatus"
    @input="changeNavigationStatus"
  >
    <div>
      <v-spacer />
      <v-btn
        text
        icon
        @click="changePermanentStatus"
      >
        <v-icon>
          close
        </v-icon>
      </v-btn>
    </div>
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
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

  @Component({
    name: 'NavigationDrawer',
  })
export default class NavigationDrawer extends Vue {
  @Prop() private readonly navigationStatus!: boolean

  public permanent = false

  @Emit('changeNavigationStatus')
  public changeNavigationStatus (status: boolean) {
    return status
  }

  public changePermanentStatus () {
    this.permanent = !this.permanent
  }
}
</script>
