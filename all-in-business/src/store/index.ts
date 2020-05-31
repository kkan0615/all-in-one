import Vue from 'vue'
import Vuex from 'vuex'

import { UserInterface } from './modules/uesr'
import { SettingInterface } from './modules/setting'
import { DesignInterface } from './modules/designSetting'

Vue.use(Vuex)

// Exmple 1
// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: { User: UserModule }
// })

export interface RootState {
  User: UserInterface
  Setting: SettingInterface
  DesignSetting: DesignInterface
}

// // Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({})
