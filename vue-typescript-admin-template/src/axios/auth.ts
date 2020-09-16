import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

import store from '@/store'

const auth = axios.create(({
  baseURL: process.env.VUE_APP_BASE_API || 'http://127.0.0.1:8001/',
  timeout: 5000,
  withCredentials: true,
}))

// auth.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* Handle response from server */
auth.interceptors.response.use((config: AxiosResponse) => {
  return config
}, async (error) => {
  /* Error Handler 403 - Token or auth error */
  if (error.response.status === 403) {
    await store.dispatch('user/logout')
  } else if(error.response.status === 405) {
    /* 405 Error is happend when logout is failed */
    console.log('Make 405 error handler')
  }

  return Promise.reject(error.response)
})

/* Handle request to server */
auth.interceptors.request.use((config: AxiosRequestConfig) => {
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
  console.error(error.message)
  console.error(error)
})

export default auth
