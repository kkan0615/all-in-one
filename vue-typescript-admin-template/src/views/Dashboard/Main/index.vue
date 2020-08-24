<template>
  <div>
    MainDashboard
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SnackbarState } from '@/store/modules/alert'

@Component({
  name: 'MainDashboard',
})
export default class MainDashboard extends Vue {
  mounted () {
    this.$store.commit('alert/showSnackBar', {
      content: 'Success to pass through store',
      color: 'info',
    } as SnackbarState)
  }
}
</script>
