import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '@/store'
import Cookies from 'js-cookie'
import router from '@/router'
import { SnackbarState } from '@/store/modules/alert'

const axiosSetting = axios.create(({
  baseURL: process.env.BASE_API || 'http://127.0.0.1:8001/',
  timeout: 5000,
  withCredentials: true
}))

axiosSetting.defaults.baseURL = 'http://127.0.0.1:8001/'

/* Set timeout to 5 seconds */
axiosSetting.defaults.timeout = 5000

axiosSetting.defaults.withCredentials = true
// auth.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* Handle request to server */
axiosSetting.interceptors.request.use((config: AxiosRequestConfig) => {
  if (Cookies.get('X-TOKEN') && Cookies.get('REFRESH-TOKEN')) {
    config.headers['ACCESS-TOKEN'] = Cookies.get('X-TOKEN')
    config.headers['REFRESH-TOKEN'] = Cookies.get('REFRESH-TOKEN')
  }

  return config
}, (error) => {
  console.error(error.message)
  console.error(error)
})

/* Handle response from server */
axiosSetting.interceptors.response.use((config: AxiosResponse) => {
  if (config.headers['access-token'])
    Cookies.set('X-TOKEN', config.headers['access-token'])

  if (config.headers['refresh-token'])
    Cookies.set('REFRESH-TOKEN', config.headers['refresh-token'])

  return config
}, async (error) => {
  /* Error Handler 403 - Token or auth error */
  if (error.response.status === 403) {
    await store.dispatch('user/logout')
  } else if(error.response.status === 405) {
    /* 405 Error is happend when logout is failed */
    Cookies.remove('X-TOKEN')
    Cookies.remove('REFRESH-TOKEN')
    await router.push({ name: 'login' })
  }

  console.log(error)
  store.commit('alert/showSnackBar', {
    content: error.response.data.message,
    color: error.response.status >= 400 ? 'error' : 'info',
  } as SnackbarState)

  return Promise.reject(error.response)
})

export default axiosSetting
