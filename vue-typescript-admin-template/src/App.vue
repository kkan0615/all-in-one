<template>
  <v-app>
    <alert-snackbar />
    <router-view :style="themeStyle" />
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
  /**
   * @description Use it to set the style in script tag
   * @return string - completed string of style
   */
  private get themeStyle (): string {
    return `background: ${this.$vuetify.theme.currentTheme.background}`
  }
}
</script>

