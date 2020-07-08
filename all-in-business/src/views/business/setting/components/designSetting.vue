<template>
  <v-card
    :dark="true"
  >
    <v-card-text>
      <v-switch
        v-model="isNightMode"
        :label="isNightMode ? 'Dark' : 'light'"
        color="primary"
        @change="setNightMode"
      />
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col
          v-for="(option, i) in colorOptions"
          :key="i"
        >
          <v-switch
            :label="option"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'DesignSetting'

})
export default class extends Vue {
  public isNightMode !: boolean
  public colorOptions = ['primary', 'secondary', 'accent']

  constructor() {
    super()
    this.isNightMode = true
  }

  public setNightMode() {
    this.$vuetify.theme.dark = this.isNightMode
  }
}
</script>

<style scoped>
</style>
