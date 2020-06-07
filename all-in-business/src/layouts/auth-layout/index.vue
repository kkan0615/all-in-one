<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
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
