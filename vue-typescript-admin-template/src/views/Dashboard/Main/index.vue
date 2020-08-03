<template>
  <div>
    MainDashboard
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'MainDashboard',
  })
export default class MainDashboard extends Vue {
  created () {
    console.log('hello')
  }
}
</script>
