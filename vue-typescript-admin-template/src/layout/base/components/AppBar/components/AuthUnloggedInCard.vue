<!--
  Author: Youngjin Kwak
  CreatedAt: 11-19-2020
  UpdatedAt: 11-19-2020
  Description: Auth un logged in card ( Display when user is not logged in)
-->
<template>
  <v-card
    color="secondary"
    tile
    min-width="280px"
  >
    <v-list
      color="primary"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://octodex.github.com/images/Mardigrastocat.png"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            class="text-h6"
          >
            Vue-Admin-Template
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-text
      class="pa-0"
    >
      <!-- Profile -->
      <v-list
        color="secondary"
        class="pa-0"
      >
        <v-list-item
          link
          :to="{ name: 'login' }"
        >
          <v-list-item-icon>
            <v-icon>
              person
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="cursor-pointer"
            >
              Sign in
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- Register -->
      <v-list
        color="secondary"
        class="pa-0"
      >
        <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon>
              how_to_reg
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="cursor-pointer"
            >
              Sign up
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator'
import { UserStateHandler } from '@/mixins/userStateHandler'
import store from '@/store'
import { SnackbarState } from '@/store/modules/alert'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'AuthUnloggedInCard',
})
export default class AuthUnloggedInCard extends Mixins(UserStateHandler) {
  private async logout () {
    await this.$store.dispatch('user/logout')
  }

  private unreadyFunction () {
    store.commit('alert/showSnackBar', {
      content: 'Sorry, this content or function is not ready yet',
      color: 'info',
      code: 200
    } as SnackbarState)
  }
}
</script>
