<!--
  Author: Youngjin Kwak
  CreatedAt: 08-02-2020
  UpdatedAt: 08-02-2020
  Description: Sample Vue Page
-->
<template>
  <div>
    {{ propMessage }} / {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({
    name: 'Protocol',
  })
export default class Protocol extends Vue {
    @Prop() propMessage = 'message Prop'

    public message = 'message'
}
</script>
