<template>
  <div>
    <v-menu v-if="user.userToken" left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-avatar v-if="user.userToken" :color="color" :size="size">
            <v-img v-if="user.avator" :src="user.avator" alt="user.nickname" />
            <span v-else class="white--text headline">{{ user.nickname.substring(0,2) }}</span>
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="option in avatarOptions" :key="option" @click="option.click">
          <v-list-item-title>{{ option.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu v-else left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="option in unAvatarOptions" :key="option.name" :to="option.link" @click="option">
          <v-list-item-title>{{ option.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/uesr'

interface OptionInterface {
  icon :string
  name :string
  link :string | null
  click :Function | null
}

@Component({
  name: 'TestChild'
  // components: {
  //   AdminDashboard,
  //   EditorDashboard
  // }
})
export default class extends Vue {
  private message = 'testChild message'
  private size = 36
  private color = 'orange'
  private avatarOptions :Array<OptionInterface> = [
    { icon: '', name: 'logout', link: '', click: this.logout },
    { icon: '', name: 'profile', link: '', click: null },
    { icon: '', name: 'basket', link: '', click: null }
  ]
  private unAvatarOptions : Array<OptionInterface> = [
    { icon: '', name: 'login', link: '/login', click: null },
    { icon: '', name: 'register', link: '', click: null }
  ]

  // login(): void {
  //   UserModule.login()
  // }

  logout(): void {
    UserModule.logout()
  }

  get user(): object {
    return UserModule
  }
}
</script>

<style lang="scss" scoped>
</style>
