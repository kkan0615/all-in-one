import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { colorConfig } from '@/config/defaultColorConfig'
import { ColorInterface } from '@/types/colors'

Vue.use(Vuetify)

const localStorageColor: ColorInterface = JSON.parse(localStorage.getItem('color') || '{}')

export const vuetify = new Vuetify({
  theme: {
    dark: localStorageColor.nightMode || colorConfig.nightMode,
    themes: {
      dark: {
        primary: localStorageColor.primary || colorConfig.primary,
        secondary: localStorageColor.secondary || colorConfig.secondary,
        anchor: localStorageColor.accent || colorConfig.accent
      },
      light: {
        primary: localStorageColor.primary || colorConfig.primary,
        secondary: localStorageColor.secondary || colorConfig.secondary,
        anchor: localStorageColor.accent || colorConfig.accent
      }
    }
  }
})

export default vuetify
