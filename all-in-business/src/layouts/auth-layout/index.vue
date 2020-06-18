<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AuthLayoutIndex',
  components: {
  }
})
export default class extends Vue {
}
</script>

<style scoped>
</style>
