<template>
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
      <!-- <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <advertisement />
          </v-col> -->
      <v-col
        cols="12"
        sm="12"
        md="3"
      >
        <login-form />
        <!-- <advertisement /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { UserModule } from '@/store/modules/uesr'
import { Advertisement, LoginForm } from './components'

@Component({
  name: 'Login',
  components: {
    Advertisement,
    LoginForm
  }
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
