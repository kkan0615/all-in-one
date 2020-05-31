/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

/** Minimum mobile size - vuetify is 600 */
const MOBILEWIDTH = 960

export interface DesignInterface {
  isMobile: boolean,
}

@Module({ dynamic: true, store, namespaced: true, name: 'DesignSetting' })
class DesignSetting extends VuexModule implements DesignInterface {
  isMobile = false

  @Mutation
  private SET_ISMOBILE(isMobile: boolean) {
    this.isMobile = isMobile
  }

  @Action
  public setMobileSize(size: number) {
    if (size - 1 < MOBILEWIDTH) {
      this.SET_ISMOBILE(true)
    } else {
      this.SET_ISMOBILE(false)
    }
  }
}

// export Module
export const DesignSettingModule = getModule(DesignSetting)
