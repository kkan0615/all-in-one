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
        class="pa-4 mx-2"
        color="primary"
        @click="resetToDefaultColor"
      >
        Reset
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <div>Dark</div>
      <v-row>
        <v-col
          v-for="(option, i) in colorOptions"
          :key="i"
        >
          <v-color-box
            v-model="currentColor.dark[option]"
            :label="option"
            :hide-details="true"
            @change="changeColor"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
        icon
        @click="makeSameAsLight"
      >
        <v-icon>
          arrow_upward
        </v-icon>
      </v-btn>
      <v-btn
        icon
        @click="makeSameAsDark"
      >
        <v-icon>
          arrow_downward
        </v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <div>Light</div>
      <v-row>
        <v-col
          v-for="(option, i) in colorOptions"
          :key="i"
        >
          <v-color-box
            v-model="currentColor.light[option]"
            :label="option"
            :hide-details="true"
            @change="changeColor"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import vColorBox from '@/components/inputBox/vColorBox.vue'
// Utils
import { getColorFromLocalStorage, setColorToLocalStorage } from '@/utils/color'
import { colorConfig } from '@/config/defaultColorConfig'

// Types
import { ColorInterface } from '@/types/colors'

@Component({
  name: 'DesignSetting',
  components: {
    vColorBox
  }

})
export default class extends Vue {
  public isNightMode = true
  public colorOptions = ['primary', 'secondary', 'accent']
  public currentColor: ColorInterface | null = null

  public created() {
    this.currentColor = getColorFromLocalStorage()
    if (!this.currentColor) {
      throw new Error(`Error in color`)
    }
    this.isNightMode = this.currentColor.nightMode
  }

  public setNightMode() {
    const changedColor: ColorInterface = JSON.parse(JSON.stringify(this.currentColor))
    changedColor.nightMode = this.isNightMode
    setColorToLocalStorage(changedColor)
    this.$vuetify.theme.dark = this.isNightMode
  }

  public changeColor() {
    if (!this.currentColor) {
      return
    }

    setColorToLocalStorage(this.currentColor)
    this.$vuetify.theme.themes.dark.primary = this.currentColor.dark.primary
    this.$vuetify.theme.themes.dark.secondary = this.currentColor.dark.secondary
    this.$vuetify.theme.themes.dark.accent = this.currentColor.dark.accent

    this.$vuetify.theme.themes.light.primary = this.currentColor.light.primary
    this.$vuetify.theme.themes.light.secondary = this.currentColor.light.secondary
    this.$vuetify.theme.themes.light.accent = this.currentColor.light.accent
  }

  /**
   * resetToDefaultColor
   */
  public resetToDefaultColor() {
    const confirmed = confirm('Do you want to reset?')
    if (confirmed) {
      setColorToLocalStorage(colorConfig)
      this.$vuetify.theme.dark = colorConfig.nightMode
      this.$vuetify.theme.themes.dark.primary = colorConfig.dark.primary
      this.$vuetify.theme.themes.dark.secondary = colorConfig.dark.secondary
      this.$vuetify.theme.themes.dark.accent = colorConfig.dark.accent

      this.$vuetify.theme.themes.light.primary = colorConfig.light.primary
      this.$vuetify.theme.themes.light.secondary = colorConfig.light.secondary
      this.$vuetify.theme.themes.light.accent = colorConfig.light.accent
      this.currentColor = getColorFromLocalStorage()
    }
  }

  /**
   * makeSameAsDark
   */
  public makeSameAsDark() {
    if (!this.currentColor) {
      return
    }

    const confirmed = confirm('Do you want to set as dark mode?')
    if (confirmed) {
      this.currentColor.light.primary = this.currentColor.dark.primary
      this.currentColor.light.secondary = this.currentColor.dark.secondary
      this.currentColor.light.accent = this.currentColor.dark.accent

      setColorToLocalStorage(this.currentColor)

      this.$vuetify.theme.themes.light.primary = this.currentColor.dark.primary
      this.$vuetify.theme.themes.light.secondary = this.currentColor.dark.secondary
      this.$vuetify.theme.themes.light.accent = this.currentColor.dark.accent
    }
  }

  /**
   * makeSameAsLight
   */
  public makeSameAsLight() {
    if (!this.currentColor) {
      return
    }

    const confirmed = confirm('Do you want to set as dark mode?')
    if (confirmed) {
      this.currentColor.dark.primary = this.currentColor.light.primary
      this.currentColor.dark.secondary = this.currentColor.light.secondary
      this.currentColor.dark.accent = this.currentColor.light.accent

      setColorToLocalStorage(this.currentColor)

      this.$vuetify.theme.themes.dark.primary = this.currentColor.light.primary
      this.$vuetify.theme.themes.dark.secondary = this.currentColor.light.secondary
      this.$vuetify.theme.themes.dark.accent = this.currentColor.light.accent
    }
  }
}
</script>

<style scoped>
</style>
