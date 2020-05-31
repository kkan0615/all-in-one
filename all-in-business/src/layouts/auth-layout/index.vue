<template>
  <v-app id="inspire">
    <v-content class="auth-background">
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AuthIndex',
  components: {
  }
})
export default class extends Vue {
}
</script>

<style scoped>
  .auth-background {
    background-color: #d2d6d3;
  }
</style>
