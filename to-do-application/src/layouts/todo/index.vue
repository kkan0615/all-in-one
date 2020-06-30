<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'TodoLayout'
  // components: {
  //   Footer
  // }
})
export default class extends Vue {
}
</script>
