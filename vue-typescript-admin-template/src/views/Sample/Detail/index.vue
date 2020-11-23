<!--
  Author: Youngjin Kwak
  CreatedAt: 08-02-2020
  UpdatedAt: 08-02-2020
  Description: Sample Vue Page
-->
<template>
  <div>
    {{ $route.fullPath }}
    {{ $route.params }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
   * @author - Youngjin Kwak
   * @description -
   */
@Component({
  name: 'Detail',
})
export default class Detail extends Vue {
}
</script>
