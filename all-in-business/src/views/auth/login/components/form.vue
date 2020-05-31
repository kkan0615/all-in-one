<template>
  <div>
    <v-img
      class="pa-2 loginLogo"
      src="@/assets/sampleLogo.png"
      aspect-ratio="3"
    />
    <v-alert v-show="showAlert" :type="alertType">
      {{ alertMessage }}
    </v-alert>
    <v-form
      ref="loginForm"
    >
      <v-text-field
        v-model="userId"
        outlined
        :label="label['id'].label"
        name="login"
        prepend-inner-icon="person"
        type="text"
        :color="mainColor"
        background-color="white"
        :rules="[rules.required]"
      />
      <v-text-field
        id="password"
        v-model="password"
        outlined
        :label="label['password'].label"
        name="password"
        prepend-inner-icon="lock"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        :color="mainColor"
        background-color="white"
        :rules="[rules.required]"
        @click:append="showPassword = !showPassword"
      />
    </v-form>
    <v-btn
      :color="mainColor"
      large
      dark
      block
      :loading="loading"
      @click="login"
    >
      login
    </v-btn>
    <v-btn
      color="blue"
      class="my-5"
      large
      dark
      block
    >
      google Login
    </v-btn>
    <v-divider />
    <p class="text-center title my-5">Would you like to join our team? Click <router-link :to="{ name: 'Register' }">here</router-link>!</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/uesr'

@Component({
  name: 'LoginForm'
})
export default class extends Vue {
  private routerPath = '/'
  private userId = ''
  private password = ''
  private rules = {
    required: (value : string) => !!value || 'Required.'
  }
  private showAlert = false
  private alertType = 'success'
  private alertMessage = ''
  private label = { id: { label: 'Login' }, password: { label: 'Password' }}
  private showPassword= false
  private mainColor = '#582B3E'
  private loading = false

  $refs!: {
    loginForm: HTMLFormElement
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async login() {
    const validate = this.$refs.loginForm.validate()
    if (validate) {
      try {
        this.loading = true
        const isScuccess = await UserModule.login({ userId: this.userId, password: this.password })

        if (isScuccess) {
          this.$router.go(-1)
        } else {
          this.showAlertMessage('Fail to login! Check your id or password', 'error')
        }
        this.loading = false
      } catch (error) {
        console.error(error)
        this.showAlertMessage('Error to connect with sever, try again after a moment', 'error')
        this.loading = false
      }
    }
  }

  private showAlertMessage(message: string, type: string) {
    this.showAlert = true
    this.alertType = type
    this.alertMessage = message
  }
}
</script>

<style scoped>

  .loginLogo {
    margin-bottom: 60px;
  }
</style>
