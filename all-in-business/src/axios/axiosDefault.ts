import axios from 'axios'
import { getAuthToken } from '@/utils/authUtils'
import { getLanguageCookie } from '@/utils/cookies'
import i18n from '@/lang'
import Vue from 'vue'

axios.defaults.baseURL = 'http://127.0.0.1:8001/'

axios.defaults.withCredentials = true

axios.interceptors.response.use((config: any) => {
  return config
})

axios.interceptors.request.use((config: any) => {
  if (getAuthToken()) {
    config.headers['X-Token'] = getAuthToken()
  }

  const cookieLang = getLanguageCookie()
  if (cookieLang) {
    config.headers['locale'] = cookieLang
  } else {
    /** If there is no set cookie */
    const userLang = navigator.language.toLowerCase()

    /** Default */
    config.headers['locale'] = userLang
  }

  return config
}, (error: any) => {
  console.error(error)
  if (error.status !== 403) {
    Vue.toasted.error(i18n.t('axios.resError').toString() + ' ' + error)
  }
})
