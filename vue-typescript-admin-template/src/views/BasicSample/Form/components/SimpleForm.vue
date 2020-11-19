<!--
  Author: Youngjin Kwak
  CreatedAt: 11-14-2020
  UpdatedAt: 11-16-2020
  Description: Simple Form Components
-->
<template>
  <v-card
    color="secondary"
  >
    <v-card-title>
      Simple Verison
      <help-how-to-use
        content="This is just simple version of Form"
      />
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-form
        ref="versionOneForm"
      >
        <v-text-field
          label="Name"
          outlined
        />
        <v-text-field
          label="Email"
          :rules="versionOneRules.email"
          outlined
        />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'visibility' : 'visibility_off'"
          label="Password"
          outlined
          prepend-inner-icon="mdi-lock"
          @click:append-icon="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-card-actions
      class="justify-end"
    >
      <v-btn
        text
      >
        cancel
      </v-btn>
      <v-btn
        color="primary"
        @click="submitVersionOne"
      >
        save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import HelpHowToUse from '@/components/helpHowToUse/index.vue'

/**
   * @author - Youngjin Kwak
   * @description -
   */
@Component({
  name: 'SimpleForm',
  components: { HelpHowToUse },
})
export default class SimpleForm extends Vue {
  @Ref('versionOneForm')
  private readonly versionOneForm!: HTMLFormElement

  private showPassword = false

  /* Version 1 data */
  private name = ''
  private password = ''
  private email = ''
  private versionOneRules = {
    name: [],
    email: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => (/.+@.+\..+/.test(v)) || 'E-mail must be valid',
    ]
  }

  private submitVersionOne (e: any) {
    e.preventDefault()
  }
}
</script>
