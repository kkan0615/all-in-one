<template>
  <v-app id="inspire">
    <v-main
      class="auth-background"
    >
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
          no-gutters
          class="mb-6"
        >
          <v-col
            cols="12"
            sm="12"
            md="4"
          >
            <p>test</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { UserModule } from '@/store/modules/uesr'

@Component({
  name: 'Register'
  // components: {
  //   Advertisement,
  //   LoginForm
  // }
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
  .auth-background {
    background-color: #d2d6d3;
  }
</style>
