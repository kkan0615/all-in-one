<!--
  Author: Youngjin Kwak
  CreatedAt: 11-08-2020
  UpdatedAt: 11-08-2020
  Description: Auth login card ( Display when user is logged in)
-->
<template>
  <v-card
    color="secondary"
    tile
    min-width="280px"
  >
    <!--    <v-card-title>-->
    <!--      {{ userInfo.nickname }}-->
    <!--    </v-card-title>-->
    <!--    <v-toolbar-->
    <!--      color="primary"-->
    <!--      dense-->
    <!--      shaped-->
    <!--      tile-->
    <!--    >-->
    <!--      <v-toolbar-title>-->
    <!--        {{ userInfo.nickname }}-->
    <!--      </v-toolbar-title>-->
    <!--    </v-toolbar>-->
    <v-list
      color="primary"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar
            color="primary"
            rounded
            tile
          >
            <v-img
              v-if="userInfo.avatar"
              :src="userInfo.avatar"
            />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            class="text-h6"
          >
            {{ userInfo.nickname }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ userInfo.roleId.name }}
          </v-list-item-subtitle>
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
          @click="unreadyFunction"
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
              My Profile
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- Account Setting -->
      <v-list
        color="secondary"
        class="pa-0"
      >
        <v-list-item
          link
          @click="unreadyFunction"
        >
          <v-list-item-icon>
            <v-icon>
              settings
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="cursor-pointer"
            >
              Account Setting
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- Inbox(Notifications and others such as email and chat -->
      <v-list
        color="secondary"
        class="pa-0"
      >
        <v-list-item
          link
          @click="unreadyFunction"
        >
          <v-list-item-icon>
            <v-icon>
              inbox
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="cursor-pointer"
            >
              Inbox
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- Logout -->
      <v-divider />
      <v-list
        color="secondary"
        class="pa-0"
      >
        <v-list-item
          link
          @click="logout"
        >
          <v-list-item-icon>
            <v-icon>
              power_settings_new
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="cursor-pointer"
            >
              Logout
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
  name: 'AuthLoginCard',
})
export default class AuthLoginCard extends Mixins(UserStateHandler) {
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
