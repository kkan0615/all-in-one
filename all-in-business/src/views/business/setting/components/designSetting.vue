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
    <v-card-actions>
      <v-spacer />
      <v-btn
        class="pa-4"
        color="primary"
      >
        Reset
      </v-btn>
      <v-color-box
        label="test"
      />
    </v-card-actions>
    <v-card-text>

      <v-row>
        <v-col
          v-for="(option, i) in colorOptions"
          :key="i"
        >
          <v-color-box
            :label="option"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import vColorBox from '@/components/inputBox/vColorBox.vue'

@Component({
  name: 'DesignSetting',
  components: {
    vColorBox
  }

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
