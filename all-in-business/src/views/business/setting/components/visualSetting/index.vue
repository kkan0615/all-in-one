<template>
  <v-card
    :dark="true"
  >
    <v-card-text>
      <v-switch
        v-model="isDarkMode"
        :label="isDarkMode ? 'Dark' : 'light'"
        :color="getDesignSetting.subColorOne"
      />
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col
          v-for="(item, i) in designColorList"
          :key="i"
        >
          <v-switch
            v-model="colorKey"
            :label="item.key"
            :color="getDesignSetting.subColorOne"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { DesignSettingModule } from '@/store/modules/designSetting'
import { DesginColorInterface, DesginColorModeEnum, designColorList } from '@/store/data/colors'

@Component({
  name: 'BusinessSetting'

})
export default class extends Vue {
  // private isDarkMode !: boolean
  private colorKey !: string

  constructor() {
    super()
    // this.isDarkMode = DesignSettingModule.designColor.mode === DesginColorModeEnum.dark
    this.colorKey = DesignSettingModule.designColor.key
  }

  private get getDesignSetting() : DesginColorInterface {
    return DesignSettingModule.designColor
  }

  private get designColorList() : Array<DesginColorInterface> {
    return designColorList
  }

  private get isDarkMode() : boolean {
    return DesignSettingModule.designColor.mode === DesginColorModeEnum.dark
  }

  private set isDarkMode(v : boolean) {
    let enumValue
    if (v) {
      enumValue = DesginColorModeEnum.dark
    } else {
      enumValue = DesginColorModeEnum.light
    }
    DesignSettingModule.setDesignColorMode(enumValue)
    this.$vuetify.theme.dark = DesignSettingModule.designColor.mode === DesginColorModeEnum.dark
  }
}
</script>

<style scoped>
</style>
