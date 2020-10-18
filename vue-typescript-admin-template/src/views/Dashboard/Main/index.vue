<template>
  <div>
    MainDashboard

    <p>Cookies: {{ cookiesInfo }}</p>
    <p>Users: {{ users }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { SnackbarState } from '@/store/modules/alert'
import Cookies from 'js-cookie'

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

  private get cookiesInfo () {
    return Cookies.getJSON()
  }

  private get users () {
    return this.$store.state.user
  }
}
</script>
