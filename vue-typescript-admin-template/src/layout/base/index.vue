<!--
@TODO: Clip-left써도 안됨... app bar가 안들어감 ...
-->
<template>
  <v-app>
    <AppBar
      :navigation-status="navigationStatus"
      :app-bar-status="appBarStatus"
    />
    <NavigationDrawer
      :navigation-status="navigationStatus"
      :permanent-status="permanentStatus"
      :app-bar-status="appBarStatus"
    />
    <v-main fulid>
      <v-container
        class="fill-height"
        app
        fluid
      >
        <v-row
          align="center"
          justify="center"
          no-gutters
          class="mb-6"
        >
          <v-col
            cols="12"
            sm="12"
            md="11"
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

@Component({
  name: 'BaseLayout',
  components: {
    AppBar,
    NavigationDrawer,
    SubNavigationDrawer
  }
})
export default class BaseLayout extends Vue {
  private get navigationStatus () {
    return this.$store.state.app.navigatorStatus
  }

  private get appBarStatus () {
    return this.$store.state.app.appBarStatus
  }

  private get permanentStatus () {
    console.log(this.$store.state.app.permanentStatus)
    return this.$store.state.app.permanentStatus
  }

}
</script>
