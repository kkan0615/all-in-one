import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/lang'
import vuetify from './plugins/vuetify'

/**
 * Solve For Error: Material icon is not working
 * https://stackoverflow.com/questions/57053728/vuetify-icon-not-showing
 */
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
