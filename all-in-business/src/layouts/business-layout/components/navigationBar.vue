<template>
  <v-navigation-drawer
    app
    dark
    :value="navigation"
    @input="onChangeNavigation"
  >
    <v-list v-if="isLoggedIn">
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

    <v-list v-else>
      <v-list-item class="px-2" dark>
        <v-btn
          block
          large
        >
          Login
        </v-btn>
      </v-list-item>
    </v-list>

    <v-divider />
    <div v-for="(menu, i) in menus" :key="i">
      <v-list v-if="menu.children.length < 1 && !menu.meta.hidden">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>{{ menu.meta.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title>{{ menu.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list v-else-if="menu.children.length > 0 && !menu.meta.hidden" shaped>
        <v-list-group
          :prepend-icon="menu.meta.icon"
          value="true"
          color="white"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(child, j) in menu.children"
            :key="j"
            :to="`${menu.path}/${child.path}`"
            link
            color="white"
          >
            <v-list-item-icon>
              <v-icon />
            </v-list-item-icon>
            <v-list-item-title>{{ child.name }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon>{{ child.meta.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          :to="`/${$route.path.split('/')[1]}/setting`"
          block
        >Setting</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/uesr'

@Component({
  name: 'MainNavigationBar'
})
export default class extends Vue {
  @Prop() private menus!: Array<any>
  @Prop() private navigation!: boolean
  @Prop() private isMobile!: boolean

  private dark = true
  private expandOnHover = true

  public get isLoggedIn() : string {
    return UserModule.userToken
  }

  onChangeNavigation(value: boolean) {
    this.$emit('onChangeNavigation', value)
  }

  created() {
    console.log(this.$route.path.split('/')[1])
  }
}
</script>

<style scoped>
</style>
