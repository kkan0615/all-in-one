<template>
  <v-navigation-drawer
    color="secondary"
    app
    :value="navigationStatus"
  >
    <!-- Top place -->
    <v-list>
      <v-subheader>
        <div
          class="font-weight-black"
          @click="moveToHome"
        >
          Vue-Admin-Template
        </div>
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
      </v-subheader>
    </v-list>
    <v-divider />
    <!--  List of Menus  -->
    <div
      v-if="isLoggedIn"
      class="text-center ma-2"
    >
      <v-avatar
        class="my-2"
        size="102"
        color="primary"
      >
        <v-img
          v-if="userInfo.avatar"
          :src="userInfo.avatar"
        />
        <span
          v-else
          class="white--text text-h3"
        >
          {{ userInfo.nickname.substring(0,2) }}
        </span>
      </v-avatar>
      <div
        class="my-2 text-h6"
      >
        {{ userInfo.nickname }}
      </div>
    </div>
    <v-divider />
    <SearchMenu />

    <!-- Favorite menu list-->
    <v-divider />
    <favorite-menu />
    <!-- Program Menu list -->
    <v-divider />
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
    <v-divider />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator'
import SearchMenu from './components/SearchMenu.vue'
import MenuParent from './components/MenuParent.vue'
import FavoriteMenu from './components/FavoriteMenu.vue'
import ContextMenu from '@/components/ContextMenu/index.vue'
import { CustomRouteConfig } from '@/types/customRouteConfig'
import { UserStateHandler } from '@/mixins/userStateHandler'

@Component({
  name: 'NavigationDrawer',
  components: {
    SearchMenu,
    MenuParent,
    FavoriteMenu,
    ContextMenu
  }
})
export default class NavigationDrawer extends Mixins(UserStateHandler) {
  @Prop({ type: Boolean, required: true })
  private readonly navigationStatus!: boolean
  @Prop({ type: Boolean, required: true })
  private readonly permanentStatus!: boolean
  @Prop({ type: Boolean, required: true })
  private readonly appBarStatus !: boolean
  @Prop()
  private readonly menus !: Array<CustomRouteConfig>

  private changePermanentStatus () {
    this.$store.dispatch('app/controlPermanentStatus')
  }

  private changeAppBarStatus () {
    this.$store.dispatch('app/controlAppBarStatus')
  }

  private async moveToHome () {
    await this.$router.push({ name: 'MainDashboard' })
  }

}
</script>
