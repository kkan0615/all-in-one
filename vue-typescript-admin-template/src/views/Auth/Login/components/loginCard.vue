<!--
  Author: Youngjin Kwak
  CreatedAt: 08-02-2020
  UpdatedAt: 08-02-2020
  Description: Sample Vue Page
-->
<template>
  <div>
    <v-card
      class="my-3"
    >
      <v-card-title>
        Log in
      </v-card-title>
      <v-card-text>
        <v-form
          ref="loginForm"
        >
          <v-text-field
            ref="userIdField"
            v-model="userId"
            label="ID"
            prepend-inner-icon="mdi-account"
            outlined
            :rules="rules.userId"
            required
            @keyup.enter="onEnterUserId"
          />
          <v-text-field
            ref="passwordField"
            v-model="password"
            label="PASSWORD"
            outlined
            prepend-inner-icon="mdi-lock"
            :rules="rules.password"
            required
            @keyup.enter="login"
          />
          <div class="font-weight-black text-right">
            <router-link to="#">
              Forgot password?
            </router-link>
          </div>
          <v-checkbox
            v-model="remember"
            label="Remember id"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          block
          large
          @click="login"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title
        class="justify-center"
      >
        <div class="mx-2">
          New to here?
        </div>
        <router-link to="">
          Create an account.
        </router-link>
      </v-card-title>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { UserLoginState } from '@/store/modules/user'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'LoginCard',
})
export default class LoginCard extends Vue {
  @Ref('loginForm')
  private readonly loginForm !: HTMLFormElement
  @Ref('userIdField')
  private readonly userIdField!: HTMLInputElement
  @Ref('passwordField')
  private readonly passwordField!: HTMLInputElement

  mounted () {
    this.userIdField.focus()
  }

  private userId = ''
  private password = ''
  private showPassword = ''
  private remember = false

  private rules = {
    userId: [
      (v: string) => !!v || 'UserId is required',
    ],
    password: [
      (v: string) => !!v || 'Password is required',
    ]
  }

  private onEnterUserId () {
    this.passwordField.focus()
  }

  private async login () {
    const valid = this.loginForm.validate()
    if (valid) {
      const success = await this.$store.dispatch('user/login', {
        userId: this.userId,
        password: this.password
      } as UserLoginState)
      if (success) {
        await this.$router.push({ name: 'MainDashboard' })
      }
    }
  }
}
</script>
