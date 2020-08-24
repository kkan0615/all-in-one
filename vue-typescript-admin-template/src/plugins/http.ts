import _Vue from 'vue'
import defaultAxios  from '@/axios/default'

export default function defaultAxiosPlugin (Vue: typeof _Vue) {
  Vue.prototype.$http = defaultAxios
}
