<template>
  <v-dialog value="visible" scrollable max-width="300px">
    <v-card>
      <v-card-title>Select Country</v-card-title>
      <v-divider />
      <v-card-text style="height: 300px;">
        test
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn color="blue darken-1" text>Close</v-btn>
        <v-btn color="blue darken-1" text>Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'OptionDialog'

})
export default class extends Vue {
  @Prop() private visible !: boolean

  // constructor() {
  //   super()
  //   this.inputArray = []
  // }
}
</script>

<style lang="scss" scoped>
</style>
