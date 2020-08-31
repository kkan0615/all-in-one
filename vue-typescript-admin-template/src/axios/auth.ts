import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '@/store'

const auth = axios.create(({
  baseURL: process.env.VUE_APP_BASE_API || 'http://127.0.0.1:8001/',
  timeout: 5000,
  withCredentials: true
}))

/* Handle response from server */
/* @TODO: Change it! */
auth.interceptors.response.use((config: AxiosResponse) => {
  return config
})

/* Handle request to server */
auth.interceptors.request.use((config: AxiosRequestConfig) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  if (store.state.user.token) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    config.headers['X-Token'] = store.state.user.token
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  console.log(store.state.user.token)
  console.log(config.headers)
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

export default auth
