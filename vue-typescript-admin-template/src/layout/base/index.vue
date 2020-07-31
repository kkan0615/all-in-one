<template>
  <v-app>
    <AppBar
      :navigation-status="navigationStatus"
      @changeNavigationStatus="changeNavigationStatus"
    />
    <NavigationDrawer
      :navigation-status="navigationStatus"
      @changeNavigationStatus="changeNavigationStatus"
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
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppBar from './components/AppBar/index.vue'
import NavigationDrawer from './components/NavigationDrawer/index.vue'

  @Component({
    name: 'BaseLayout',
    components: {
      AppBar,
      NavigationDrawer
    }
  })
export default class BaseLayout extends Vue {
  public navigationStatus = true

  public changeNavigationStatus (status: boolean) {
    this.navigationStatus = status
  }
}
</script>
