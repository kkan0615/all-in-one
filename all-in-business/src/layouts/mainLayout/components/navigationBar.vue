<template>
  <v-navigation-drawer
    :expand-on-hover="expandOnHover"
    app
    dark
    :value="navigation"
    @input="onChangeNavigation"
  >
    <v-list>
      <v-list-item class="px-2" dark>
        <v-list-item-avatar>
          <v-img src="https://avatars0.githubusercontent.com/u/46660361?s=460&u=5c87a78f30eb7777300fa1f8fd539aa4a4cefdb1&v=4" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">Youngjin Kwak</v-list-item-title>
          <v-list-item-subtitle>kkan0615@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />
    <v-list :expand="true">
      <v-list-group v-for="(menu) in menus" :key="menu.id" :color="'white'" :prepend-icon="menu.icon" dark>
        <template v-slot:activator>
          <v-list-item-title>{{ menu.name }}</v-list-item-title>
        </template>
        <v-spacer />
        <div v-for="(subMenu1) in menu.subMenus" :key="subMenu1.id">
          <v-list-group v-if="subMenu1.subMenus.length > 0" no-action :color="'white'" :prepend-icon="subMenu1.icon">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ subMenu1.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(subMenu2) in subMenu1.subMenus" :key="subMenu2.id" :to="{ path : subMenu2.link }">
              <v-list-item-icon>
                <v-icon v-text="subMenu2.icon" />
              </v-list-item-icon>
              <v-list-item-title>
                {{ subMenu2.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else link :to="{ path : subMenu1.link }">
            <v-list-item-icon>
              <v-icon v-text="subMenu1.icon" />
            </v-list-item-icon>
            <v-list-item-title>
              {{ subMenu1.name }}
            </v-list-item-title>
          </v-list-item>
        </div>
        <v-divider />
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

// import { gql } from 'apollo-boost'

@Component({
  name: 'MainNavigationBar'
})
export default class extends Vue {
  @Prop() private menus!: Array<any>
  @Prop() private navigation!: boolean
  @Prop() private isMobile!: boolean

  private dark = true
  private expandOnHover = true

  onChangeNavigation(value: boolean) {
    this.$emit('onChangeNavigation', value)
  }

  @Watch('isMobile')
  isMobileHandler(newValue: boolean) {
    if (newValue) {
      this.expandOnHover = false
      this.$emit('onChangeNavigation', false)
    } else {
      this.expandOnHover = true
      this.$emit('onChangeNavigation', true)
    }
  }
}
</script>

<style scoped>
</style>
