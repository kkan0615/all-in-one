<!--
  Author: Youngjin Kwak
  CreatedAt: 08-02-2020
  UpdatedAt: 08-02-2020
  Description: Sample Vue Page
-->
<template>
  <div>
    <v-card
      class="ma-5 pa-2"
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
            @keyup.enter="onEnterUserId"
          />
          <v-text-field
            ref="passwordField"
            v-model="password"
            label="PASSWORD"
            outlined
            prepend-inner-icon="mdi-lock"
            @keyup.enter="login"
          />
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
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'

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

  private userId = ''
  private password = ''
  private showPassword = ''
  private remember = false

  private rules = {
    userId: [

    ]
  }

  private onEnterUserId () {
    this.passwordField.focus()
  }

  private login () {
    console.log('login')
    const valid = this.loginForm.validate()
    console.log(valid)
  }
}
</script>
