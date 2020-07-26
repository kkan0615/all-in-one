<template>
  <div>
    {{ propMessage }} / {{ message }}
  </div>
</template>
s
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({
    name: 'Protocol',
  })
export default class Protocol extends Vue {
    @Prop() propMessage = 'message Prop'
    public message = 'message'

    mounted () {

    }
}
</script>
