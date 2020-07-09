import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { colorConfig } from '@/config/defaultColorConfig'
import { ColorInterface } from '@/types/colors'

Vue.use(Vuetify)

const localStorageColor: ColorInterface = JSON.parse(localStorage.getItem('color') || JSON.stringify(colorConfig))

export const vuetify = new Vuetify({
  theme: {
    dark: localStorageColor.nightMode,
    themes: {
      dark: {
        primary: localStorageColor.primary,
        secondary: localStorageColor.secondary,
        anchor: localStorageColor.accent
      },
      light: {
        primary: localStorageColor.primary,
        secondary: localStorageColor.secondary,
        anchor: localStorageColor.accent
      }
    }
  }
})

export default vuetify
