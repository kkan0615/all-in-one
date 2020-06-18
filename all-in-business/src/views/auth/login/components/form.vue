<template>
  <div>
    <v-img
      class="pa-2 loginLogo"
      src="@/assets/sampleLogo.png"
      aspect-ratio="3"
    />
    <v-alert
      v-model="showAlert"
      :type="alertType"
    >
      {{ alertMessage }}
    </v-alert>
    <div class="my-4 text-right">
      <TranslateMenu />
    </div>
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
        :rules="[userIdRules.required]"
        @keyup.enter="login"
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
        :rules="[passwordRules.required]"
        @click:append="showPassword = !showPassword"
        @keyup.enter="login"
      />
    </v-form>
    <v-btn
      :color="getDesignSetting.subColorOne"
      large
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
import { DesignSettingModule } from '@/store/modules/designSetting'
import { DesginColorInterface } from '@/store/data/colors'
import TranslateMenu from '@/layouts/business-layout/components/appBar/translateMenu.vue'

@Component({
  name: 'LoginForm',
  components: {
    TranslateMenu
  }
})
export default class extends Vue {
  private routerPath = '/'
  private userId = ''
  private password = ''
  private userIdRules = {
    required: (value : string): any => !!value || 'Required'
  }

  private passwordRules = {
    required: (value : string) :any => !!value || 'Required.'
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

  private get getDesignSetting() : DesginColorInterface {
    return DesignSettingModule.designColor
  }

  created() {
    this.userIdRules.required = (value : string) => !!value || this.$t('login.requireUserId')
    this.passwordRules.required = (value : string) => !!value || this.$t('login.requirePassword')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async login() {
    const validate = this.$refs.loginForm.validate()
    if (validate) {
      try {
        this.loading = true
        const isScuccess = await UserModule.login({ userId: this.userId, password: this.password })

        if (isScuccess.success) {
          this.$router.go(-1)
        } else {
          this.showAlertMessage(isScuccess.message, 'error')
        }
        this.loading = false
      } catch (error) {
        console.error(error)
        this.showAlertMessage('Error: Client Error occured...', 'error')
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
