<template>
  <v-app>
    <AppBar
      :drawer="drawer"
      :tabs="menus"
      @onChangeDrawer="onChangeDrawer"
    />
    <NavBar
      :drawer="drawer"
      :menus="menus"
      @onChangeDrawer="onChangeDrawer"
    />
    <v-content>
      <v-container class="fill-height" app>
        <router-view />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppBar, Footer, NavBar } from './components'
import { gql } from 'apollo-boost'

@Component({
  name: 'Calendar',
  components: {
    AppBar,
    Footer,
    NavBar
  }
})
export default class extends Vue {
  private message = 'message'
  private drawer = false
  private menus = []

  onChangeDrawer(drawerStatus:boolean) {
    this.drawer = drawerStatus
  }

  async loadTabs() {
    try {
      const res = await this.$apollo.query({
        query: gql`
          query{
            allTabs {
              id
              name
              icon
              content
              tags {
                id
                icon
                name
                link
                subTags {
                  id
                  icon
                  link
                  name
                }
              }
            }
          }
        `
      })
      this.menus = res.data.allTabs
    } catch (error) {
      console.error(error)
    }
  }
  created() {
    this.loadTabs()
  }
}
</script>

<style scoped>
</style>
