
<template>
  <v-navigation-drawer
    v-model="drawerComputed"
    app
    disable-resize-watcher
    temporary
    overlay-color
    @input="onChangeDrawer"
    @transitionend="onChangeDrawer"
  >
    <template v-if="user.userToken" v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img :src="user.avator">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.nickname }}</v-list-item-title>
          <v-list-item-subtitle>{{ welcomeMessage }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <template v-else v-slot:prepend>
      <v-card-actions class="justify-center" full>
        <v-btn class="ma-2" to="/login" outlined>{{ unloggedInButton }}</v-btn>
      </v-card-actions>
    </template>
    <v-divider />
    <NavList :menus="menus" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { TabsInterface } from '@/dataInterface/TabInterface'
import { UserModule } from '@/store/modules/uesr'
// import NavList from '../navBarCompoents/navList.vue'
import NavList from './navBarCompoents/navList.vue'

@Component({
  name: 'NavBar',
  components: {
    NavList
  }
})
export default class extends Vue {
  private welcomeMessage = '환영합니다.'
  private unloggedInButton = '로그인하기'
  @Prop() private drawer!: boolean
  @Prop() private menus!: TabsInterface

  onChangeDrawer() {
    this.$emit('onChangeDrawer', this.drawer)
  }
  get user(): object {
    return UserModule
  }

  get drawerComputed(): boolean {
    return this.drawer
  }

  set drawerComputed(value:boolean) {
    this.drawer = value
    this.$emit('onChangeDrawer', value)
  }
}
</script>

<style scoped>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>
