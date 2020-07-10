/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

import { DesginColorInterface, designColorList, DesginColorModeEnum } from '../data/colors'

/** Minimum mobile size - vuetify is 600 */
const MOBILEWIDTH = 960
// const xs = 600
// const sm = 960
// const md = 1264
// const lg = 1904
// const xl = 1904 => 1904

export interface DesignInterface {
  isMobile: boolean,
  designColor: DesginColorInterface
}

@Module({ dynamic: true, store, namespaced: true, name: 'DesignSetting' })
class DesignSetting extends VuexModule implements DesignInterface {
  isMobile = false
  designColor = designColorList[0]

  @Mutation
  private SET_ISMOBILE(isMobile: boolean) {
    this.isMobile = isMobile
  }

  @Mutation
  private SET_DESIGNCOLOR(key: string) {
    const found = designColorList.find(e => e.key === key)
    if (found) {
      this.designColor = found
    }
  }

  @Mutation
  private SET_DESIGNCOLOROFMODE(mode: DesginColorModeEnum) {
    this.designColor.mode = mode
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
