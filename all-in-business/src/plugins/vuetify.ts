import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { DesignSettingModule } from '@/store/modules/designSetting'
import { DesginColorModeEnum } from '@/store/data/colors'

Vue.use(Vuetify)

export const vuetify = new Vuetify({
  theme: {
    dark: DesignSettingModule.designColor.mode === DesginColorModeEnum.dark
    // themes: {
    //   dark: {
    //     primary: DesignSettingModule.designColor.subColorOne,
    //     secondary: DesignSettingModule.designColor.subColorTwo,
    //     anchor: DesignSettingModule.designColor.subColorThree
    //   }
    // }
  }
})

export default vuetify
