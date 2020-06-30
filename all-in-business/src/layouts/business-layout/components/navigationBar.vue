<template>
  <v-navigation-drawer app :value="navigation" @input="onChangeNavigation">
    <v-list v-if="isLoggedIn">
      <v-list-item class="px-2" dark>
        <v-list-item-avatar>
          <v-img :src="user.avator" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">{{ user.nickname }}</v-list-item-title>
          <v-list-item-subtitle>{{ userRoles }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list v-else>
      <v-list-item class="px-2" dark>
        <v-btn block large :color="designSetting.subColorOne" @click="onClcikLoginButton">Login</v-btn>
      </v-list-item>
    </v-list>

    <v-divider />
    <div>
      NAVIGATION
      <v-icon x-small>search</v-icon>
    </div>
    <div v-for="(menu, i) in allowedMenus" :key="i">
      <v-list v-if="menu.children.length < 1 && !menu.meta.hidden" :expand="false" dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon x-small>{{ menu.meta.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="text-body-2">{{ menu.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list v-else-if="menu.children.length > 0 && !menu.meta.hidden" shaped dense>
        <v-list-group
          :prepend-icon="menu.meta.icon"
          :value="false"
          :color="designSetting.subColorFive"
        >
          <template v-slot:activator>
            <v-list-item-title class="text-body-2">{{ menu.meta.title }}</v-list-item-title>
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
            <v-list-item-title class="text-caption">{{ child.meta.title }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon>{{ child.meta.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
    <v-divider />
    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          :to="`/${$route.path.split('/')[1]}/setting`"
          :color="designSetting.subColorOne"
          block
        >Setting</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { UserModule, UserInterface } from '@/store/modules/uesr'
import { DesignSettingModule } from '@/store/modules/designSetting'
import { DesginColorInterface } from '@/store/data/colors'
import { RouteConfig } from 'vue-router'

@Component({
  name: 'BusinessNavigationBar'
})
export default class extends Vue {
  @Prop() private menus!: Array<any>
  @Prop() private navigation!: boolean
  @Prop() private isMobile!: boolean

  private dark = true
  private expandOnHover = true

  public get isLoggedIn(): string {
    return UserModule.userToken
  }

  private get designSetting(): DesginColorInterface {
    return DesignSettingModule.designColor
  }

  public get user(): UserInterface {
    return UserModule
  }

  public get userRoles(): string {
    let result = ''

    for (let i = 0; i < UserModule.roles.length; i++) {
      const element = UserModule.roles[i]
      if (i !== UserModule.roles.length - 1) {
        result += `${element}, `
      } else {
        result += `${element} `
      }
    }

    return result
  }

  private get allowedMenus(): RouteConfig[] {
    let result = []
    result = this.menus.filter((e: RouteConfig) => {
      console.log(e)

      if (!e.meta.roles) {
        return true
      }
      const filteredArr = e.meta.roles.filter((e: string) => UserModule.roles.indexOf(e) !== -1)
      if (filteredArr) {
        return true
      } else {
        return false
      }
    })
    console.log(result)

    return result
  }

  private onClcikLoginButton() {
    this.$router.push({ name: 'Login' })
  }

  private onChangeNavigation(value: boolean) {
    this.$emit('onChangeNavigation', value)
  }

  created() {
    console.log(this.$route.path.split('/')[1])
  }
}
</script>

<style scoped>
</style>
