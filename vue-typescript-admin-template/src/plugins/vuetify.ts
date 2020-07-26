import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { en } from 'vuetify/src/locale'

Vue.use(Vuetify)

export const vuetify = new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#455D8C',
        secondary: '#7394BF',
        accent: '#222C40',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: '#455D8C',
        secondary: '#7394BF',
        accent: '#222C40',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  },
  lang: {
    locales: { en },
    current: 'ko'
  }
})

export default vuetify
