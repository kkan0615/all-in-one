import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { colorConfig } from '@/config/defaultColorConfig'
import { ColorInterface } from '@/types/colors'

Vue.use(Vuetify)

const currentColor: ColorInterface = JSON.parse(localStorage.getItem('color') || JSON.stringify(colorConfig))

export const vuetify = new Vuetify({
  theme: {
    dark: currentColor.nightMode,
    themes: {
      dark: {
        primary: currentColor.dark.primary,
        secondary: currentColor.dark.secondary,
        anchor: currentColor.dark.accent
      },
      light: {
        primary: currentColor.light.primary,
        secondary: currentColor.light.secondary,
        anchor: currentColor.light.accent
      }
    }
  }
})

export default vuetify
