<template>
  <div>
    <!-- <v-btn icon>
      <v-icon>shopping_cart</v-icon>
    </v-btn> -->
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>account_circle</v-icon>
        </v-btn>
      </template>

      <v-list v-if="isLogin">
        <!-- <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item> -->
        <v-list-item>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Setting</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item
          @click="onClickLogin"
        >
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item
          @click="onClickRegister"
        >
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/uesr'

// import { gql } from 'apollo-boost'

@Component({
  name: 'MainIconsWithMenu',
  components: {
  }
})
export default class extends Vue {
  @Prop() private isMobile!: boolean

  private dark = true
  private items !: Array<any>

  constructor() {
    super()
    this.items = []
  }

  public get isLogin() : boolean {
    let bool = false
    if (UserModule.userToken) {
      bool = true
    }
    return bool
  }

  public onClickLogin() {
    this.$router.push({ name: 'Login' })
  }

  public onClickRegister() {
    this.$router.push({ name: 'Register' })
  }
}
</script>

<style scoped>
</style>
