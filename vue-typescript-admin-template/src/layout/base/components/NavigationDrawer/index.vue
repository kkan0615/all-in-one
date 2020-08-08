<template>
  <v-navigation-drawer
    :mini-variant="navigationStatus && permanentStatus"
    :expand-on-hover="navigationStatus && permanentStatus"
    app
    clipped
    :value="navigationStatus"
  >
    <!-- Top buttons -->
    <div>
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
              <!--              vertical_align_top, vertical_align_bottom-->
              {{ appBarStatus ? 'vertical_align_top' : 'vertical_align_bottom' }}
            </v-icon>
          </v-btn>
        </template>
        <span>{{ appBarStatus ? 'open app bar' : 'close app bar' }}</span>
      </v-tooltip>
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
      <v-list-item
        link
        two-line
      >
        <v-list-item-avatar>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>My Files</v-list-item-title>
          <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
        </v-list-item-content>
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
  name: 'NavigationDrawer',
})
export default class NavigationDrawer extends Vue {
  @Prop() private readonly navigationStatus!: boolean
  @Prop() private readonly permanentStatus!: boolean
  @Prop() private readonly appBarStatus !: boolean

  private changePermanentStatus () {
    this.$store.dispatch('app/controlPermanentStatus')
  }

  private changeAppBarStatus () {
    this.$store.dispatch('app/controlAppBarStatus')

  }
}
</script>
