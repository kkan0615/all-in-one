import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosSetting = axios.create(({
  baseURL: process.env.VUE_APP_BASE_API || 'http://127.0.0.1:8001/',
  timeout: 5000,
  withCredentials: true
}))

axiosSetting.defaults.baseURL = 'http://127.0.0.1:8001/'

/* Set timeout to 5 seconds */
axiosSetting.defaults.timeout = 5000

axiosSetting.defaults.withCredentials = true

/* Handle response from server */
/* @TODO: Change it! */
axiosSetting.interceptors.response.use((config: AxiosResponse) => {
  return config
})

/* Handle request to server */
axiosSetting.interceptors.request.use((config: AxiosRequestConfig) => {
  // if (getAuthToken()) {
  //   config.headers['X-Token'] = getAuthToken()
  // }
  //
  // const cookieLang = getLanguageCookie()
  // if (cookieLang) {
  //   config.headers['locale'] = cookieLang
  // } else {
  //   /** If there is no set cookie */
  //   const userLang = navigator.language.toLowerCase()
  //
  //   /** Default */
  //   config.headers['locale'] = userLang
  // }

  return config
}, (error) => {
  console.error(error)
})

export default axiosSetting
