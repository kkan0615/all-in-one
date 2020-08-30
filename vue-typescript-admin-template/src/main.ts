import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/lang'
import vuetify from './plugins/vuetify'
/* Cookie - https://www.npmjs.com/package/vue-cookies */
import VueCookies from 'vue-cookies'
/* Default setting of axios */
import http from './plugins/http'
import '@/router/beforeRoutes'

/* Devexpress css setting */
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import '@fortawesome/fontawesome-free/css/all.css'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.material.teal.light.compact.css'

/**
 * Solve For Error: Material icon is not working
 * https://stackoverflow.com/questions/57053728/vuetify-icon-not-showing
 */
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(http)
Vue.use(VueCookies)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
