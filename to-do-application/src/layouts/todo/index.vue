<template>
  <v-app>
    <TodoLayoutAppBar
      :navigator-bar="navigatorBar"
      @openNavigatorBar="openNavigatorBar"
      @closeNavigatorBar="closeNavigatorBar"
    />
    <TodoLayoutNavigatorBar
      :navigator-bar="navigatorBar"
      @changeNabigatorBarStatus="changeNabigatorBarStatus"
    />
    <v-main>
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
            md="9"
          >
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TodoLayoutAppBar from './components/appBar/index.vue'
import TodoLayoutNavigatorBar from './components/navigatorBar/index.vue'

@Component({
  name: 'TodoLayout',
  components: {
    TodoLayoutAppBar,
    TodoLayoutNavigatorBar
  }
})
export default class extends Vue {
  private navigatorBar !: boolean

  constructor() {
    super()
    this.navigatorBar = false
  }

  private changeNabigatorBarStatus(status: boolean) {
    this.navigatorBar = status
  }

  /**
   * @description Open navigator bar
   */
  private openNavigatorBar() {
    this.navigatorBar = true
  }

  /**
   * @description Open navigator bar
   */
  private closeNavigatorBar() {
    this.navigatorBar = false
  }
}
</script>
