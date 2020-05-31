<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App'
  // components: {
  //   Footer
  // }
})
export default class extends Vue {

}
</script>
