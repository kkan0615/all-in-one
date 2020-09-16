import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '@/store'
import Cookies from 'js-cookie'

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
}, async (error) => {
  /* Error Handler 403 - Token or auth error */
  if (error.response.status === 403) {
    await store.dispatch('user/logout')
  }

  return Promise.reject(error.response)
})

/* Handle request to server */
axiosSetting.interceptors.request.use((config: AxiosRequestConfig) => {
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  if (store.state.user.token) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    config.headers['ACCESS-TOKEN'] = store.state.user.token || Cookies.get('X-TOKEN')
    // console.log(config.headers)
  }

  // config.headers['ACCESS-TOKEN'] = store.state.user.token || Cookies.get('X-TOKEN')

  return config
}, (error) => {
  console.error(error)
})

export default axiosSetting
