/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Icon list for vuetify
import '@/axios/axiosDefault'
import '@/router/checking'
import i18n from '@/lang'
import Apollo from './apolloClient'
import VueApollo from 'vue-apollo'
/** Styles import */
import '@/styles/index.scss'
import '@/styles/transition.scss' // Transition scss

/** Vue graphql Setting */
const apolloClient = Apollo

Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/**
 * Fontawesome setting
 * link:
 *  https://github.com/FortAwesome/vue-fontawesome,
 *  https://fontawesome.com/
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/** Setting of lodash */
// import VueLodash from 'vue-lodash'
// import lodash from 'lodash'
// Vue.use(VueLodash, { name: 'custom', lodash: lodash })

import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  duration: 3000,
  theme: 'bubble',
  position: 'top-center'
})
// Vue.$toasted.show('hello billo')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  i18n,
  render: h => h(App)
}).$mount('#app')
