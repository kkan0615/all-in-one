import _Vue from 'vue'
import { eventbusKeys } from '@/types/eventbusKeys'

export default function EventbusKeysPlugin (Vue: typeof _Vue): void {
  Vue.prototype.$events = eventbusKeys
}
