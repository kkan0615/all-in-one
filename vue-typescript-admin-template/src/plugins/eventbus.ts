import eventbus from '@/utils/eventbus'
import _Vue from 'vue'

export default function EventbusPlugin (Vue: typeof _Vue): void {
  Vue.prototype.$eventbus = eventbus
}
