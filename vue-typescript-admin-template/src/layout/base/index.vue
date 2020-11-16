<!--
@TODO: Clip-left써도 안됨... app bar가 안들어감 ...
-->
<template>
  <v-app>
    <full-screen-loading />
    <app-bar
      :navigation-status="navigationStatus"
      :app-bar-status="appBarStatus"
    />
    <navigation-drawer
      :navigation-status="navigationStatus"
      :permanent-status="permanentStatus"
      :app-bar-status="appBarStatus"
      :menus="displayRoutes"
    />
    <v-main fulid>
      <v-container
        app
        fluid
      >
        <v-row
          align="center"
          justify="center"
          no-gutters
        >
          <v-col
            cols="12"
            sm="12"
            :md="$route.meta.margin"
          >
            <!--            <transition name="fade-transform" mode="out-in" appear>-->
            <router-view />
            <!--            :key="key" is in Router-view-->
            <!--            </transition>-->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <sub-navigation-drawer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppBar from './components/AppBar/index.vue'
import NavigationDrawer from './components/NavigationDrawer/index.vue'
import SubNavigationDrawer from './components/SubNavigationDrawer/index.vue'
import FullScreenLoading from '@/components/loading/FullScreenLoading/index.vue'

@Component({
  name: 'BaseLayout',
  components: {
    FullScreenLoading,
    AppBar,
    NavigationDrawer,
    SubNavigationDrawer
  }
})
export default class BaseLayout extends Vue {
  private get displayRoutes () {
    return this.$store.state.menu.displayRoutes
  }

  private get navigationStatus () {
    return this.$store.state.app.navigatorStatus
  }

  private get appBarStatus () {
    return this.$store.state.app.appBarStatus
  }

  private get permanentStatus () {
    return this.$store.state.app.permanentStatus
  }

}
</script>
