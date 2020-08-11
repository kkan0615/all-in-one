<template>
  <div>
    <v-text-field
      v-model="message"
    />
    <p>{{ message }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Test',
})
export default class Test extends Vue {
  public message = 'Test Page'

  created () {
    console.log(this.message)
  }
}
</script>
