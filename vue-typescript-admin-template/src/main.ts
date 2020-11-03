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
import { AxiosStatic } from 'axios'
import notiSocketPlugin from '@/plugins/notiSocket'
import '@/router/beforeRoutes'

/* Devexpress css setting */
import 'devextreme/dist/css/dx.common.css'
// import 'devextreme/dist/css/dx.material.teal.light.compact.css'

/**
 * Solve For Error: Material icon is not working
 * https://stackoverflow.com/questions/57053728/vuetify-icon-not-showing
 */
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'devextreme/dist/css/dx.material.blue.dark.css'

/**
 * Custom scss
 */
import '@/styles/global.scss'
/* Notification Socket */

/* Confirm dialog */
import { ConfirmDialogPlugin, ConfirmDialog } from '@/plugins/confirm'
import EventbusPlugin from '@/plugins/eventbus'
import { EventbusKeys } from '@/types/eventbusKeys'
import EventbusKeysPlugin from '@/plugins/eventbuskeys'


Vue.config.productionTip = false

Vue.use(http)
Vue.use(VueCookies)
Vue.use(notiSocketPlugin)
Vue.use(ConfirmDialogPlugin)
Vue.use(EventbusPlugin)
Vue.use(EventbusKeysPlugin)

declare module 'vue/types/vue' {
  interface Vue {
    $eventbus: Vue;
    $http: AxiosStatic;
    $events: EventbusKeys;
    $notiSocket: SocketIOClient.Socket;
    $confirm: ConfirmDialog;
  }
}

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
