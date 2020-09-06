<!--
  Author: Youngjin Kwak
  CreatedAt: 09-05-2020
  UpdatedAt: 09-05-2020
  Description: Auth such as login layout
-->
<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'AuthLayout',
})
export default class AuthLayout extends Vue {
}
</script>
