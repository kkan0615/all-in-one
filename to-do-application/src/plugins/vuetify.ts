import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#ffc107',
        accent: '#FFE57F',
        anchor: '#FFE082'
      }
    }
  }
})
