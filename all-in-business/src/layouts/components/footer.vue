<template>
  <div>
    <v-footer
      padless
      app
      absolute
      fixed
      class="grey lighten-4"
    >
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Youngjin</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Calendar'
  // components: {
  //   Footer
  // }
})
export default class extends Vue {
  private message = 'message'
}
</script>

<style>
</style>
