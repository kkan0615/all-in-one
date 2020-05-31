<template>
  <v-row justify="center">
    <v-dialog
      :value="visible"
      max-width="290"
      @click:outside="onClosePopUp"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="green darken-1" text @click="onClosePopUp">Close</v-btn>
          <v-btn color="green darken-1" text @click="onMoveButtonClick">Move</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'Confirm',
  components: {
  }
})
export default class extends Vue {
  @Prop() private visible!: boolean

  onMoveButtonClick() {
    console.log('onMoveButtonClick')
    this.onClosePopUp()
  }

  onClosePopUp() {
    this.$emit('onClose', false)
  }
}
</script>

<style lang="scss" scoped>
</style>
