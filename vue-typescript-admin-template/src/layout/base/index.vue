<template>
  <v-app>
    <AppBar
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
              <router-view  />
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

  @Component({
    name: 'BaseLayout',
    components: {
      AppBar
    }
  })
export default class BaseLayout extends Vue {
  //TODO: 나중에는 Cookie에 저장된 것을 가져올 예정
  public navigationStatus: 'open' | 'close' = 'open'

  public changeNavigationStatus (status: 'open' | 'close') {
    this.navigationStatus = status
  }
}
</script>
