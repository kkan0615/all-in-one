<template>
  <v-app>
    <alert-snackbar />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AlertSnackbar from '@/components/Alert/Snackbar/index.vue'

@Component({
  name: 'App',
  components: {
    AlertSnackbar
  }
})
export default class App extends Vue {
}
</script>

