<template>
  <v-menu
    v-model="menu"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn
        v-if="isLoggedIn && userInfo.avatar"
        icon
        v-on="on"
      >
        <v-avatar
          size="32"
          color="primary"
        >
          <v-img
            v-if="userInfo.avatar"
            :src="userInfo.avatar"
          />
          <span
            v-else
            class="white--text"
          >
            {{ userInfo.nickname.substring(0,2) }}
          </span>
        </v-avatar>
      </v-btn>
      <v-btn
        v-else
        icon
        v-on="on"
      >
        <v-icon>account_circle</v-icon>
      </v-btn>
    </template>
    <auth-login-card
      v-if="isLoggedIn"
    />
    <!--    <v-list-->
    <!--      v-if="isLoggedIn"-->
    <!--    >-->
    <!--      <v-list-item-->
    <!--        link-->
    <!--        @click="logout"-->
    <!--      >-->
    <!--        <v-list-item-title-->
    <!--          class="cursor-pointer"-->
    <!--        >-->
    <!--          Logout-->
    <!--        </v-list-item-title>-->
    <!--      </v-list-item>-->
    <!--    </v-list>-->
    <v-list
      v-else-if="!isLoggedIn"
    >
      <v-list-item
        link
        :to="{ name: 'login' }"
      >
        <v-list-item-title
          class="cursor-pointer"
        >
          Login
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title
          class="cursor-pointer"
        >
          Register
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator'
import { UserStateHandler } from '@/mixins/userStateHandler'
import AuthLoginCard from '@/layout/base/components/AppBar/components/AuthLoginCard.vue'

@Component({
  name: 'AuthAppBar',
  components: { AuthLoginCard },
})
export default class AuthAppBar extends Mixins(UserStateHandler) {
  /* menu is opened or not */
  private menu = false

  private async logout () {
    await this.$store.dispatch('user/logout')
  }
}
</script>
