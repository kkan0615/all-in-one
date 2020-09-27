import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { en, ko } from 'vuetify/src/locale'

Vue.use(Vuetify)

export const vuetify = new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#3F51B5',
        secondary: '#5C6BC0',
        accent: '#1A237E',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        anchor: '',
      },
      dark: {
        primary: '#696ffb',
        secondary: '#1f2940',
        accent: '#696ffb',
        info: '#696ffb',
        success: '#4cceac',
        warning: '#ff6f59',
        error: '#a94442',
        anchor: '',
        background: '#141b2d'
      }
    }
  },
  lang: {
    locales: { en, ko },
    current: 'en'
  }
})

export default vuetify
