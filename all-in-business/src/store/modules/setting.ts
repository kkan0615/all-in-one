/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { setSetting } from '@/utils/settingUtils'
import store from '@/store'

export interface SettingInterface {
  language: string,
  currency: string
  expressionCurrency: string,
}

@Module({ dynamic: true, store, namespaced: true, name: 'setting' })
class Setting extends VuexModule implements SettingInterface {
   language = 'EN'
   currency = 'EN'
   expressionCurrency = '$'

  @Mutation
   private SET_LANGUAGE(language: string) {
     this.language = language
   }

  @Mutation
  private SET_CURRENCY(currency: string) {
    this.language = currency
    switch (currency) {
      case 'KO':
        this.expressionCurrency = '원'
        break
      case 'EN':
        this.expressionCurrency = '$'
        break
      default:
        break
    }
  }

  @Action
  public getSeting() {
    return this
  }

  @Action
  public setToCookie() {
    setSetting(this)
  }

  @Action
  public setSetting(setting: SettingInterface) {
    for (const [key, value] of Object.entries(setting)) {
      console.log(key)
      console.log(value)
    }
  }
}

// export Module
export const SettingModule = getModule(Setting)
