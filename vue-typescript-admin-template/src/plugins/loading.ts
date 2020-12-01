import _Vue from 'vue'
import eventbus from '@/utils/eventbus'
import { eventbusKeys } from '@/types/eventbusKeys'

export class LoadingPlugin {
  public openFullScreenLoading () {
    eventbus.$emit(eventbusKeys.loading.visible, true)
    return Promise.resolve(true)
  }

  public closeFullScreenLoading () {
    eventbus.$emit(eventbusKeys.loading.visible, false)
    return Promise.resolve(false)
  }

  public setFullScreenLoading (visible: boolean) {
    eventbus.$emit(eventbusKeys.loading.visible, visible)
    return Promise.resolve(visible)
  }
}

export function loadingPlugin (Vue: typeof _Vue): void {
  Vue.prototype.$loading = new LoadingPlugin()
}

export default loadingPlugin
