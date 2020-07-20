import Vue from 'vue'
import Vuex, { ModuleTree } from 'vuex'
import getters from '@/store2/getters'

Vue.use(Vuex)

// eslint-disable-next-line no-undef
const modulesFiles = require.context('./modules', true, /\.ts$/)

// eslint-disable-next-line no-shadow
const modules: ModuleTree<unknown> = modulesFiles.keys().reduce((modules: ModuleTree<unknown>, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  // eslint-disable-next-line no-param-reassign
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  modules,
  getters
})

export default store
