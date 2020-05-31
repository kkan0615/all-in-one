<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ShoppingMallIndex'
  // components: {
  //   IntroductionCard,
  //   TopDescription,
  //   BottomBanner
  // }
})
export default class extends Vue {
  private message = 'Hello Shopping mall index page'
}
</script>

<style scoped>
</style>
