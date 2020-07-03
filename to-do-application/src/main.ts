import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/styles/index.scss'
import '@/styles/transition.scss'

/**
 * For solving Error Not showing icon in vuetify
 * https://stackoverflow.com/questions/57053728/vuetify-icon-not-showing
 */
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
